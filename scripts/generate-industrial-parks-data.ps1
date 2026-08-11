param(
  [Parameter(Mandatory = $true)]
  [string]$InputPath,
  [string]$OutputPath = ''
)

if ([string]::IsNullOrWhiteSpace($OutputPath)) {
  $OutputPath = Join-Path (Split-Path $MyInvocation.MyCommand.Path -Parent) '..\src\data\industrial-parks.json'
}

Add-Type -AssemblyName System.IO.Compression.FileSystem
$archive = [IO.Compression.ZipFile]::OpenRead((Resolve-Path $InputPath))

function Read-ZipEntry([string]$name) {
  $entry = $archive.GetEntry($name)
  $reader = [IO.StreamReader]::new($entry.Open())
  try { return $reader.ReadToEnd() } finally { $reader.Dispose() }
}

function Get-CellValue($cell, [string[]]$sharedStrings) {
  $value = [string]$cell.v
  if ([string]$cell.t -eq 's' -and $value -ne '') { return $sharedStrings[[int]$value] }
  if ([string]$cell.t -eq 'inlineStr') { return [string]$cell.is.t }
  return $value
}

try {
  [xml]$sharedStringsXml = Read-ZipEntry 'xl/sharedStrings.xml'
  [string[]]$sharedStrings = @($sharedStringsXml.sst.si | ForEach-Object {
    if ($null -ne $_.t) { [string]$_.t }
    else { ($_.r | ForEach-Object { [string]$_.t }) -join '' }
  })

  [xml]$workbook = Read-ZipEntry 'xl/workbook.xml'
  $sheetNames = @($workbook.workbook.sheets.sheet | ForEach-Object { [string]$_.name })
  $records = [Collections.Generic.List[object]]::new()

  for ($sheetIndex = 1; $sheetIndex -le $sheetNames.Count; $sheetIndex++) {
    $sheetName = $sheetNames[$sheetIndex - 1]
    if ($sheetName -eq 'Notas') { continue }
    [xml]$sheet = Read-ZipEntry ("xl/worksheets/sheet{0}.xml" -f $sheetIndex)

    foreach ($row in @($sheet.worksheet.sheetData.row) | Select-Object -Skip 1) {
      $values = @{}
      foreach ($cell in $row.c) {
        $column = ([string]$cell.r) -replace '\d', ''
        $values[$column] = Get-CellValue $cell $sharedStrings
      }

      $companyName = [string]$values['C']
      $parkName = [string]$values['B']
      if ([string]::IsNullOrWhiteSpace($companyName) -and [string]::IsNullOrWhiteSpace($parkName)) { continue }
      $isPark = [string]::IsNullOrWhiteSpace($companyName)
      $name = if ($isPark) { $parkName.Trim() } else { $companyName.Trim() }
      $contact = [string]$values['E']
      $source = [string]$values['F']
      if ([string]::IsNullOrWhiteSpace($source) -and $contact -match '^https?://') { $source = $contact; $contact = '' }

      $records.Add([ordered]@{
        name = $name
        location = ([string]$values['A']).Trim()
        parkName = if ($isPark) { '' } else { $parkName.Trim() }
        industry = ([string]$values['D']).Trim()
        publicContact = $contact.Trim()
        sourceUrl = $source.Trim()
        organizationType = if ($isPark) { 'industrial_park' } else { 'company' }
        sourceSheet = $sheetName
      })
    }
  }

  $json = $records | ConvertTo-Json -Depth 4
  [IO.File]::WriteAllText((Join-Path (Resolve-Path (Split-Path $OutputPath -Parent)) (Split-Path $OutputPath -Leaf)), $json, [Text.UTF8Encoding]::new($false))
  Write-Output ("Generated {0} records at {1}" -f $records.Count, $OutputPath)
}
finally {
  $archive.Dispose()
}

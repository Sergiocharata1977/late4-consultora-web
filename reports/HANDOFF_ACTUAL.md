# Handoff Actual - 03-Late4-Consultora

**Fecha:** 2026-06-26
**Proyecto:** 03-Late4-Consultora / Late 4 Consultora Web
**Nombre canonico de carpeta:** `03-Late4-Consultora`
**Stack:** Next.js 14 + TypeScript + Tailwind CSS + Firebase + Vercel
**Estado general:** Landing institucional de Late 4 Consultora.

## Regla de identificacion

Usar siempre el prefijo `03-` al pedir o coordinar trabajo sobre este repo. Este proyecto es independiente del resto del conjunto y no debe confundirse con:

- `01-9001app` / Don Candido IA
- `02-Agro-credit` / Agro-Credit
- `10-Agro Biciuffa - Auditorias e ISO 9001` / Agro Core/Admin
- `11-Landing-Agrobiciufa` / Landing Agro Biciuffa

## Lectura obligatoria al retomar

1. `reports/HANDOFF_ACTUAL.md`
2. `README.md`
3. Archivos de configuracion del proyecto antes de tocar build, deploy o Firebase.

## Comandos base

```bash
npm run dev
npm run build
npm run start
```

## Pendientes conocidos

- Completar este handoff con estado funcional detallado cuando se retome trabajo activo en Late4.
- Evitar mezclar cambios de deploy o cache local con cambios funcionales.

## Actualizacion 2026-06-27 - Ajuste de ancho visual

- Se redujo el ancho maximo del contenido principal de la landing de `max-w-7xl` a una clase comun `.site-container` con `max-w-5xl` (1024px), equivalente a ~20% menos.
- Archivos tocados: `src/app/globals.css`, `src/components/Header.tsx`, `src/components/Hero.tsx`, `src/components/ProblemSection.tsx`, `src/components/ServicesSection.tsx`, `src/components/MethodSection.tsx`, `src/components/SoftwareSection.tsx`, `src/components/Footer.tsx`.
- Validacion: `npm run type-check` OK.
- Verificacion visual local: `agent-browser` en `http://localhost:3000`, sin overlay de error, contenido renderizado; hero/header medidos en 1024px sobre viewport de 1264px.
- Pendiente: deploy/commit/push no ejecutados en esta sesion.

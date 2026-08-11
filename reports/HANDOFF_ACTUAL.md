# Handoff Actual - 03-Late4-Consultora

**Fecha:** 2026-06-26
**Proyecto:** 03-Late4-Consultora / Late 4 Consultora Web
**Nombre canonico de carpeta:** `03-Late4-Consultora`
**Stack:** Next.js 14 + TypeScript + Tailwind CSS + Firebase + Vercel
**Estado general:** Landing institucional de Late 4 Consultora.

## Regla permanente de validacion local

- Este repositorio se trabaja desde una memoria externa.
- No ejecutar `npm install`, `npm run build`, `npm run type-check`, lint ni tests localmente.
- No instalar ni reparar dependencias locales para intentar compilar.
- Usar solamente controles estaticos simples: lectura, busquedas, `git diff --check` y revision del diff.
- El flujo de cierre es: controles simples, commit, push y validacion mediante el deployment de Vercel.
- Toda entrega debe informar el resultado de Vercel; una compilacion local no forma parte del flujo de este proyecto.

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

## Actualizacion 2026-08-10 - CRM interno de contactos

- Se agrego la seccion privada `/interno/crm` para gestionar las consultas recibidas desde la landing.
- El CRM reutiliza la coleccion existente `contactRequests` e incorpora metricas, busqueda, filtros, alta manual, edicion, estados, notas internas, proximo seguimiento y accesos a email/WhatsApp.
- El acceso usa Firebase Authentication con email y contrasena; `/interno` redirige al CRM.
- Se agregaron `firestore.rules` y `firebase.json`: la landing solo puede crear consultas con estado/origen controlados y la lectura o gestion exige autenticacion.
- Firebase Authentication ya cuenta con el usuario interno `sergiojdf@gmail.com` y proveedor Email/Password.
- Reglas compiladas y desplegadas mediante Firebase CLI en `late-4-consultora` el 2026-08-10.
- Se creo `users/{uid}` para `sergiojdf@gmail.com` con rol `admin` y estado activo; el CRM valida ese perfil antes de habilitar la gestion.
- El acceso incorpora mostrar/ocultar contrasena y recuperacion por email.
- El CRM se organiza con menu lateral en Oportunidades, Empresas y Contactos.
- `contactRequests` conserva las oportunidades originadas en la web; `crmCompanies` almacena empresas y `crmContacts` personas.
- Los contactos usan `companyIds` para una relacion muchos-a-muchos con empresas. Las empresas con el mismo `groupName` se muestran automaticamente como integrantes del mismo grupo empresario.
- Oportunidades dispone de vistas Kanban, tarjetas y lista; Empresas dispone de tarjetas y lista.
- La seccion Usuarios permite a administradores crear cuentas `admin` u `operator` mediante una instancia secundaria de Firebase Auth, sin cerrar la sesion actual.
- Administradores y operadores activos acceden al CRM; solo administradores gestionan perfiles en `users`.
- Acciones comerciales se almacenan en `crmActions` con tipo llamada, visita, email, reunion, tarea u otra; pueden vincular empresa, contacto y oportunidad.
- El alta/edicion interna de oportunidades selecciona la empresa desde `crmCompanies` y persiste `companyId` junto al nombre visible; los leads web historicos sin identificador siguen siendo legibles.

## Actualizacion 2026-08-11 - Base de parques industriales

- Se adapto Empresas para distinguir empresas de parques/distritos industriales y guardar ubicacion, parque asociado, contacto publico y fuente.
- Se incorporo una base normalizada de 160 prospectos: 49 empresas verificadas y 111 parques/distritos de Provincia de Buenos Aires, CABA, Rosario y Gran Rosario.
- La pantalla Empresas incluye una importacion idempotente: usa identificadores deterministas y omite coincidencias existentes para evitar duplicados.
- El dataset versionado esta en `src/data/industrial-parks.json`; `scripts/generate-industrial-parks-data.ps1` permite regenerarlo desde la planilla fuente.

## Actualizacion 2026-06-27 - Ajuste de ancho visual

- Se redujo el ancho maximo del contenido principal de la landing de `max-w-7xl` a una clase comun `.site-container` con `max-w-5xl` (1024px), equivalente a ~20% menos.
- Archivos tocados: `src/app/globals.css`, `src/components/Header.tsx`, `src/components/Hero.tsx`, `src/components/ProblemSection.tsx`, `src/components/ServicesSection.tsx`, `src/components/MethodSection.tsx`, `src/components/SoftwareSection.tsx`, `src/components/Footer.tsx`.
- Validacion: `npm run type-check` OK.
- Verificacion visual local: `agent-browser` en `http://localhost:3000`, sin overlay de error, contenido renderizado; hero/header medidos en 1024px sobre viewport de 1264px.
- Pendiente: deploy/commit/push no ejecutados en esta sesion.

## Actualizacion 2026-07-08 - Rediseño home Late4 by De Filippi

- Se aplico el rediseño de home con propuesta de valor consultoria + calidad ISO + tecnologia para PyMEs.
- Nueva narrativa: transformacion operativa, problema Excel/WhatsApp/papeles, servicios de consultoria y tech, metodo Late4 en 5 pasos, casos Don Candido IA y Agro Biciuffa, CTA final.
- Assets generados y guardados en `public/images/late4-hero-consultoria.png`, `public/images/case-don-candido.png`, `public/images/case-agro-biciuffa.png`.
- Archivos tocados: `src/app/page.tsx`, `src/app/globals.css`, `tailwind.config.ts`, `src/components/Header.tsx`, `Hero.tsx`, `ProblemSection.tsx`, `ServicesSection.tsx`, `MethodSection.tsx`, `SoftwareSection.tsx`, `Footer.tsx`.
- Validacion liviana: `git diff --check` OK y busqueda de caracteres rotos en `src/components`, `src/app`, `tailwind.config.ts` OK.
- Pendiente: `npm install` / `npm run type-check` y verificacion visual local. La instalacion de dependencias en `D:\Proyectos\late4-consultora-web` quedo muy lenta y fue detenida; los cambios de codigo quedaron aplicados en disco.

### Ajuste posterior 2026-07-08

- Se reemplazo la imagen principal del hero por foto personal del consultor.
- Asset agregado: `public/images/sergio-defilippi-hero.png`.
- Archivo tocado: `src/components/Hero.tsx`.
- Ajuste visual posterior: el retrato del hero usa marco mas panoramico (`16/10`) y `object-contain` para evitar zoom excesivo y mostrar mejor los brazos cruzados.

## Actualizacion 2026-07-08 - Correccion de cards de proyectos

- Se corrigio la seccion `Proyectos` / `Casos de Exito` para que la enumeracion visual sea 01/02/03.
- `Don Candido IA` queda presentado como plataforma SaaS ISO 9001 + IA, sin menciones a trazabilidad animal ni stock de campo.
- `Agro Biciuffa` queda presentado como web publica + plataforma interna privada, con link solo a `https://www.agrobiciuffa.com.ar`.
- Se agrego `Don Juan GIS` como tercer proyecto, con estado `En desarrollo avanzado - 80%`.
- Archivo tocado: `src/components/SoftwareSection.tsx`.
- Validacion: `git diff --check` OK. `npm run type-check` no pudo ejecutarse porque `tsc` no esta disponible localmente; falta instalar dependencias en este repo.

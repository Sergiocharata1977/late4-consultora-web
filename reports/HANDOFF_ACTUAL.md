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

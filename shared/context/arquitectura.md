# ARQUITECTURA DE INFORMACIÓN — GAMANTRI
> Redactado por Isabella [DSGN] · Sesión 2026-03-22

---

## MAPA DE SITIO

```
HOME (/)
│
├── OBRAS (/obras)
│   └── [Obra individual] (/obras/[slug])
│
├── CURSOS (/cursos)
│   └── Diagnóstico (/cursos/diagnostico)
│
├── SERVICIOS (/servicios)
│   └── Briefing (/servicios/briefing)
│
└── [MODAL] Sobre Cris  ← overlay, no es página
```

---

## HOME — ORDEN DE SECCIONES

1. Selector de idioma ES / EN (header fijo)
2. HERO — imagen full-screen de una Obra + logotipo + tagline
3. ⭐ OBRAS SERIADAS (prioridad) — grilla de 3-4 obras + CTA "Ver colección"
4. CURSOS — bloque compacto + CTA "Quiero aprender"
5. SERVICIOS — bloque compacto + CTA "Hablemos de tu proyecto"
6. CLIENTES / MARCAS — logos
7. FOOTER — Sobre Cris (modal) · IG · Email · WhatsApp · © Gamantri

---

## PÁGINAS

### / — HOME
Distribución a las 3 líneas. Obras como protagonista.

### /obras — OBRAS SERIADAS
Grilla de ediciones. Cada obra: foto, título, edición disponible, precio, estado (disponible / sold out), CTA.

### /obras/[slug] — OBRA INDIVIDUAL
Foto full-width, info completa, edición, precio, botón de compra → pasarela de pago.
Carrusel de otras obras al final.

### /cursos — CURSOS
Propuesta, modalidades, idiomas, proceso (3 pasos visuales), testimonios.
CTA → /cursos/diagnostico

### /cursos/diagnostico — FORMULARIO DE DIAGNÓSTICO
Nombre, país, nivel, tipo de fotografía, modalidad, idioma, equipo, objetivo.
Envío → email automático a Cris.

### /servicios — SERVICIOS AUDIOVISUALES
Portfolio (fotos + video), tipos de trabajo, logos de clientes.
CTA → /servicios/briefing

### /servicios/briefing — FORMULARIO DE BRIEFING
Nombre/empresa, tipo de proyecto, locación, fechas, referentes, presupuesto (opcional).
Envío → email automático a Cris.

---

## MODAL — SOBRE CRIS
Overlay activado desde el footer.
Contenido: foto, bio, hitos, clientes, links.

---

## CTAs ESPECÍFICOS POR SECCIÓN

| Sección       | CTA                          | Destino                    |
|---------------|------------------------------|----------------------------|
| Obras         | "Comprar"                    | Pasarela de pago           |
| Cursos        | "Quiero aprender"            | /cursos/diagnostico        |
| Servicios     | "Hablemos de tu proyecto"    | /servicios/briefing        |
| Footer        | IG · Email · WhatsApp        | Links directos             |
| Footer        | "Sobre Cris"                 | Modal overlay              |

---

## DECISIONES CONFIRMADAS

- Obras Seriadas: prioridad en Home
- Cursos y Servicios: segundo plano (debajo del fold)
- Sobre Cris: modal/overlay, no página separada
- Contacto: solo en footer + CTAs específicos por sección
- Selector de idioma: header fijo en todas las páginas

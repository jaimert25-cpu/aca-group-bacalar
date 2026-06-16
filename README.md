# Grupo ACA · Bacalar — Sitio en Next.js

Sitio de marca del grupo hotelero, frente a la Laguna de los Siete Colores.
Hecho con **Next.js 14 (App Router)** + **TypeScript**. Diseño data-driven:
todo el contenido vive en un solo archivo y los componentes lo recorren.

## Cómo correrlo en tu compu

```bash
npm install      # instala dependencias (una sola vez)
npm run dev      # servidor de desarrollo en http://localhost:3000
npm run build    # compila para producción (verifica que todo esté sano)
```

## Estructura

```
app/
  layout.tsx        Cabecera HTML, fuentes, metadatos SEO, provee la galería
  page.tsx          Arma la página: ordena las secciones
  globals.css       Todo el diseño (paleta laguna, tipografías, responsivo)
components/
  Header / Hero / Booking / Manifesto / Hotels / Muelle /
  Tours / Dining / Departamentos / Destino / CTA / Footer
  GalleryProvider   Estado del visor de fotos (lightbox) compartido
  ScrollReveal      Animaciones al hacer scroll
data/
  content.ts        ← EL ARCHIVO QUE VAS A EDITAR para cambiar contenido
public/
  images/           Las fotos (Next genera versiones ligeras automáticamente)
```

## Cómo editar contenido

Casi todo se cambia en **`data/content.ts`**:

- **Precios, descripciones, Instagram de cada hotel** → arreglo `hotels`.
- **Restaurantes, tours, departamentos** → arreglos `restaurants`, `tours`, `departamentos`.
- **WhatsApp y correo reales** → objeto `site` (ahí está el `TODO` del número).
- **Agregar fotos a un hotel** (ej. Aldea Chee-eek):
  1. Pon las fotos en `public/images/` (ej. `aldea-1.jpg`, `aldea-2.jpg`…).
  2. Agrega la galería en `galleries` con sus textos.
  3. En el hotel, pon `gallery: "aldea"` y `cover: "/images/aldea-1.jpg"`.

No tocas el diseño: la tarjeta, el badge "Ver fotos" y el visor se arman solos.

## Subir a GitHub y desplegar en Vercel

1. Sube **toda la carpeta** a un repo nuevo de GitHub (NO subas `node_modules`
   ni `.next` — ya están ignorados en `.gitignore`).
2. En Vercel: **Add New → Project → Import** ese repo.
3. Vercel detecta Next.js solo. Dale **Deploy**. No necesitas configurar nada.
4. Cada vez que hagas un commit, Vercel vuelve a desplegar automáticamente.

> Tu dominio `acagroupbacalar.com` se conecta igual que antes:
> Vercel → Settings → Domains.

## Lo que sigue (etapas que platicamos)

- **Etapa 2 — Español / Inglés (i18n):** los textos de `content.ts` se moverán a
  archivos de traducción y se añadirá `next-intl`. La estructura ya está lista.
- **Etapa 3 — Páginas por hotel + reservas:** una página propia por propiedad
  (`/hoteles/tropic-bacalar`) y motor de reservas con Supabase.

## Pendientes de contenido

- Número real de WhatsApp y redes oficiales (en `data/content.ts` → `site`).
- Fotos de **Aldea Chee-eek**.
- Decidir las 2 fotos de Maya que quedaron fuera (bandera / comensal).
- Instagram de Choco Peek y Cache Cache.
Deploy limpio v2

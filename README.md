# Premier Schools Exhibition – Landing Page

Pixel-perfect implementation of the Premier Schools Exhibition (PSE) Gurugram 2025 landing page from Figma.

## Quick Start

Open `index.html` in a modern browser, or serve locally:

```bash
npx serve .
```

## Project Structure

```
├── index.html
├── css/
│   ├── variables.css      # Design tokens (colors, typography, spacing)
│   ├── reset.css          # Base reset, utilities, shared components
│   ├── navbar.css
│   ├── hero.css
│   ├── logos.css
│   ├── school.css
│   ├── exhibition.css
│   ├── footer.css
│   ├── responsive.css
│   └── style.css          # Imports all partials
├── js/
│   ├── navbar.js
│   ├── hero-slider.js
│   ├── logos.js
│   ├── school-slider.js
│   ├── exhibition-slider.js
│   └── main.js
└── assets/
    ├── images/            # Exported from Figma
    ├── icons/             # SVG icons (see Assets note below)
    └── fonts/
```

## Features

- Hero dual-axis vertical marquee with horizontal slide carousel
- Auto-play sliders with pause on hover, swipe, keyboard, and pagination
- Participating schools logo marquee (LTR + reverse RTL rows)
- Mobile school category card slider (≤1024px)
- Exhibition highlights carousel with arrows and dots
- WCAG 2.2 AA: semantic HTML, skip link, ARIA, focus states, `prefers-reduced-motion`
- Responsive breakpoints: 1920, 1440, 1024, 768, 480, 375px

## Design Source

[Figma – Premier Schools Exhibition LP](https://www.figma.com/design/uZ4DJ3er9xPeKYeb80VdMG/Premier-Schools-Exhibition--PSE--LP--12-06-2025-?node-id=1376-1295)

Typography substitutes: **Outfit** and **Archivo** stand in for Museo Sans from the design file (loaded via Google Fonts).

## Assets Note

Raster images (hero photos, school logos, cards, schedule photo, site logo) were exported from Figma via the Framelink MCP.

SVG icon exports from Figma hit the **Figma API rate limit** during build. Icons in `assets/icons/` are hand-crafted SVGs aligned to Figma dimensions and colors. To replace with exact Figma exports, re-run image export for nodes:

- `1376:1306` (title), `1376:1376` (stats), `I1376:1763;569:5242` (arrow)
- `1376:1674–1746` (exhibition icons)
- `1376:1853`, `1376:1870`, `1376:1881–1891` (footer icons)

## Browser Support

Chrome, Firefox, Safari, and Edge (latest two versions).

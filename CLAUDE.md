# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Production build — always run this to verify no errors before finishing
npm run lint      # ESLint check
npm run preview   # Preview production build locally
```

There are no tests in this project.

## Architecture

**React 19 + Vite SPA** with three routes, each being a full page composed of stacked section components:

- `/` → `src/pages/Home/` — Hero, SobreNosotros, LineasNegocio, Testimonios, Contacto
- `/constructora` → `src/pages/Constructora/` — Hero, Servicios, Portafolio, PorQueElegirnos, CTAConstructora
- `/aire-acondicionado` → `src/pages/AireAcondicionado/` — Hero, Servicios, Marcas, Cobertura, CTAAire

Each page's `index.jsx` is the layout shell: it imports `Navbar` + `Footer` from `src/components/` and stacks the section components inside `<main>`. All data (services, testimonials, portfolio items, etc.) is **hardcoded as arrays inside each component file** — there is no backend or API.

## Styling

**Tailwind CSS 3** with three custom color palettes defined in `tailwind.config.js`:
- `verde-*` — used exclusively in the Constructora division (greens)
- `azul-*` — used exclusively in the AireAcondicionado division (blues)
- `tierra-*` — earth tones (accent use)

Font is Inter, loaded via Google Fonts in `src/index.css`.

## Animations

**Framer Motion** is used throughout. The consistent animation pattern is:

```jsx
const ease = [0.25, 0.1, 0.25, 1]  // Apple-style easing used across all components

// Scroll-triggered (most common)
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: '-80px' }}
/>

// Page load (Hero sections only — use animate, not whileInView)
<motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} />
```

Reuse the `fadeUp`, `fadeLeft`, `fadeRight`, and `stagger` variant objects that already exist in each file — do not reinvent them. Background images in Hero sections use `initial={{ scale: 1.08 }} animate={{ scale: 1 }}` for the zoom-out entrance effect.

## Division color coding convention

When adding UI to a page, match its division color:
- Constructora components → `verde-*` classes
- AireAcondicionado components → `azul-*` classes
- Shared/Home components → `gray-*` (neutral)

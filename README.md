# Personal Portfolio — Valentina Burbano

Portfolio personal construido con **React + TypeScript + Tailwind CSS v4 + Vite**.

## Tech Stack

- **React 19** con **TypeScript**
- **Tailwind CSS v4** (plugin de Vite)
- **Vite 8** (beta)
- **Lucide React** para íconos
- **Google Fonts**: Outfit + Playfair Display

## Instalación

```bash
npm install
npm run dev
```

## Scripts

| Comando         | Descripción                          |
|-----------------|--------------------------------------|
| `npm run dev`   | Servidor de desarrollo               |
| `npm run build` | Compila TypeScript + build producción |
| `npm run lint`  | Ejecuta ESLint                       |
| `npm run preview` | Preview del build de producción    |

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── AnimatedBorderButton.tsx
│   └── Button.tsx
├── layout/              # Layout components
│   └── Navbar.tsx
├── sections/            # Secciones de la página
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Testimonials.tsx
├── App.tsx
├── main.tsx
├── index.css
└── vite-env.d.ts
```

# Personal Portfolio — Valentina Burbano

Portfolio personal construido con **React 19 + TypeScript + Tailwind CSS v4 + Vite**.

## 🚀 Tech Stack

- **React 19.2.0** con **TypeScript**
- **Tailwind CSS v4.1.18** (plugin de Vite)
- **Vite 8** 
- **Lucide React** - Íconos
- **ESLint** - Linting

## 📦 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build producción
npm run build

# Preview de producción
npm run preview

# Lint
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── common/       → Componentes reutilizables
│   ├── layout/       → Navbar, Footer
│   ├── sections/     → Hero, About, Experience, Projects, Testimonials
│   └── index.ts
├── config/           → Constantes
├── contexts/         → React Context (Theme, Language)
├── hooks/            → Custom Hooks
├── i18n/             → Internacionalización (es, en)
├── types/            → TypeScript types
├── utils/            → Utilidades
├── assets/           → Imágenes, Iconos
├── App.tsx
├── main.tsx
└── index.css         → Tailwind + Custom theme
```

## 🎨 Características

- ✅ Modo Oscuro/Claro
- ✅ Internacionalización (ES/EN)
- ✅ Diseño Responsivo con Tailwind CSS
- ✅ TypeScript type-safe
- ✅ Componentes Reutilizables

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

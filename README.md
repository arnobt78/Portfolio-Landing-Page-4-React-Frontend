# Portfolio Landing Page 4 - React, Vite, TailwindCSS, Three.js, GSAP, JavaScript Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-green)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-blueviolet)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r174-black)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-green)](https://greensock.com/gsap/)

A modern, single-page portfolio built with **React**, **Vite**, and **Tailwind CSS**. It showcases a developer profile with a hero section, project highlights, experience timeline, tech stack (including 3D visuals via Three.js), testimonials, and a contact form powered by EmailJS. The project is ideal for learning React patterns, GSAP animations, and React Three Fiber.

- **Live Demo:** [https://portfolio-ui-4.vercel.app/](https://portfolio-ui-4.vercel.app/)

---

## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [How the Project Works](#how-the-project-works)
- [Sections & Features](#sections--features)
- [Components Guide](#components-guide)
- [Reusing Components in Other Projects](#reusing-components-in-other-projects)
- [API & Backend](#api--backend)
- [Routes & Navigation](#routes--navigation)
- [Build & Deployment](#build--deployment)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Introduction

This repository is **Portfolio Landing Page 4** — a frontend-only portfolio template. It uses **React 19** with **Vite 6** for fast development and **Tailwind CSS 4** for styling. Animations are handled by **GSAP** (including ScrollTrigger), and the hero and contact areas include **3D scenes** built with **React Three Fiber** and **Three.js**. The contact form sends emails via **EmailJS** (no custom backend required). The codebase is structured for clarity and reuse: shared constants, reusable UI components, and section-based layout make it easy to customize or copy parts into other projects.

---

## Tech Stack

| Category     | Technology                                                                  |
| ------------ | --------------------------------------------------------------------------- |
| Framework    | React 19                                                                    |
| Build tool   | Vite 6                                                                      |
| Styling      | Tailwind CSS 4                                                              |
| Animation    | GSAP, @gsap/react, ScrollTrigger                                            |
| 3D / WebGL   | Three.js, React Three Fiber, @react-three/drei, @react-three/postprocessing |
| Contact form | EmailJS (@emailjs/browser)                                                  |
| Responsive   | react-responsive                                                            |
| Linting      | ESLint 9 (flat config)                                                      |

---

## Project Structure

```bash
portfolio-ui-4/
├── public/
│   ├── images/          # SVGs, PNGs (logo, icons, project screenshots, etc.)
│   └── (optional) models/  # GLB 3D models for tech stack
├── src/
│   ├── components/      # Reusable UI and 3D components
│   │   ├── AnimatedCounter.jsx
│   │   ├── Button.jsx
│   │   ├── ExpContent.jsx
│   │   ├── GlowCard.jsx
│   │   ├── NavBar.jsx
│   │   ├── TitleHeader.jsx
│   │   └── models/
│   │       ├── contact/       # Contact section 3D (Computer, ContactExperience)
│   │       ├── hero_models/   # Hero 3D (HeroExperience, Room, Particles, HeroLights)
│   │       └── tech_logos/    # Tech stack 3D cards (TechIconCardExperience)
│   ├── sections/        # Page sections (one per major block)
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── FeatureCards.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LogoShowcase.jsx
│   │   ├── ShowcaseSection.jsx
│   │   ├── TechStack.jsx
│   │   └── Testimonials.jsx
│   ├── constants/
│   │   └── index.js     # navLinks, words, counterItems, abilities, testimonials, etc.
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # Tailwind + custom theme & utilities
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** (or yarn/pnpm)

### Install and run

```bash
# Clone the repository (or use your fork)
git clone <your-repo-url>
cd portfolio-ui-4

# Install dependencies
npm install

# Create environment file (see Environment Variables below)
cp .env.example .env
# Edit .env with your EmailJS keys if you want the contact form to work

# Start development server
npm run dev
```

Then open **<http://localhost:5173>** (or the URL Vite prints).

### Scripts

| Command           | Description                 |
| ----------------- | --------------------------- |
| `npm run dev`     | Start Vite dev server       |
| `npm run build`   | Production build to `dist/` |
| `npm run preview` | Preview production build    |
| `npm run lint`    | Run ESLint                  |

---

## Environment Variables

The app uses **Vite**'s env system: only variables prefixed with `VITE_` are exposed to the client.

### Required for contact form (EmailJS)

The contact form in `src/sections/Contact.jsx` uses EmailJS. Set these in a `.env` file at the project root:

| Variable                       | Description              |
| ------------------------------ | ------------------------ |
| `VITE_APP_EMAILJS_SERVICE_ID`  | Your EmailJS service ID  |
| `VITE_APP_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |
| `VITE_APP_EMAILJS_PUBLIC_KEY`  | Your EmailJS public key  |

### How to get these values

1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/).
2. Create an **Email Service** (e.g. Gmail) and note the **Service ID**.
3. Create an **Email Template** and note the **Template ID**. Use template variables that match the form field names: `name`, `email`, `message` (see `Contact.jsx`).
4. In the dashboard, find your **Public Key**.
5. Create a `.env` file (and optionally `.env.example` without secret values):

```env
# .env.example (commit this; do not commit .env with real keys)
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

1. Restart the dev server after changing `.env`.

If these are missing, the form will still render; `emailjs.sendForm` will fail at submit (you can handle that with a user-facing error message or toast).

---

## How the Project Works

1. **Entry:** `index.html` loads `src/main.jsx`, which renders `<App />` inside a root div.
2. **App:** `App.jsx` composes the page from a fixed-order list of sections: NavBar, Hero, ShowcaseSection, LogoShowcase, FeatureCards, Experience, TechStack, Testimonials, Contact, Footer.
3. **Data:** Content (links, copy, images, 3D model paths) lives in `src/constants/index.js`. Sections import what they need and map over arrays to render UI.
4. **Styling:** Tailwind is used via `@tailwindcss/vite`. Global styles and theme (colors, fonts, utility classes like `flex-center`, `section-padding`, `grid-4-cols`) are in `src/index.css`.
5. **Animations:** GSAP and ScrollTrigger drive scroll-based and entrance animations; `useGSAP` is used in Hero, ShowcaseSection, Experience, TechStack, and AnimatedCounter.
6. **3D:** React Three Fiber (`Canvas`) wraps 3D scenes in Hero (HeroExperience), Contact (ContactExperience), and TechStack (TechIconCardExperience). Models are GLB files and/or built from Three.js primitives.

---

## Sections & Features

| Section             | ID / anchor     | Main features                                                                               |
| ------------------- | --------------- | ------------------------------------------------------------------------------------------- |
| **NavBar**          | —               | Scroll-aware style, anchor links (Work, Experience, Skills, Testimonials), “Contact me” CTA |
| **Hero**            | `#hero`         | Headline with rotating “words”, CTA button, 3D room scene, AnimatedCounter stats            |
| **ShowcaseSection** | `#work`         | Project cards with GSAP scroll-in; highlights 3 projects (e.g. Ryde, Library, YC Directory) |
| **LogoShowcase**    | —               | Marquee of company/client logos                                                             |
| **FeatureCards**    | —               | Three ability cards (e.g. Quality, Communication, On-Time Delivery) from `abilities`        |
| **Experience**      | `#experience`   | Timeline with GlowCard + ExpContent: role, date, responsibilities, scroll animations        |
| **TechStack**       | `#skills`       | 3D tech cards (React, Python, Node, Three.js, Git) with R3F and optional GLB models         |
| **Testimonials**    | `#testimonials` | Masonry-style grid of GlowCard testimonials                                                 |
| **Contact**         | `#contact`      | Form (name, email, message) + 3D scene; submit via EmailJS                                  |
| **Footer**          | —               | Terms, social icons, copyright                                                              |

---

## Components Guide

### TitleHeader

Section heading with a badge line and main title.

```jsx
<TitleHeader title="Your Section Title" sub="Optional badge or subtitle" />
```

---

### Button (CTA)

Smooth-scroll CTA that scrolls to the element with `id="counter"` when an `id` prop is passed.

```jsx
<Button text="See My Work" className="md:w-80 md:h-16 w-60 h-12" id="counter" />
```

---

### GlowCard

Card with mouse-follow glow and optional children (e.g. review text + avatar).

```jsx
<GlowCard card={item} index={index}>
  <div>{/* Your content: image, title, etc. */}</div>
</GlowCard>
```

`card` typically has at least `review`; other fields depend on usage (e.g. `imgPath`, `title` in Experience/Testimonials).

---

### AnimatedCounter

Count-up numbers driven by GSAP ScrollTrigger when `#counter` enters view. Data from `counterItems` in constants.

```jsx
<AnimatedCounter />
```

---

### NavBar

Uses `navLinks` from constants for anchor links. Toggles a “scrolled” class based on `window.scrollY` for styling.

---

### 3D components

- **HeroExperience:** Canvas with Room, lights, particles; responsive scale and orbit controls.
- **ContactExperience:** Canvas with Computer model and ground plane.
- **TechIconCardExperience:** One Canvas per tech card; loads GLB from `model.modelPath` and applies optional material overrides (e.g. for “Interactive Developer”).

Reuse: copy the component and adjust `modelPath`, `scale`, `rotation` from constants or props.

---

## Reusing Components in Other Projects

1. **Copy the component file** (and any assets it depends on, e.g. images, GLB paths).
2. **Install the same dependencies** (e.g. `gsap`, `@gsap/react`, `three`, `@react-three/fiber`, `@react-three/drei`) if you use 3D or GSAP.
3. **Tailwind:** Reuse the same utility/theme classes from `index.css`, or copy the needed `@layer` utilities/components and Tailwind config.
4. **Constants:** Replace or duplicate `constants/index.js` and pass the same shape of data (e.g. `card` with `review`, `imgPath`, `title`) so components do not break.
5. **Example: use TitleHeader elsewhere**

```jsx
// In any React project with Tailwind
const TitleHeader = ({ title, sub }) => (
  <div className="flex flex-col items-center gap-5">
    <div className="hero-badge">
      <p>{sub}</p>
    </div>
    <h1 className="font-semibold md:text-5xl text-3xl text-center">{title}</h1>
  </div>
);
```

1. **Example: use GlowCard for any list of “cards”**

Ensure each item has at least a `review` (or adapt the component to use a different prop). Use the same CSS classes or bring the `.card`, `.glow`, `.card-border` styles from `index.css`.

---

## API & Backend

- There is **no custom backend**. The app is a static frontend.
- **EmailJS** is the only “API”: the contact form sends email via EmailJS’s client SDK using your Service, Template, and Public Key. All configuration is in environment variables and EmailJS dashboard (templates, services).
- No other API calls are made; content is from `constants/index.js` and static assets.

---

## Routes & Navigation

The app is a **single-page application**. “Routes” are **anchor links** to section IDs:

- `#hero` — Hero
- `#work` — ShowcaseSection
- `#experience` — Experience
- `#skills` — TechStack
- `#testimonials` — Testimonials
- `#contact` — Contact

NavBar and CTA buttons use `<a href="#sectionId">` for smooth scroll (browser default or `scroll-behavior: smooth` in CSS).

---

## Build & Deployment

```bash
npm run build
```

Output is in `dist/`. Serve `dist` with any static host (e.g. Vercel, Netlify, GitHub Pages). The live demo is at [https://portfolio-ui-4.vercel.app/](https://portfolio-ui-4.vercel.app/).

- **Environment variables:** Configure `VITE_APP_EMAILJS_*` in your host’s environment so the production build gets the correct keys.
- **Chunking:** `vite.config.js` uses `manualChunks` to split three, gsap, and react-vendor for better caching.

---

## Keywords

Portfolio, React, Vite, Tailwind CSS, GSAP, Three.js, React Three Fiber, EmailJS, single-page application, frontend, developer portfolio, 3D web, scroll animations, contact form, responsive design, open source.

---

## Conclusion

This project is a full-featured portfolio template with 3D sections, scroll animations, and a working contact form. You can run it locally with `npm install` and `npm run dev`, configure EmailJS via `.env`, and reuse individual components or sections in other React apps by copying the component and its dependencies. The structure (constants, sections, shared components) is intended for both learning and extension.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊

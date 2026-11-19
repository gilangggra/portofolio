# Design Direction: Developer Portfolio

## 1. Design Read
> Reading this as: Personal Developer Portfolio for technical recruiters, engineering leaders, and peers, in an editorial dark minimalist style inspired by Behance reference ([referensi/Screenshot_19-11-2026_231243_www.behance.net.jpeg](file:///d:/Projects/Portofolio/referensi/Screenshot_19-11-2026_231243_www.behance.net.jpeg)), dial **ENERGY 2 / RHYTHM 2 / MOTION 1**.

---

## 2. Dials
- **ENERGY: 2 (Balanced)**: Clean, high-contrast, structured like an engineering dossier rather than a chaotic agency site.
- **RHYTHM: 2 (Structured with variation)**: Distinct sections (Hero, Featured Work, Technical Stack, Experience/Timeline, Articles, Contact) with asymmetric modular cards.
- **MOTION: 1 (Subtle & Intentional)**: Fast micro-transitions on hover/focus, no dizzying parallax or infinite looping distracting animations. Obeys `prefers-reduced-motion`.

---

## 3. Visual Identity & Palette
- **Theme**: Monochromatic Deep Dark with High-Contrast Typography.
- **Base Background**: `#0b0c10` (deep obsidian) and `#14161d` (elevated card surface).
- **Border / Divider**: `#222634` (subtle structural lines, WCAG compliant boundary).
- **Text & Foreground**:
  - Primary text: `#f8fafc` (high contrast ~17:1 against base).
  - Secondary text / metadata: `#94a3b8` (meets WCAG AA 4.5:1 ratio).
- **Deliberate Accent**: `#38bdf8` (sky/electric cyan) or crisp `#ffffff` badges for key interactive states only (R-29: 2-3 core + 1 accent).

---

## 4. Typography
- **Headings & Badges**: Monospace display font (`Fira Code` / `JetBrains Mono` / fallback `ui-monospace`) for technical personality and developer craftsmanship.
- **Body & Prose**: Modern clean sans-serif (`Inter` / `Plus Jakarta Sans` / system sans-serif) for effortless readability.

---

## 5. Layout & Functional Architecture
1. **Header / Navbar**: Brand mark, anchor links to real sections (`#work`, `#stack`, `#experience`, `#contact`), and active CTA button.
2. **Hero Section**: Strong title ("Full-stack Developer"), concise bio, availability badge, and primary CTAs (`#work` and `mailto:`).
3. **Featured Work**: Project cards with real context, tech badges, live demo and source code links.
4. **Skills & Tech Stack**: Categorized tools (Frontend, Backend, DevOps, Tools) without fake percentage bars or generic skill meters.
5. **Experience / Journey**: Timeline with concrete responsibilities and outcomes.
6. **Contact & Footer**: Direct email link, GitHub, LinkedIn, and clean copyright.

# Design System & Direction: Gilang Ramadan Portfolio (Inspired by styfensagala.vercel.app)

## 1. Identity & Mood
- **Archetype:** Neo-Grotesque & Monospaced Editorial Developer Showcase.
- **Rhythm:** Alternating high-contrast sections (White/Black -> Black/White -> White/Black -> Black/White).
- **Tone:** Authoritative, high-precision engineering, brutalist-refined borders (2px borders, 2rem rounded cards).
- **Target Audience:** Engineering managers, technical recruiters, clients, and software developers.

## 2. Antislop Dials
- **ENERGY:** 3 (Bold - giant typography background `14vw`, high-contrast section rhythm, holographic 3D tilt card)
- **RHYTHM:** 3 (Dynamic alternating section themes, bento grids, 12-column project split rows, center track timeline)
- **MOTION:** 2 (Smooth 60fps spring card tilt, micro-interactions, responsive theme transition, zero layout shift)

## 3. Color & Contrast System (WCAG AA Tested)
- **Light Surface:** `#ffffff` (White) / `#f5f5f5` (Neutral-100)
- **Dark Surface:** `#000000` (Black) / `#171717` (Neutral-900)
- **Borders:** `#000000` in light mode, `#262626` / `#404040` (Neutral-800 / Neutral-700) in dark mode
- **Text:** `#000000` on `#ffffff` (Contrast 21:1), `#ffffff` on `#000000` (Contrast 21:1)
- **Status Indicator:** `#10b981` (Emerald-500) with pulsating ping effect.

## 4. Typography
- **Monospace Stack:** `ui-monospace, "SF Mono", "Fira Code", monospace`
- **Grotesque Stack:** `-apple-system, BlinkMacSystemFont, "Space Grotesk", "Inter", sans-serif`

## 5. Architectural Principles (R-31 Decision Log)
- **Why giant 14vw name in Hero?** Creates immediate typographic impact while serving as an environmental backdrop for the floating 3D profile card.
- **Why 3D Profile Card with Lanyard artwork?** Establishes a memorable personal identity with tactile mouse-tracking depth.
- **Why alternating inverted section themes?** Guides eye flow naturally between macro-narratives (About -> Selected Works -> Journey -> Contact).
- **Why no em dashes?** Strict adherence to antislop copywriting standard R-02 across all English and Indonesian copy.

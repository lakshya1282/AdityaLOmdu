# Mint & Marble — Website Design Map

> **Brand Identity**: `Mint & Marble | Creative Agency` — *"For brands that refuse to play nice."*  
> **Color Palette**: `#0047AB` (Accent Blue / Cobalt), `#ffffff` (White), `#000000` (Black)  
> **Fonts**: `Bebas Neue` (display), `Playfair Display` (italic accents), `Inter` (body/UI)

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          ← Root layout (fonts, smooth scroll wrapper)
│   ├── page.tsx            ← Main page — assembles all sections
│   └── globals.css         ← CSS variables & global reset
│
└── components/
    ├── layout/
    │   ├── Navbar.tsx              ← Fixed top navigation bar
    │   ├── Navbar.module.css
    │   ├── GridBackground.tsx      ← Full-page vertical grid lines (SVG)
    │   ├── GridBackground.module.css
    │   └── SmoothScroll.tsx        ← Lenis smooth scroll wrapper
    │
    ├── sections/
    │   ├── HeroContent.tsx         ← Section 1: Hero text + CTA
    │   ├── HeroContent.module.css
    │   ├── HeroImages.tsx          ← Section 1: Four hero image panels
    │   ├── HeroImages.module.css
    │   ├── AboutSection.tsx        ← Section 2: About the agency
    │   ├── AboutSection.module.css
    │   ├── RebelsSection.tsx       ← Section 3: Project showcase list
    │   ├── RebelsSection.module.css
    │   ├── TrophiesSection.tsx     ← Section 4: Awards/accolades
    │   ├── TrophiesSection.module.css
    │   ├── ServicesSection.tsx     ← Section 5: Services + project carousel
    │   └── ServicesSection.module.css
    │
    ├── ui/
    │   └── WavyMesh.tsx            ← Three.js animated wireframe mesh
    │
    └── effects/                    ← (empty, reserved for future effects)

public/
├── hero/
│   ├── hand-final.png              ← 3D wireframe hand (center hero)
│   ├── insung-yoon-*.jpg           ← Top-left hero panel image
│   ├── nachelle-nocom-*.jpg        ← Bottom-left hero panel image
│   ├── mei-ling-mirow-*.jpg        ← Top-right hero panel image
│   └── tiachen-aier-*.jpg          ← Bottom-right hero panel image
│
├── about/
│   ├── portrait.png                ← Team portrait (center of About section)
│   └── ladki.png                   ← Floating decorative figure (bottom-left)
│
└── projects/
    ├── visionary.png               ← Project image used in Rebels & Services
    └── trailblazer.png             ← Project image used in Rebels & Services
```

---

## 📐 Global Layout Foundation

### Root Layout (`layout.tsx`)
- Wraps everything in `<SmoothScroll>` (Lenis, 1.2s duration, exponential ease)
- Injects three Google Fonts as CSS variables:
  - `--font-inter` → Inter
  - `--font-playfair` → Playfair Display
  - `--font-bebas` → Bebas Neue
- Page title: `"Mint & Marble | Creative Agency"`
- Meta description: `"For brands that refuse to play nice."`

### Grid System (`GridBackground.tsx`)
- **Position**: `absolute`, sits behind all content, spans the full viewport
- **What it is**: An SVG with **8 vertical lines** defining a 7-column editorial grid
- **Column weights**: `11% | 13% | 13% | 26% | 13% | 13% | 11%` (center column is widest)
- Two center lines (positions 3 & 4) are offset by ±70px to create a central "channel"
- Lines animate in with `pathLength` from 0→1, staggered by 0.1s each
- Line color: `var(--grid-line)` = `#0047AB`
- **z-index**: behind hero content; always present across the full page height

### Smooth Scroll (`SmoothScroll.tsx`)
- **Library**: Lenis
- Vertical orientation, `smoothWheel: true`
- `wheelMultiplier: 1`, `touchMultiplier: 2`
- All sections scroll through this wrapper

---

## 🖥️ Page Sections (top → bottom order)

---

### 1. 🔝 Navbar
**File**: `components/layout/Navbar.tsx`  
**Position**: `absolute`, `top: 0`, `z-index: 50`, full width, 40px padding top

| Element | Position | Details |
|---|---|---|
| **Logo** (`Mint&Marble`) | Left — `left: 11%` | Inter, 1.5rem, font-weight 600, `#0047AB` |
| **Nav Links** | Center — `left: 50%` centered | Stacked vertically, 5 links: `CASES`, `SERVICES`, `ABOUT`, `CONTACT`, `BLOG` |
| **Burger Menu** | Right — `padding-right: 30px` | Two 24px horizontal lines, `#0047AB`, no background |

**Animation**: All three elements fade in with a `delay: 2.0–2.5s` after page load (Framer Motion).  
Nav links stagger at `0.1s` intervals per link.

---

### 2. 🦸 Hero Section
**Files**: `HeroContent.tsx` + `HeroImages.tsx`  
**Background**: `#000` (set on root `<main>`)  
**Height**: `100vh`

#### 2a. HeroContent
**Position**: `z-index: 20`, centered in viewport, `padding-top: 25vh`

| Element | Placement | Details |
|---|---|---|
| **3D Wireframe Hand** | Center-top | `400×400px` image (`/hero/hand-final.png`), `opacity: 0.8`, overlaps title with `margin-bottom: -60px` |
| **Title** (`MINT & MARBLE`) | Center | Bebas Neue, `7.9rem`, `#0047AB`. `&` is Playfair Display italic |
| **Tagline** | Below title | Bebas Neue, `2.7rem`, `#0047AB` — *"FOR BRANDS THAT REFUSE TO PLAY NICE"* |
| **CTA Button** (`READY TO RULE? ↗`) | Bottom-center | Inter, `0.8rem`, bordered outline button. Hover: fills with `#0047AB`, text turns white |

**Animation sequence** (all Framer Motion, ease `[0.19, 1, 0.22, 1]`):
1. Hand: scale + fade in, delay `0.2s`
2. Header group: slide up + fade, delay `0.5s`
3. Title: clip-path reveal (bottom→top), delay `0.8s`
4. Tagline: clip-path reveal, delay `1.2s`
5. CTA: clip-path reveal, delay `1.8s`

#### 2b. HeroImages
**Position**: Arranged in 4 fixed panels at corners/sides of the viewport

| Panel | Image | Position |
|---|---|---|
| **Top Left** | `insung-yoon-*.jpg` | Top-left corner |
| **Bottom Left** | `nachelle-nocom-*.jpg` | Bottom-left corner |
| **Top Right** | `mei-ling-mirow-*.jpg` | Top-right corner |
| **Bottom Right** | `tiachen-aier-*.jpg` | Bottom-right corner |

Each panel animates in with `clipPath: inset(0 0 100% 0)` → `inset(0% 0 0% 0)` (wipes up from bottom), staggered delays `0.1–0.5s`, duration `3.0s`.

---

### 3. 🌐 About Section
**File**: `components/sections/AboutSection.tsx`  
**Background**: `#ffffff` (white)  
**Grid**: Same 7-column system (`11% 13% 13% 26% 13% 13% 11%`)

**Layout (3 rows):**

#### Row 1 — Mirrored Text Header (center column, col 4)
Two identical text blocks side-by-side, mirrored:
> *"WE ARE / MINT & / MARBLE, / AND WE'RE HERE TO / STEAL THE SPOTLIGHT."*

Left block: right-aligned. Right block: left-aligned. Tiny Inter font, `0.72rem`.

#### Row 2 — The Big Statement (all columns, same row)
| Element | Columns | Details |
|---|---|---|
| **"WE"** (giant text) | Cols 1–2, right-aligned | Bebas Neue, `15.5rem`, `#0047AB` |
| **Portrait Image** | Col 4 (center) | `/about/portrait.png`, `4:3` ratio, grayscale filter. Hover: full color + scale 1.05 |
| **"ARE"** (giant text) | Cols 6–7, left-aligned | Bebas Neue, `15.5rem`, `#0047AB` |

#### Row 3 — Narrative Copy (center column, col 4)
| Element | Details |
|---|---|
| Sub-header | Bebas Neue, `1.8rem` — *"MINT & MARBLE IS"* |
| Main Statement | Bebas Neue, `3.5rem` — *"WHERE CHAOS MEETS CLARITY—..."* |
| Body copy | Inter, `0.8rem`, uppercase — agency manifesto paragraph |

#### Decorative Elements
- **Label Left** (`(01) no limits, just impact.`): `left: 24%`, `top: 18vh`, `opacity: 0.5`
- **Label Right** (`(02) bold ideas. killer execution.`): `right: 24%`, `top: 18vh`, `opacity: 0.5`
- **Floating Figure** (`/about/ladki.png`): `400×500px`, `bottom: 0`, `left: 2%`, parallax scroll motion (Y: `100px → -100px`, X: `-50px → 50px`)

---

### 4. 🔥 Rebels Section — Projects List
**File**: `components/sections/RebelsSection.tsx`  
**Background**: `#ffffff`  
**Padding**: `15vh 0`  
**Grid**: 7-column system

| Element | Columns | Details |
|---|---|---|
| **Section Label** (`[rebels at work]`) | Col 1 | Inter, `0.7rem`, lowercase, `opacity: 0.8` |
| **Project List** | Cols 2–6 | 4 project titles stacked vertically, centered |

**4 Projects:**
1. `VISIONARY LEAP` — `// BRANDED CONTENT`
2. `TRAILBLAZER EFFECT` — `// EXPERIENTIAL`
3. `ECHOES IN MOTION` — `// MOTION DESIGN`
4. `RISING STAR` — `// TALENT DEV`

**Interaction per project row:**
- **Title**: Bebas Neue, `clamp(3rem, 10vw, 8rem)`, blue. Reveals via mask animation on scroll (slides up from `120%`).
- **On hover**: 
  - Non-hovered titles dim to `opacity: 0.2`
  - A project image (`450×600px`) appears centered, rotated `2°`, with a `rotate(-4°)` entrance
  - Metadata row fades in below title: subtitle on left (`// TYPE`), `PROJECT DETAILS` link underlined on right

---

### 5. 🏆 Trophies Section
**File**: `components/sections/TrophiesSection.tsx`  
**Background**: `#ffffff`  
**Padding**: `120px 0`  
**Min-height**: `100vh`

#### Header (centered)
| Element | Details |
|---|---|
| **Section label** | `[trophies & triumphs]`, Inter, `14px`, `opacity: 0.6`, absolutely positioned `left: 60px` |
| **Main title** | *"TROPHIES FOLLOW US."* — Bebas Neue, `clamp(3rem, 8vw, 6rem)`, `#0033FF` |
| **Subtitle** | *"IT'S A THING."* — Inter, `clamp(1rem, 2vw, 1.5rem)`, `font-weight: 300` |

All three animate in via mask (slide up from `120%`) when in view.

#### Trophy Ovals (8 total, horizontally overlapping)
Awards displayed as **oval capsules** laid out horizontally with `-50px` left margin overlap.

| Default state | Hovered state |
|---|---|
| Tall oval (`140×400px`), white fill, blue `1.5px` border | Expands to `380px` wide, fills solid `#0033FF`, text turns white |
| Award name written **vertically** (writing-mode) | Shows: category (small caps), `//AWARD NAME` (Bebas, 42px), year dots |

**8 Awards:**
1. European Design Awards — Communication Design — 2023, 2024, 2025
2. Creativepool Awards — Creative Excellence — 2022, 2024
3. Awwwards — SOTD // Honorable Mention — 2023, 2025
4. CSS Design Awards — UI/UX Design — 2024
5. Webby Awards — Interactive Design — 2023, 2024
6. D&AD — Wood Pencil — 2022
7. Red Dot Design Award — Communication Design — 2023, 2024, 2025
8. Clio Awards — Branded Content — 2024

---

### 6. ⚙️ Services Section
**File**: `components/sections/ServicesSection.tsx`  
**Background**: `#ffffff`  
**Padding**: `120px 0`  
**Min-height**: `100vh`

#### Main Content Row (3-column grid: `24% | 1fr | 24%`)
| Element | Column | Details |
|---|---|---|
| **"WE"** (giant) | Left (col 1), right-aligned | Bebas Neue, `clamp(8rem, 15vw, 15rem)`, `#0047AB` |
| **Service Stack** | Center (col 2), centered | 5 service names stacked vertically |
| **"DO"** (giant) | Right (col 3), left-aligned | Same style as "WE" |

**5 Services (center stack):**
1. `BRANDED CONTENT`
2. `CONSULTING`
3. `STRATEGY`
4. `EVENTS`
5. `DESIGN`

Each service item: Inter, `14px`, uppercase, `letter-spacing: 0.1em`.  
**On hover**: A dashed `1px` border (`border: 1px dashed #0047AB`) animates in around the row (scales from 0.8→1).

#### Project Carousel (on service hover)
Appears at the **bottom of the section** (`position: absolute, bottom: 15%`) when any service is hovered:
- Horizontally scrollable (scrollbar hidden)
- Shows 3–4 project cards per service, each `280px` wide
- Card layout:
  - `16:9` image box (hover scales image to 1.05)
  - 2×2 metadata grid: `//CREATOR`, `//PROJECT`, `//TYPE`, `//YEAR`
  - `PROJECT DETAILS` underlined link
- Animates in with `y: 30→0, opacity: 0→1`, and out with reverse

**Project data per service:**
| Service | Project count | Sample titles |
|---|---|---|
| Branded Content | 4 | Visionary Leap, Minimal Soul, Urban Rhythm, Neon Dreams |
| Consulting | 3 | Strategic Flow, Growth Mindset, Market Edge |
| Strategy | 3 | Blueprint 2024, Market Disrupt, Systemic Core |
| Events | 2 | Night of Impact, Solstice 2024 |
| Design | 3 | Pure Texture, Bauhaus Revival, Silent Impact |

#### 3D Wavy Mesh Background (`WavyMesh.tsx`)
**Position**: `absolute`, `bottom: calc(10% + 20px)`, `left: 0`  
**Size**: `100% width × 70% height`  
**z-index**: `1` (behind carousel and service text)  
**Technology**: Three.js (WebGL)

- A `40×40` plane geometry with `35×35` segments, rotated `−60°` on X axis
- Wireframe line segments + point cloud, `opacity: 0.2`
- Color: `#003399` (deep blue)
- Wave animation: sinusoidal displacement on Y axis — `sin(x * 0.4 + t) * 0.4 + cos(z * 0.4 + t * 1.2) * 0.4`
- Two moving point lights track `sin/cos` paths around the mesh
- Fixed camera orbit: `radius: 45`, `phi: π/3`, `theta: π/2`
- Fully transparent canvas background (blends with white section)

---

## 🎨 Design Tokens (globals.css)

| Variable | Value | Usage |
|---|---|---|
| `--background` | `#ffffff` | Page background |
| `--foreground` | `#0a0a0a` | Default text |
| `--accent-blue` | `#0047AB` | All branded elements (text, borders, lines) |
| `--grid-line` | `#0047AB` | Grid SVG lines |
| `--selection-bg` | `rgba(0, 71, 171, 0.1)` | Text selection highlight |

---

## 🎞️ Animation System

All animations use **Framer Motion** with a shared easing curve: `[0.19, 1, 0.22, 1]` (Expo Out).

| Pattern | Used in |
|---|---|
| `clipPath: inset(0 0 100% 0)` → `inset(0 0 0% 0)` | Hero title, tagline, CTA, About text |
| `y: "120%" → "0%"` inside overflow-hidden mask | Rebels titles, Trophies header |
| `opacity: 0 → 1` with y offset | Navbar, About labels, Services items |
| `scale + rotate` on AnimatePresence | Rebels hover image reveal |
| Framer `layout` prop with `LayoutAnimation` | Trophies oval expansion |
| Three.js `requestAnimationFrame` loop | WavyMesh in Services |
| Lenis `raf` loop | Global smooth scroll |
| Scroll-driven parallax (`useScroll` + `useTransform`) | About floating ladki figure |

---

## 📱 Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| `≤ 1400px` | About: `bigText` shrinks to `12rem`, `ladki` shrinks to `300×400px` |
| `≤ 1200px` | Trophies: oval wrapper shrinks to `120px` wide |
| `≤ 1024px` | About: collapses to single column. Rebels: full-width grid. Trophies: smaller ovals. Services: `sideText` → `8rem` |
| `≤ 768px` | Services: collapses to 1 column, "WE"/"DO" center-aligned. Trophies: ovals wrap to flex-wrap. Hero: title → `6rem` |

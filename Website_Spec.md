# Website Specification — Abhidnya Agro Industries

> **Document Version:** 1.0  
> **Last Updated:** June 23, 2026  
> **Prepared for:** Abhidnya Agro Industries Pvt. Ltd.

---

## Table of Contents

1. [Company Overview](#1-company-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Design System](#4-design-system)
5. [Website Sections & Features](#5-website-sections--features)
6. [Product Catalogue](#6-product-catalogue)
7. [Key Technical Features](#7-key-technical-features)
8. [How to Access the Website](#8-how-to-access-the-website)
9. [Build & Deployment](#9-build--deployment)
10. [File Reference Guide](#10-file-reference-guide)

---

## 1. Company Overview

| Field | Details |
|---|---|
| **Company Name** | Abhidnya Agro Industries Pvt. Ltd. |
| **Founded** | 2001 |
| **Headquarters** | Plot 14, MIDC Industrial Area, Pune, Maharashtra 411019 |
| **Processing Unit** | Survey No. 245, Uruli Devachi, Pune–Solapur Highway, Pune 412308 |
| **Email** | info@abhidnyaagro.com / exports@abhidnyaagro.com |
| **Phone** | +91 20 1234 5678 |
| **Industry** | Agro Processing — Pulses, Grains, Spices, Oilseeds |

### Business Highlights
- **50,000+ Tons** of produce processed annually
- **20+ Countries** served for export
- **2,000+ Farmer Partners** directly sourced from Maharashtra, MP & Rajasthan
- **23 Years** of industry legacy
- Certifications: **FSSAI**, **ISO 22000**, **HACCP**, **AGMARK**, **Organic India**

---

## 2. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.9 |
| Language | TypeScript | ^5 |
| UI Library | React | 19.2.4 |
| Styling | Tailwind CSS | ^4 |
| Animations | Framer Motion | ^12.40.0 |
| Icons | Lucide React | ^1.18.0 |
| Fonts | Inter + Plus Jakarta Sans (Google Fonts via next/font) | — |
| Linter | ESLint + eslint-config-next | 16.2.9 |
| Package Manager | npm | — |
| Image CDN | Unsplash (remote images via next/image) | — |

---

## 3. Project Structure

```
abhidnya-agro/
│
├── app/                          # Next.js App Router
│   ├── globals.css               # Tailwind v4 CSS-first config + design tokens
│   ├── layout.tsx                # Root HTML layout (fonts, metadata, Navbar, Footer)
│   ├── page.tsx                  # Homepage — assembles all 7 sections
│   └── favicon.ico               # Browser tab icon
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky navigation bar with scroll-aware styling
│   │   └── Footer.tsx            # 4-column footer with newsletter + certifications
│   │
│   └── sections/
│       ├── Hero.tsx              # Full-screen hero with Framer Motion animations
│       ├── ValueProps.tsx        # 6-card "Why Choose Us" value proposition grid
│       ├── ProductShowcase.tsx   # Filterable product grid (Pulses / Grains / Specialty)
│       ├── About.tsx             # Company heritage, split layout, timeline
│       ├── Stats.tsx             # Animated metrics counter section
│       ├── Testimonials.tsx      # Client testimonial cards
│       └── Contact.tsx           # B2B bulk inquiry form (glassmorphism style)
│
├── public/
│   ├── logo.png                  # Extracted company logo (AJ — leaves + bowl)
│   └── logo-extract/             # Raw PDF render and crop intermediates
│
├── next.config.ts                # Next.js config (Unsplash image domain allowlist)
├── postcss.config.mjs            # PostCSS config for Tailwind v4
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and npm scripts
├── eslint.config.mjs             # ESLint rules
├── README.md                     # Default Next.js readme
└── Website_Spec.md               # ← This document
```

---

## 4. Design System

### Color Palette

| Name | Hex | Usage |
|---|---|---|
| **Primary (Deep Forest Green)** | `#1b4332` | Buttons, headings, borders, accents |
| **Forest Dark** | `#0d2818` | Dark section backgrounds, overlays |
| **Forest Mid** | `#2d6a4f` | Hover states, gradients |
| **Accent (Harvest Amber)** | `#d97706` | CTAs, badges, highlights |
| **Accent Dark** | `#b45309` | Hover on amber elements |
| **Cream (Background)** | `#f8f4ef` | Page background, card backgrounds |
| **Cream Dark** | `#f0ebe3` | Section dividers |

### Typography

| Role | Font | Weight |
|---|---|---|
| **Display / Headings** | Plus Jakarta Sans | 600, 700, 800 |
| **Body / UI** | Inter | 400, 500, 600 |

### Spacing & Shadows

| Token | Value |
|---|---|
| `shadow-card` | `0 4px 24px rgba(27,67,50,0.10)` |
| `shadow-card-hover` | `0 12px 40px rgba(27,67,50,0.18)` |
| `shadow-glow-green` | `0 0 40px rgba(27,67,50,0.25)` |
| `shadow-glow-amber` | `0 0 30px rgba(217,119,6,0.30)` |
| Section padding | `5rem` vertical (desktop: `7rem`) |
| Max content width | `80rem` (1280px) |

---

## 5. Website Sections & Features

### Section 1 — Hero
- **File:** `components/sections/Hero.tsx`
- Full-screen background image (golden agricultural fields from Unsplash)
- Dark gradient overlay for text contrast
- Framer Motion staggered entry animations (badge → headline → subtext → CTAs → stats)
- Headline: *"Sustaining Generations with Premium Agricultural Yields"*
- Dual CTAs: **Explore Our Range** (amber) + **Get a Quote** (outline)
- Floating trust badges (ISO 22000, 20+ Countries, Organic Certified)
- Animated scroll indicator (bouncing chevron)
- Hero stats: 50K+ Tons · 20+ Countries · 23 Yrs Legacy

### Section 2 — Value Propositions
- **File:** `components/sections/ValueProps.tsx`
- 6 cards in a 3-column responsive grid
- Each card has a unique colour accent and icon:
  1. Farm to Fork Traceability
  2. State-of-the-Art Processing
  3. Rigorous Quality Testing
  4. Global Quality Standards
  5. Reliable B2B Logistics
  6. Farmer Partnership Program
- Scroll-triggered `whileInView` stagger animations

### Section 3 — Product Showcase
- **File:** `components/sections/ProductShowcase.tsx`
- **9 products** across 3 filterable categories
- Filter tabs: **All** | **Pulses** | **Grains** | **Specialty**
- Each card features:
  - Verified Unsplash product photography
  - Hover zoom-in image effect
  - Badge (Best Seller / Export Grade / Organic / GI Tagged etc.)
  - Star rating
  - 2 key specification bullet points
  - "View Specifications" CTA on hover
- Animated filter transitions via Framer Motion `AnimatePresence`

### Section 4 — About / Heritage
- **File:** `components/sections/About.tsx`
- Split layout: factory imagery (left) + company story copy (right)
- Floating info cards (50K+ tons processed, ISO 22000 badge)
- 4 sustainability commitments with checkmark list
- Interactive milestone timeline (2001 → 2023)
- 3-image panoramic banner strip (farming landscapes)

### Section 5 — Stats Counter
- **File:** `components/sections/Stats.tsx`
- Background: wheat field image with deep green overlay
- 6 animated metric cards with `requestAnimationFrame` count-up:
  - 50,000+ Tons Processed
  - 20+ Export Countries
  - 2,000+ Farmer Partners
  - 100% Quality Certified
  - 23 Years Legacy
  - 12+ Product Variants
- Counters trigger once on scroll into view
- Client trust strip: Metro Cash & Carry, BigBasket B2B, Reliance Fresh, D-Mart

### Section 6 — Testimonials
- **File:** `components/sections/Testimonials.tsx`
- 4 client testimonial cards in a 2-column grid
- Clients: Metro Cash & Carry, FreshToHome B2B, Al Ain Agri (UAE), Organic India
- Quote icon, star rating, avatar initials with colour coding

### Section 7 — Contact / B2B Inquiry Form
- **File:** `components/sections/Contact.tsx`
- Glassmorphism form card
- Fields: Full Name, Company, Email, Phone, Product Interest (dropdown of all 9 products), Quantity (MT), Message
- Loading state simulation (1.4s) with spinner
- Success state with confirmation message
- Contact details panel: address, phone, email, processing unit location
- "Responds within 4 business hours" trust indicator

### Navigation — Navbar
- **File:** `components/layout/Navbar.tsx`
- Transparent on hero → frosted white glass on scroll
- Company logo (`/public/logo.png`) — AJ leaves + bowl monogram
- Smooth anchor-based navigation for all sections
- "Get a Quote" CTA button
- Fully responsive with animated mobile drawer menu

### Footer
- **File:** `components/layout/Footer.tsx`
- Newsletter subscription bar (with success state)
- 4-column layout: Brand info | Company links | Product links | Support links
- Contact details (address, phone, email)
- Social media links (Facebook, X/Twitter, LinkedIn, Instagram)
- Certification badges: FSSAI · ISO 22000 · Organic India · AGMARK
- Copyright + Privacy Policy / Terms / Cookie Policy links

---

## 6. Product Catalogue

| # | Product | Category | Badge | Key Spec |
|---|---|---|---|---|
| 1 | Red Split Lentils (Masoor Dal) | Pulses | Best Seller | Protein: 24g/100g |
| 2 | Kabuli Chickpeas (Chole) | Pulses | Export Grade | Count: 42/44 per oz |
| 3 | Toor Dal (Yellow Pigeon Peas) | Pulses | Organic | Protein: 22g/100g |
| 4 | Green Moong Whole & Split | Pulses | Organic | Protein: 24g/100g |
| 5 | Extra Long Grain Basmati | Grains | GI Tagged | Grain Length: 8.5mm+ |
| 6 | Sharbati Wheat (MP Premium) | Grains | Export Grade | Protein: 12%+ |
| 7 | Erode Turmeric Fingers & Powder | Specialty | High Curcumin | Curcumin: 4%+ |
| 8 | Rajasthan Cumin Seeds (Jeera) | Specialty | Origin Certified | Oil Content: 3%+ |
| 9 | Sunflower Seeds (Oilseed Grade) | Specialty | Cold Press Ready | Oil Content: 48%+ |

---

## 7. Key Technical Features

### Performance
- `next/image` with lazy loading, priority flag on hero, and proper `sizes` attributes
- Static page generation (`○ Static`) — pre-rendered at build time
- Tailwind CSS v4 with CSS-first `@theme` configuration (no runtime overhead)
- Google Fonts loaded via `next/font` (no layout shift, self-hosted)

### SEO
- Semantic HTML throughout (`<section>`, `<article>`, `<nav>`, `<footer>`, `<address>`, `<blockquote>`)
- `aria-label`, `aria-labelledby`, `aria-expanded` attributes
- Complete Open Graph metadata in `app/layout.tsx`
- Descriptive `alt` text on all images
- `scroll-padding-top: 80px` for anchor navigation

### Animations (Framer Motion v12)
- `whileInView` scroll-triggered reveals with `once: true`
- Staggered card entrance with `delay` offsets
- `AnimatePresence` for product filter tab transitions
- Bouncing scroll indicator loop
- `requestAnimationFrame` stat counters (ease-out cubic)

### Responsiveness
- Mobile-first with `sm:`, `md:`, `lg:` Tailwind breakpoints
- Navbar collapses to mobile drawer below `md` (768px)
- All grids: 1-col → 2-col → 3-col across breakpoints
- Hero stats wrap gracefully on small screens

### Forms
- Controlled React form state
- HTML5 `required` validation
- Simulated async submit with loading/success states
- No external form library dependency

---

## 8. How to Access the Website

### Prerequisites
- **Node.js** v18 or higher
- **npm** v9 or higher

Verify your versions:
```bash
node -v
npm -v
```

---

### Step 1 — Navigate to the Project

```bash
cd /Users/swapnilahirrao/Documents/Website/abhidnya-agro
```

---

### Step 2 — Install Dependencies (first time only)

```bash
npm install
```

---

### Step 3 — Start the Development Server

```bash
npm run dev
```

The terminal will show:
```
▲ Next.js 16.x (Turbopack)
- Local:    http://localhost:3000
✓ Ready in ~160ms
```

---

### Step 4 — Open in Browser

Open any browser and go to:

```
http://localhost:3000
```

> **Tip:** Keep the terminal running while using the site. If you close it, the site goes offline.

---

### Stopping the Server

Press `Ctrl + C` in the terminal.

---

### Accessing from Another Device on the Same Wi-Fi

When the dev server starts, it also shows a **Network URL**:
```
- Network: http://192.168.x.x:3000
```
Open that URL on your phone or tablet (connected to the same Wi-Fi) to preview on mobile.

---

## 9. Build & Deployment

### Production Build (optimized, static output)

```bash
npm run build
```

This generates an optimized build in the `.next/` folder.

### Run Production Build Locally

```bash
npm run start
```

Then open `http://localhost:3000`.

### Export as Static HTML (for plain web hosting)

Add `output: "export"` to `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // ... rest of config
};
```

Then run:
```bash
npm run build
```

The full static site (with `index.html`) will be in the **`out/`** folder — ready to upload to any web host (cPanel, Hostinger, Netlify, Vercel, GitHub Pages, etc.).

### Deploy to Vercel (Recommended — Free)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js and deploys with a public URL.

---

## 10. File Reference Guide

| File | Purpose | Edit When |
|---|---|---|
| `app/page.tsx` | Homepage layout — imports all sections | Adding/removing sections |
| `app/layout.tsx` | Root HTML shell, fonts, metadata | Changing page title, SEO tags |
| `app/globals.css` | All design tokens (colors, fonts, shadows, custom classes) | Changing brand colors or global styles |
| `components/layout/Navbar.tsx` | Top navigation bar | Updating nav links, logo, CTA |
| `components/layout/Footer.tsx` | Site footer | Adding links, updating contact info |
| `components/sections/Hero.tsx` | Hero headline, CTA, background image | Changing main message or hero photo |
| `components/sections/ProductShowcase.tsx` | Product grid & filter tabs | Adding/editing products, images |
| `components/sections/About.tsx` | Company story, timeline, images | Updating company history |
| `components/sections/Stats.tsx` | Animated metric counters | Updating company statistics |
| `components/sections/ValueProps.tsx` | Why-choose-us cards | Editing company value propositions |
| `components/sections/Testimonials.tsx` | Client quotes | Adding/updating client testimonials |
| `components/sections/Contact.tsx` | B2B inquiry form | Adding form fields, changing products list |
| `public/logo.png` | Company logo (AJ monogram) | Replacing with updated logo file |
| `next.config.ts` | Next.js configuration | Adding new image domains |

---

*This specification document covers the complete Abhidnya Agro Industries website as built in June 2026. For any updates or new feature additions, refer to the relevant component file listed in Section 10.*

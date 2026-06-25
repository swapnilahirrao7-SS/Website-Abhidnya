# Abhidnya Agro Industries — Website

Modern, high-conversion marketing website for **Abhidnya Agro Industries**, a premium agro processing company based in Nashik, Maharashtra. Built with Next.js 16, Tailwind CSS v4, and Framer Motion.

---

## Tech Stack

- **Framework**: Next.js 16.2.9 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (configured via `app/globals.css` `@theme` directive)
- **Animations**: Framer Motion v12
- **Icons**: Lucide React
- **Email**: EmailJS (`@emailjs/browser`)
- **Deployment**: Vercel

---

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file in the project root with the following keys (required for the Contact form email functionality):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_i0vnlwe
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_y7jrahw
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=isuAYzJNrAOVzn76D
```

> These variables must also be added in the **Vercel project dashboard** under:
> **Settings → Environment Variables** (or direct URL: `vercel.com/[team]/[project]/settings/environment-variables`)
> Set them for **All Environments** (Production, Preview, Development), then **Redeploy**.

### EmailJS Template Variables

The contact form sends the following variables to the EmailJS template:

| Variable | Description |
|---|---|
| `from_name` | Sender's full name |
| `company` | Company / business name |
| `reply_to` | Sender's email address |
| `phone` | Phone number |
| `product` | Product of interest |
| `quantity` | Quantity required |
| `message` | Full message / requirements |

---

## Project Structure

```
abhidnya-agro/
├── app/
│   ├── globals.css          # Tailwind v4 @theme design system
│   ├── layout.tsx           # Root layout, fonts, metadata
│   └── page.tsx             # Homepage (section composition + wave dividers)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky responsive navbar with animated underline
│   │   └── Footer.tsx       # 4-column footer with contact info
│   └── sections/
│       ├── Hero.tsx         # Hero with animated stats, badges, gradient orbs
│       ├── ValueProps.tsx   # Why Choose Us — 6 value proposition cards
│       ├── ProductShowcase.tsx  # 35-product showcase with filters
│       ├── About.tsx        # Heritage, journey timeline, founder story
│       ├── Stats.tsx        # Animated number counters — 6 key stats
│       └── Contact.tsx      # B2B inquiry form with EmailJS integration
├── public/
│   ├── logo.png             # Company logo
│   └── products/            # 35 AI-generated product images (.png)
├── scripts/
│   ├── run-tests.mjs        # Full test suite (83 tests) — run with node
│   └── test-emailjs.mjs     # EmailJS connectivity test
└── .env.local               # Local env vars (gitignored — never commit)
```

---

## Running Tests

```bash
node scripts/run-tests.mjs
```

Runs 83 automated checks covering:
- All key files present
- 35 products with unique IDs
- All 35 product images exist
- 105 spec values (no placeholders)
- EmailJS config and form validation
- Contact dropdown matches all 35 products
- Stats values match site content
- About section milestones (2022–2026)
- Hero badges and content
- Footer contact information
- Next.js image config

---

## Contact Information

**Registered Office**
Abhidnya Agro Industries
A-403, 4th Floor, Omkar Residency, Above Formula One Zone Tyre Shop,
Near Fog City Hotel, Gangapur Road, Nashik - 422013

**Processing Unit**
689/6 Dhadne - 424306, Tal-Sakri, Dist-Dhule, Maharashtra

**Email**: abhidnyaagroindustries6001@gmail.com
**Phone**: 9145226001 / 9145446001

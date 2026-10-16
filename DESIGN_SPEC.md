# IR Wing IITK — Institutional Editorial Design Specification

## Design Principles
1. **Timeless, not trendy** — looks like Oxford/MIT international pages, not a 2024 startup
2. **Editorial hierarchy** — generous whitespace, classical typography, clear information architecture
3. **Academic gravitas** — formal, authoritative, trustworthy
4. **Badge-led identity** — the circular logo drives all visual decisions

---

## Typography System

### Fonts
- **Display/Headings**: Crimson Pro (Google Fonts, serif) — 400 regular, 600 semibold
- **Body/UI**: Inter (Google Fonts, sans-serif) — 400 regular, 500 medium, 600 semibold

### Scale
- **Hero title**: 64px / 4rem, line-height 1.1, letter-spacing -0.02em
- **Page title**: 48px / 3rem, line-height 1.15
- **Section heading**: 32px / 2rem, line-height 1.25
- **Card title**: 20px / 1.25rem, line-height 1.3
- **Body**: 16px / 1rem, line-height 1.75
- **Small/Meta**: 14px / 0.875rem, line-height 1.6

---

## Color Palette

### Primary
- **Navy**: `#0a1e31` — primary background
- **Navy mid**: `#122a42`
- **Navy light**: `#1a3652`

### Accent
- **Burgundy**: `#8b1538` — CTAs, links, emphasis (IIT academic red)
- **Burgundy hover**: `#a51b42`

### Neutrals
- **Cream**: `#faf8f3` — contrast panels, alternating sections
- **Warm white**: `#ffffff`
- **Text primary**: `#e8e4dc` — body text on navy
- **Text muted**: `#a8a19

3` — secondary text

### Highlight
- **Gold**: `#b8985f` — ornamental accents, badges, subtle highlights

### Borders
- **Line**: `rgba(232, 228, 220, 0.12)` — subtle dividers on navy
- **Line cream**: `rgba(10, 30, 49, 0.08)` — dividers on cream

---

## Layout System

### Grid
- **Max-width**: 1280px (wider for editorial layouts)
- **Gutter**: 32px on desktop, 20px on mobile
- **Two-column content**: 66% content + 33% sidebar on inner pages
- **Symmetric hero**: centered, max-width 960px

### Spacing Scale
- `xs`: 8px
- `sm`: 16px
- `md`: 24px
- `lg`: 40px
- `xl`: 64px
- `2xl`: 96px

---

## Components

### Hero (homepage)
- **Layout**: Centered, symmetrical
- **Badge logo**: Large (200px+) watermark behind headline, 8% opacity
- **Headline**: Crimson Pro 64px, centered, max-width 720px
- **Subheadline**: Inter 18px, muted color, max-width 560px, centered
- **CTA**: Single primary button, burgundy, uppercase 12px tracking
- **Stats**: 3-column grid below, clean typography, no boxes

### Navigation
- **Header**: Sticky, cream background with subtle shadow
- **Logo**: Badge + "International Relations Wing / IIT Kanpur" in two lines, Inter 11px uppercase
- **Links**: Inter 14px, navy text, underline on hover (burgundy)
- **Mobile**: Hamburger menu, slide-in drawer

### Cards (programme listings)
- **Container**: Cream background, 1px navy border, 4px border-radius
- **Padding**: 32px
- **Title**: Crimson Pro 20px
- **Body**: Inter 15px, line-height 1.7
- **Meta label**: Uppercase 10px, tracking 0.1em, gold color
- **CTA**: Text link, burgundy, small arrow →

### Footer
- **Background**: Navy mid
- **Structure**: 3 columns on desktop (About / Links / Contact)
- **Typography**: Inter 14px
- **Social icons**: Simple line icons, 20px, hover burgundy
- **Copyright**: Small 12px, centered at bottom

### Ornamental Dividers
- Thin 1px horizontal line
- Centered diamond `◆` ornament in gold
- Used between major sections

### Data Tables (for programme listings)
- Cream background
- Header row: burgundy background, cream text, uppercase 11px
- Body rows: alternating white/cream stripe
- Cell padding: 16px vertical, 20px horizontal
- Inter 14px

### Timeline (roadmap page)
- Vertical connecting line (2px, gold)
- Circle markers (12px) at each step
- Step number in circle
- Title: Crimson Pro 18px
- Description: Inter 14px, muted

---

## Page Templates

### Homepage
1. Hero (centered, badge watermark, symmetric)
2. Stats stripe (3-col, minimal)
3. Three-card intro section (Find / Plan / Learn)
4. Feature section (cream background, alternating)
5. Latest stories (editorial cards)
6. Footer

### Content Pages
- Breadcrumb nav at top
- Page title: Crimson Pro 48px
- Lead paragraph: 18px, max-width 680px
- Two-column layout: content (66%) + sidebar (33%)
- Sidebar: related links, quick actions, "need help?" module

### List Pages (opportunities, sessions)
- Page title + filter/sort UI
- Card grid or data table
- Pagination if needed

---

## No Longer Used
- ❌ Neon cyan/lime
- ❌ Gradient backgrounds
- ❌ Glow effects / box-shadow bloom
- ❌ Animated SVG route lines
- ❌ Tech startup "panel" cards
- ❌ Capsule buttons
- ❌ Glassmorphism

---

## Mobile Responsive

- Hero title: 40px on mobile
- Single column layout on <900px
- Sidebar moves below content
- Stats: 1-column stack on mobile
- Touch-friendly tap targets (44px min)
- Reduced spacing scale (80% of desktop)

---

## Accessibility
- WCAG AA contrast (4.5:1 minimum)
- Focus visible: 2px burgundy outline, 2px offset
- Skip to main content link
- Proper heading hierarchy (no skipped levels)
- Alt text on all images
- ARIA labels where needed

---

This spec creates a design that looks like it belongs to a prestigious research university, not a tech product.

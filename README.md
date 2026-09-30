# BloomBridge — Surrogacy Agency (Ghana)

A single-page marketing site for **BloomBridge**, a surrogacy agency based in Kumasi, Ghana.
Every call to action — the navbar, hero, process step, FAQ panel, contact form, footer and the
floating bubble — opens **WhatsApp** with a pre-filled message.

Built with **React 19 + Vite 7 + Tailwind CSS 4**.

---

## Quick start

```bash
npm install     # already installed
npm run dev     # http://localhost:5173
npm run build   # production build into /dist
npm run lint    # ESLint (expected output: no problems)
npm run preview # preview the production build
```

> Use `npm run dev` — not the VS Code **Live Server** extension. A Vite app must be served
> by Vite so that JSX and Tailwind are compiled on the fly.

---

## ⚠️ Change the WhatsApp number first

All contact details live in **`src/config/site.js`**. Replace the placeholder Ghanaian number
with the agency's real one:

```js
export const contact = {
  // digits only: country code + number, no "+", spaces or dashes
  whatsappNumber: "233241234567",        // 👈 REPLACE THIS
  whatsappDisplay: "+233 24 123 4567",   // what visitors see on screen
  ...
};
```

- Ghana numbers start with `233` — e.g. the local number `024 123 4567` becomes `"233241234567"`.
- `whatsappDisplay`, `phoneDisplay`, `phoneHref`, `email`, `addressLines` and `hours` are also in
  that file and are used across the navbar, contact section and footer.
- The default pre-filled message is `defaultWhatsAppMessage` in the same file.
- Prefer a different text for a specific button? Every button accepts a `message` prop:

```jsx
<WhatsAppButton message="Hello BloomBridge, I'm interested in your surrogate programme." />
```

### How the links are built

`src/lib/whatsapp.js` turns a message into a `wa.me` deep link:

```
https://wa.me/233241234567?text=Hello%20Bloom%20Bridge%20%F0%9F%91%8B
```

This opens the WhatsApp app on mobile and WhatsApp Web / Desktop on a computer.
The contact form additionally uses `buildEnquiryMessage()` to compile the visitor's name,
role, email, phone and message into one tidy chat message.

---

## Project structure

```
index.html                  Fonts, meta/OG tags, favicon
public/favicon.svg          Bloom + bridge mark
src/
  App.jsx                   Page composition (sections in order) + skip link
  index.css                 Tailwind v4 import, @theme design tokens, animation utilities
  main.jsx                  React entry point
  assets/
    hero-mother-baby.jpg    Hero background photo (Pexels — replace with your own)
    about-mother-baby.jpg   About section photo
    mother-baby.jpg         Contact section background photo
  config/
    site.js                 👈 WhatsApp/contact details, navigation, form roles
    content.js              All page copy (stats, services, steps, features, FAQs, …)
  lib/
    buttonStyles.js         Shared button class helpers (keeps ui.jsx components-only)
    whatsapp.js             wa.me link builder + enquiry message builder
  components/
    ui.jsx                  Container, Section, Reveal, Pill, SectionHeading, buttons, Logo
    Icons.jsx               Dependency-free inline SVG icon set
    iconMap.js              Maps the icon names in content.js to icon components
    Navbar.jsx              Sticky nav + mobile menu + "Get in contact"
    Hero.jsx                Headline, CTAs, WhatsApp chat preview card
    TrustBar.jsx            At-a-glance stats
    About.jsx               Story, promises, founder quote
    Services.jsx            Intended parents / surrogates / donors + extras
    Process.jsx             Five-step journey + CTA
    WhyUs.jsx               Six differentiators
    Testimonials.jsx        Family stories
    Faqs.jsx                Accessible accordion (aria-expanded / aria-controls)
    Contact.jsx             WhatsApp enquiry form + contact details
    Footer.jsx              Links, contact, disclaimer
    WhatsAppFloat.jsx       Floating chat bubble with pulse ring
```

---

## Design notes

**Modern glassmorphism UI.** The page is built around frosted-glass surfaces floating over a
soft colour mesh, with a full-bleed photograph of a mother holding her baby behind the hero.

- **Glass utilities** live in `src/index.css` as Tailwind v4 `@utility` definitions, so they
  behave like normal Tailwind classes (and work with variants):
  - `glass-panel` — large, very translucent surface (hero chat card)
  - `glass-card` — the standard card surface used by services, steps, testimonials, the form
  - `glass-soft` — the lightest surface (feature tiles, closed FAQ rows)
  - `glass-dark` — dark frosted glass for text over photos (hero headline, contact details)
  - `glass-bar` / `glass-bar-dark` — the fixed navigation bar, light and over-photo variants
  - `glass-pill` — small frosted pills, chips and badges
  - `glass-input` — frosted form fields
- **Photography** (`src/assets/`): `hero-mother-baby.jpg` (hero background),
  `about-mother-baby.jpg` (About section), `mother-baby.jpg` (contact background).
  Vite hashes and optimises them at build time.
- **Depth**: the colour mesh behind everything is four fixed radial gradients on `body`, so
  every glass panel has something real to blur. The nav is `fixed` and switches from dark glass
  (over the photo) to light glass (after 90px of scroll).
- **Theme tokens** are declared in `src/index.css` under `@theme`, so `bg-bloom-500`,
  `text-bridge-700`, `bg-whatsapp`, `shadow-glass` etc. are all real Tailwind utilities.
  Change a hex value there and the whole site updates.
- **Fonts**: Fraunces (display) + Plus Jakarta Sans (body), loaded from Google Fonts in `index.html`.
- **Motion**: sections fade/lift in on scroll via the tiny `Reveal` component (IntersectionObserver).
  All animation is disabled under `prefers-reduced-motion`.
- **Accessibility**: skip link, focus-visible rings, labelled form fields, keyboard-friendly
  accordion, descriptive `alt` text on photos, dark text on the bright WhatsApp green for readable
  contrast, real `aria-label` text on icon-only buttons.

---

## Editing content

Nearly all wording is in `src/config/content.js` — stats, services, the five process steps,
differentiators, testimonials, FAQs and the legal disclaimer. No component edits are needed to
change copy.

## Please note

The company details, phone numbers, email, address, testimonials and statistics in this project are
**placeholders** written to demonstrate the layout. Replace them with BloomBridge's real
information (and confirm all copy about legality, costs and timelines with the agency's own
legal/medical advisers) before publishing.

The three photographs in `src/assets/` come from **Pexels** under the
[Pexels licence](https://www.pexels.com/license/) (free to use, no attribution required). They show
identifiable people who have **no connection to BloomBridge**, so for a going-live site you should
swap them for your own photography (or licensed imagery with model releases) — especially before
using them in ads, since the licence forbids implying endorsement by the people pictured. Simply
overwrite the three files with the same names and the layout keeps working.

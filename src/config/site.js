/**
 * Central place for everything a real business would change first:
 * the WhatsApp number, phone, email, address and navigation.
 *
 * 👉 REPLACE `whatsappNumber` with the agency's real number.
 *    Format: country code + number, digits only (no "+", spaces or dashes).
 *    Ghana numbers start with 233, e.g. 024 123 4567 -> "233241234567"
 */
export const site = {
  name: "Bloom Bridge",
  legalName: "Bloom Bridge Surrogacy Agency",
  tagline: "Compassionate surrogacy journeys, rooted in Ghana.",
  city: "Kumasi",
  country: "Ghana",
};

export const contact = {
  /** Used to build every "Get in contact" -> WhatsApp link on the site. */
  whatsappNumber: "233241234567",
  /** Shown to visitors (keep it in sync with `whatsappNumber`). */
  whatsappDisplay: "+233 24 123 4567",

  phoneDisplay: "+233 30 271 0450",
  phoneHref: "tel:+233302710450",

  email: "hello@bloombridge.com",
  emailHref: "mailto:hello@bloombridge.com",

  addressLines: ["Kumasi Metropolitan Area", "Kumasi, Ghana"],

  hours: "Monday – Saturday · 8:00am – 6:00pm GMT",

  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

/** Pre-filled message used by every static WhatsApp button. */
export const defaultWhatsAppMessage =
  "Hello Bloom Bridge 👋 I'd like to learn more about your surrogacy programme in Ghana.";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why us", href: "#why-us" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

/** Options for the role dropdown in the WhatsApp contact form. */
export const contactRoles = [
  "I'm exploring parenthood",
  "I'd like to be a surrogate mother",
  "Egg or sperm donor enquiry",
  "Clinic, legal or agency partner",
  "Something else",
];

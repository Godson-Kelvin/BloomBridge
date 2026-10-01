/**
 * Central place for everything a real business would change first:
 * the WhatsApp number, phone, email, address and navigation.
 *
 * 👉 REPLACE `whatsappNumber` with the agency's real number.
 *    Format: country code + number, digits only (no "+", spaces or dashes).
 *    Ghana numbers start with 233, e.g. 024 123 4567 -> "233241234567"
 */
export const site = {
  name: "BloomBridge",
  legalName: "BloomBridge Surrogacy Agency",
  tagline: "Compassionate surrogacy journeys, rooted in Ghana.",
  city: "Kumasi",
  country: "Ghana",
};

export const contact = {
  /** Used to build every "Get in contact" -> WhatsApp link on the site. */
  whatsappNumber: "233503238073",
  /** Shown to visitors (keep it in sync with `whatsappNumber`). */
  whatsappDisplay: "+233 50 323 8073",

  phoneDisplay: "+233 27 091 0870",
  phoneHref: "tel:+233270910870",

  email: "bloombridge@gmail.com",
  emailHref: "mailto:bloombridge@gmail.com",

  addressLines: ["IPT Asuyeboa", "Kumasi, Ghana"],

  hours: "Monday – Saturday · 8:00am – 5:00pm GMT",

  // socials: [
  //   { label: "Instagram", href: "https://instagram.com" },
  //   { label: "Facebook", href: "https://facebook.com" },
  //   { label: "LinkedIn", href: "https://linkedin.com" },
  // ],
};

/** Pre-filled message used by every static WhatsApp button. */
export const defaultWhatsAppMessage =
  "Hello BloomBridge 👋 I'd like to learn more about your surrogacy programme in Ghana.";

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

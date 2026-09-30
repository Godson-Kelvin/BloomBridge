import { contact, defaultWhatsAppMessage } from "../config/site";

/**
 * Builds a wa.me deep link that opens WhatsApp (app on mobile, web on desktop)
 * with a pre-filled message addressed to the agency.
 *
 * @param {string} [message] Text that appears in the chat box when it opens.
 * @param {string} [number]  Override the agency number (digits only).
 * @returns {string} e.g. https://wa.me/233503238073?text=Hello%20BloomBridge
 */
export function buildWhatsAppLink(
  message = defaultWhatsAppMessage,
  number = contact.whatsappNumber,
) {
  const digits = String(number).replace(/\D/g, "");
  const text = encodeURIComponent(String(message).trim());
  return `https://wa.me/${digits}${text ? `?text=${text}` : ""}`;
}

/** Shared props for any anchor that should open the WhatsApp chat. */
export function whatsAppLinkProps(message) {
  return {
    href: buildWhatsAppLink(message),
    target: "_blank",
    rel: "noopener noreferrer",
  };
}

/**
 * Turns the contact form values into a tidy WhatsApp message.
 * @param {{name?: string, email?: string, phone?: string, role?: string, message?: string}} values
 */
export function buildEnquiryMessage({ name, email, phone, role, message } = {}) {
  const lines = ["Hello BloomBridge 👋", ""];

  if (name?.trim()) lines.push(`Name: ${name.trim()}`);
  if (role?.trim()) lines.push(`I am: ${role.trim()}`);
  if (email?.trim()) lines.push(`Email: ${email.trim()}`);
  if (phone?.trim()) lines.push(`Phone: ${phone.trim()}`);
  if (message?.trim()) lines.push("", message.trim());

  lines.push("", "I found you through your website.");
  return lines.join("\n");
}

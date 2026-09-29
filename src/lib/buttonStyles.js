/**
 * Shared button styling — plain Tailwind utilities, no custom CSS.
 */

export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transform-none";

export const buttonSizes = {
  md: "px-5 py-3",
  lg: "px-6 py-3.5 text-base",
};

export const buttonVariants = {
  whatsapp:
    "bg-[#25d366] text-[#04331a] shadow-lg shadow-emerald-500/20 hover:bg-[#1fbe5c]",
  primary: "bg-blue-950 text-white hover:bg-blue-900",
  outline:
    "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50",
  ghost: "text-slate-700 hover:bg-slate-100",
  onPhoto:
    "border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
  light: "bg-white text-slate-900 shadow-sm hover:bg-slate-100",
};

/** The bright-green "Get in contact" styling used for every WhatsApp action. */
export function whatsAppButtonClasses({ size = "md", className = "" } = {}) {
  return `${buttonBase} ${buttonSizes[size]} ${buttonVariants.whatsapp} ${className}`;
}

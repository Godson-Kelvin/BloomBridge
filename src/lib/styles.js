/**
 * Shared Tailwind class recipes.
 *
 * There is no custom CSS in this project — every class below is a plain
 * Tailwind utility, grouped here so the same surfaces stay consistent.
 */

/** Standard white card used for all content blocks. */
export const card = "rounded-3xl border border-slate-200/80 bg-white shadow-sm";

/** Adds a restrained lift on hover (and respects reduced motion). */
export const cardHover =
  "transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md motion-reduce:transform-none";

/** Frosted surface for text that sits on top of photography. */
export const glassDark =
  "border border-white/15 bg-blue-950/45 backdrop-blur-xl backdrop-saturate-150";

/** Frosted surface for light backgrounds. */
export const glassLight =
  "border border-white/60 bg-white/70 backdrop-blur-xl backdrop-saturate-150";

/** Small uppercase section label. */
export const eyebrow =
  "text-xs font-bold uppercase tracking-[0.18em] text-pink-600";

/** Rounded icon tile. */
export const iconChip =
  "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-pink-50 text-pink-600";

/** Inline pill / badge. */
export const pill =
  "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700";

/** Focus treatment shared by interactive elements. */
export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2";

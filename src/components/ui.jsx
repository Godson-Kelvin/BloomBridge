import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import logoImage from "../assets/logo.jpg";
import {
  buttonBase,
  buttonSizes,
  buttonVariants,
  whatsAppButtonClasses,
} from "../lib/buttonStyles";
import { whatsAppLinkProps } from "../lib/whatsapp";
import { WhatsAppIcon } from "./icons";

export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Fades and lifts its children into view using Tailwind utilities only
 * (transition + translate + opacity + motion-reduce variants).
 */
export function Reveal({ as: Tag = "div", delay = 0, className = "", children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition duration-700 ease-out motion-reduce:transition-none ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Pill({ children, tone = "light", className = "" }) {
  const tones = {
    light: "border-slate-200 bg-white text-slate-700",
    onPhoto: "border-white/20 bg-white/10 text-white backdrop-blur-md",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  className = "",
}) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <p
          className={`text-xs font-bold uppercase tracking-[0.18em] ${
            onDark ? "text-pink-300" : "text-pink-600"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={`mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl ${
          onDark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed ${
            onDark ? "text-white/70" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Section({ id, tone = "white", className = "", children }) {
  const tones = {
    white: "bg-white",
    muted: "bg-slate-50",
    dark: "bg-blue-950 text-white",
    none: "",
  };

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-24 ${tones[tone]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

/** Primary call to action: opens the WhatsApp chat with a pre-filled message. */
export function WhatsAppButton({
  message,
  label = "Get in contact",
  size = "md",
  className = "",
}) {
  return (
    <a
      {...whatsAppLinkProps(message)}
      className={whatsAppButtonClasses({ size, className })}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {label}
    </a>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "outline",
  size = "md",
  className = "",
  withArrow = false,
}) {
  return (
    <a
      href={href}
      className={`${buttonBase} ${buttonSizes[size]} ${buttonVariants[variant]} ${className}`}
    >
      {children}
      {withArrow ? <ArrowRight className="h-4 w-4" /> : null}
    </a>
  );
}

/** Flat brand mark — a cobalt tile with a bloom, no gradients. */
export function Logo({ className = "h-9 w-9" }) {
  return <img src={logoImage} alt="" aria-hidden="true" className={`${className} shrink-0 object-contain`} />;
}

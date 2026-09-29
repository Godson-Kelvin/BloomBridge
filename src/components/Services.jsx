import { Check } from "lucide-react";

import { serviceExtras, services } from "../config/content";
import { card, cardHover, iconChip, pill } from "../lib/styles";
import { Icon } from "./icons";
import { Reveal, Section, SectionHeading } from "./ui";

export default function Services() {
  return (
    <Section id="services" tone="muted">
      <SectionHeading
        align="center"
        eyebrow="What we do"
        title="Support for every person in the journey"
        description="Whether you are hoping to become a parent, thinking about carrying a child for someone, or donating, you get your own team, your own timeline and your own questions answered."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 100} className="h-full">
            <article
              className={`${card} ${cardHover} flex h-full flex-col p-6 sm:p-7`}
            >
              <span className={iconChip}>
                <Icon name={service.icon} />
              </span>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {service.blurb}
              </p>

              <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-slate-600"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pink-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          Also included in every journey
        </p>
        <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
          {serviceExtras.map((extra) => (
            <li key={extra} className={pill}>
              {extra}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

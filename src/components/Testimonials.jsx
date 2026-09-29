import { Star } from "lucide-react";

import { testimonials } from "../config/content";
import { card } from "../lib/styles";
import { Reveal, Section, SectionHeading } from "./ui";

export default function Testimonials() {
  return (
    <Section id="stories" tone="white">
      <SectionHeading
        align="center"
        eyebrow="Family stories"
        title="Kind words from the people we walk beside"
        description="Shared with permission. Names are shortened to protect the privacy of the families and surrogates we work with."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 100} className="h-full">
            <figure
              className={`${card} flex h-full flex-col justify-between p-6 sm:p-7`}
            >
              <div
                className="flex gap-0.5 text-pink-600"
                role="img"
                aria-label="Rated 5 out of 5"
              >
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <blockquote className="mt-5 text-base leading-relaxed text-slate-700">
                “{item.quote}”
              </blockquote>

              <figcaption className="mt-6 border-t border-slate-100 pt-5">
                <span className="block text-sm font-semibold text-slate-900">
                  {item.name}
                </span>
                <span className="block text-sm text-slate-500">
                  {item.detail}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

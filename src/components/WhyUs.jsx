import { features } from "../config/content";
import { card, cardHover, iconChip } from "../lib/styles";
import { Icon } from "./icons";
import { ButtonLink, Reveal, Section, SectionHeading } from "./ui";

export default function WhyUs() {
  return (
    <Section id="why-us" tone="muted">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
        <SectionHeading
          eyebrow="Why Bloom Bridge"
          title="The details that make a hard journey easier"
          description="Surrogacy involves medicine, law, money and emotion. We take the coordination off your plate so you can focus on your family."
        />
        <p className="text-sm leading-relaxed text-slate-600 lg:pb-2">
          We are deliberately small. That means fewer families at once, deeper
          relationships, and a team that recognises your voice when you call at
          9pm from another timezone.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 70} className="h-full">
            <article className={`${card} ${cardHover} h-full p-6`}>
              <span className={iconChip}>
                <Icon name={feature.icon} />
              </span>
              <h3 className="mt-4 text-base font-bold tracking-tight text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal
        className={`${card} mt-12 flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-7`}
      >
        <div>
          <p className="text-lg font-bold tracking-tight text-slate-900">
            Still deciding? Ask us the awkward questions.
          </p>
          <p className="mt-1.5 text-sm text-slate-600">
            Costs, timelines, legal risks, what happens if it does not work —
            nothing is off limits.
          </p>
        </div>
        <ButtonLink href="#faqs" variant="primary" withArrow>
          Read the FAQs
        </ButtonLink>
      </Reveal>
    </Section>
  );
}

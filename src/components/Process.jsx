import { steps } from "../config/content";
import { card } from "../lib/styles";
import { Reveal, Section, SectionHeading, WhatsAppButton } from "./ui";

export default function Process() {
  return (
    <Section id="how-it-works" tone="white">
      <SectionHeading
        align="center"
        eyebrow="How it works"
        title="Five clear steps, no surprises"
        description="You will always know what happens next, who is responsible for it and roughly when it should happen."
      />

      <div className="mx-auto mt-14 max-w-3xl">
        <ol className={`${card} divide-y divide-slate-100 overflow-hidden`}>
          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 60}
              className="flex gap-5 p-6 sm:p-7"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-900 text-sm font-bold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal className="mx-auto mt-10 max-w-3xl text-center">
        <p className="text-base font-semibold text-slate-900">
          Ready for step one? It starts with a message.
        </p>
        <WhatsAppButton
          size="lg"
          className="mt-5"
          label="Get in contact on WhatsApp"
          message="Hello Bloom Bridge 👋 I'd like to book a free discovery chat about surrogacy in Ghana."
        />
      </Reveal>
    </Section>
  );
}

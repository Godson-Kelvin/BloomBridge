import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { faqs } from "../config/content";
import { card } from "../lib/styles";
import { Reveal, Section, SectionHeading, WhatsAppButton } from "./ui";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faqs" tone="muted">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Questions & answers"
            title="The things families ask us first"
            description="Straight answers, without the sales pitch. If your question is not here, WhatsApp us — we answer honestly, even when the answer is “no”."
          />

          <div className={`${card} mt-8 p-6`}>
            <p className="text-base font-bold tracking-tight text-slate-900">
              Talk to a human
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              No forms to fill in if you would rather just chat. Our care team
              is on WhatsApp during Kumasi office hours.
            </p>
            <WhatsAppButton
              className="mt-5 w-full"
              label="Ask us on WhatsApp"
              message="Hello Bloom Bridge 👋 I have a question about surrogacy in Ghana."
            />
          </div>
        </div>

        <ul className={`${card} divide-y divide-slate-100 overflow-hidden`}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <Reveal as="li" key={faq.q} delay={index * 50}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-50"
                  >
                    <span className="text-base font-semibold text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 motion-reduce:transition-none ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

import { Check, Quote } from "lucide-react";

import aboutImage from "../assets/about-mother-baby.jpg";
import { card } from "../lib/styles";
import { ButtonLink, Reveal, Section, SectionHeading } from "./ui";

const promises = [
  {
    title: "Consent and dignity, always",
    body: "Surrogate mothers are never recruited, pressured or rushed. Everything is explained, in their language, with independent advice.",
  },
  {
    title: "One coordinator, start to finish",
    body: "You keep the same case manager from your first WhatsApp message to your final follow-up call.",
  },
  {
    title: "Honest about what is possible",
    body: "If a journey is not safe, lawful or realistic for you, we will say so — before you spend a cedi.",
  },
];

export default function About() {
  return (
    <Section id="about" tone="white">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="About BloomBridge"
            title="A bridge between families and the people who help create them."
            description="We are a Ghanaian agency built by people who have watched families struggle with opaque agencies, unanswered calls and legal surprises. BloomBridge exists to make surrogacy in Ghana clear, kind and properly coordinated."
          />

          <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
            From Kumasi we coordinate screening, matching, clinical
            appointments, independent legal counsel and aftercare — working
            alongside accredited fertility clinics rather than in place of
            them.
          </p>

          <ButtonLink href="#services" className="mt-8" withArrow>
            Explore our services
          </ButtonLink>
        </Reveal>

        <Reveal delay={120} className="space-y-6">
          <div className={`${card} overflow-hidden p-2`}>
            <img
              src={aboutImage}
              alt="A mother holding her baby during a quiet moment at home"
              loading="lazy"
              className="h-56 w-full rounded-[1.25rem] object-cover object-[50%_30%] sm:h-64"
            />
          </div>

          <div className={`${card} p-6 sm:p-7`}>
            <h3 className="text-lg font-bold tracking-tight text-slate-900">
              What we promise
            </h3>
            <ul className="mt-5 space-y-4">
              {promises.map((promise) => (
                <li key={promise.title} className="flex gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-pink-50 text-pink-600">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {promise.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {promise.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <figure className={`${card} p-6 sm:p-7`}>
            <Quote className="h-5 w-5 text-pink-600" aria-hidden="true" />
            <blockquote className="mt-4 text-base leading-relaxed text-slate-700">
              “Every family that walks through our door arrives with a story.
              Our job is to make sure nobody has to explain it twice.”
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold text-slate-900">
              Naa Adjoa Mensah
              <span className="block font-normal text-slate-500">
                Founder & Lead Case Manager
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}

import { MapPin } from "lucide-react";

import heroImage from "../assets/hero-mother-baby.jpg";
import { site } from "../config/site";
import { ButtonLink, Container, Pill, Reveal, WhatsAppButton } from "./ui";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-blue-950">
      <img
        src={heroImage}
        alt="A mother gently holding her newborn baby close to her chest"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_35%]"
      />
      <div className="absolute inset-0 -z-10 bg-blue-950/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-950/90 via-blue-950/60 to-transparent" />

      <Container className="flex min-h-[78svh] items-center py-28 sm:py-32">
        <Reveal className="max-w-2xl text-left">
          <Pill tone="onPhoto" className="border-white/20 bg-blue-950/35">
            <MapPin className="h-3.5 w-3.5 text-green-200" />
            {site.city}, {site.country}
          </Pill>

          <h1 className="mt-7 max-w-[13ch] text-balance font-serif text-5xl font-semibold leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            Your journey to parenthood, gently guided.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Ethical surrogacy coordination in Ghana — honest advice, careful
            matching and one person by your side.
          </p>

          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton size="lg" label="Get in contact on WhatsApp" />
            <ButtonLink
              href="#how-it-works"
              size="lg"
              variant="onPhoto"
              withArrow
            >
              How it works
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

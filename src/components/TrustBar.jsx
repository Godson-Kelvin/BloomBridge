import { stats } from "../config/content";
import { Container, Reveal } from "./ui";

export default function TrustBar() {
  return (
    <section aria-label="Bloom Bridge at a glance" className="bg-white">
      <Container>
        <Reveal className="grid gap-x-10 gap-y-7 border-b border-slate-200 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-green-200 pl-4 text-left">
              <p className="text-3xl font-extrabold tracking-tight text-green-800 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

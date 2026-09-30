import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";

import { disclaimer } from "../config/content";
import { contact, navLinks, site } from "../config/site";
import { buildWhatsAppLink } from "../lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import { Container, Logo } from "./ui";

const supportLinks = [
  { label: "Intended parents", href: "#services" },
  { label: "Surrogate mothers", href: "#services" },
  { label: "Egg & sperm donors", href: "#services" },
  { label: "Family stories", href: "#stories" },
  { label: "FAQs", href: "#faqs" },
];

const columnHeading = "text-xs font-bold uppercase tracking-[0.18em] text-slate-500";
const linkClass = "text-sm text-slate-400 transition hover:text-white";

/** Resolved once at module scope so rendering stays pure. */
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-blue-950 pt-16 pb-8 text-slate-300">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <Logo onDark />
              <span className="text-base font-extrabold tracking-tight text-white">
                {site.name}
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              A Ghanaian surrogacy agency in {site.city} supporting intended
              parents, surrogate mothers and donors with honest, ethical and
              properly coordinated care.
            </p>

          </div>

          <nav aria-label="Explore">
            <h2 className={columnHeading}>Explore</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Support">
            <h2 className={columnHeading}>Support</h2>
            <ul className="mt-5 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={columnHeading}>Contact</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-slate-300 transition hover:text-white"
                >
                  <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#25d366]" />
                  <span>
                    {contact.whatsappDisplay}
                    <span className="block text-xs text-slate-500">
                      WhatsApp · fastest reply
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="flex items-start gap-3 text-sm text-slate-300 transition hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contact.emailHref}
                  className="flex items-start gap-3 text-sm text-slate-300 transition hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{contact.addressLines.join(", ")}</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs leading-relaxed text-slate-400">
          {disclaimer}
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {site.legalName}. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 font-semibold text-slate-300 transition hover:text-white"
          >
            Back to top
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}

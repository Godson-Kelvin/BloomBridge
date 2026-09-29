import { useMemo, useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import contactImage from "../assets/mother-baby.jpg";
import { contact, contactRoles } from "../config/site";
import { whatsAppButtonClasses } from "../lib/buttonStyles";
import { card } from "../lib/styles";
import { buildEnquiryMessage, buildWhatsAppLink } from "../lib/whatsapp";
import { WhatsAppIcon } from "./icons";
import { Container, Reveal } from "./ui";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  role: contactRoles[0],
  message: "",
};

const fieldClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800/10";
const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const whatsAppHref = useMemo(
    () => buildWhatsAppLink(buildEnquiryMessage(form)),
    [form],
  );

  const update = (field) => (event) => {
    const { value } = event.target;
    setForm((current) => ({ ...current, [field]: value }));
    setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(whatsAppHref, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const details = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: contact.whatsappDisplay,
      href: buildWhatsAppLink(),
      external: true,
      hint: "Fastest way to reach us",
    },
    {
      icon: Phone,
      label: "Office phone",
      value: contact.phoneDisplay,
      href: contact.phoneHref,
    },
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: contact.emailHref,
    },
    {
      icon: MapPin,
      label: "Visit us",
      value: contact.addressLines.join(", "),
    },
    {
      icon: Clock,
      label: "Opening hours",
      value: contact.hours,
    },
  ];

  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden bg-blue-950 py-20 sm:py-24"
    >
      <img
        src={contactImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_38%]"
      />
      <div className="absolute inset-0 -z-10 bg-blue-950/80" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-pink-300">
              Get in contact
            </p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s start with a simple conversation.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
              Fill this in and we will open WhatsApp with your message ready to
              send — no account, no sales funnel, no waiting for an email
              reply.
            </p>

            <ul className="mt-9 space-y-5">
              {details.map((item) => {
                const IconComponent = item.icon;
                const content = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/10 text-white">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                        {item.label}
                      </span>
                      <span className="block text-sm font-semibold text-white sm:text-base">
                        {item.value}
                      </span>
                      {item.hint ? (
                        <span className="block text-xs text-white/50">
                          {item.hint}
                        </span>
                      ) : null}
                    </span>
                  </>
                );

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4 transition hover:opacity-90"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className={`${card} p-6 sm:p-8`}
            >
              <h3 className="text-xl font-bold tracking-tight text-slate-900">
                Send us a WhatsApp message
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Only your name and message are needed — everything else simply
                helps us reply properly.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="contact-name">
                    Your name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Ama Mensah"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-role">
                    I am a…
                  </label>
                  <select
                    id="contact-role"
                    name="role"
                    value={form.role}
                    onChange={update("role")}
                    className={fieldClass}
                  >
                    {contactRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-phone">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+233 24 123 4567"
                    className={fieldClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="contact-message">
                    How can we help? *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us a little about your situation and what you would like to know."
                    className={`${fieldClass} resize-y`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className={whatsAppButtonClasses({
                  size: "lg",
                  className: "mt-7 w-full",
                })}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Get in contact on WhatsApp
              </button>

              {sent ? (
                <p className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800">
                  WhatsApp should have opened in a new tab. If it did not,{" "}
                  <a
                    href={whatsAppHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                  >
                    tap here to send your message
                  </a>
                  .
                </p>
              ) : null}

              <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
                Your details stay with our care team and are never shared
                without your written consent.
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

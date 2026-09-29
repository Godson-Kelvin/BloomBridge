import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { navLinks, site } from "../config/site";
import { Container, Logo, WhatsAppButton } from "./ui";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Let keyboard users dismiss the mobile menu with Escape.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="border-b-4 border-blue-600 bg-white">
      <Container className="max-w-6xl">
        <nav
          className="flex min-h-[82px] items-center justify-between gap-4 py-3"
          aria-label="Main navigation"
        >
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="flex shrink-0 items-center gap-3"
          >
            <Logo className="h-11 w-11" />
            <span className="text-lg font-black leading-tight tracking-tight text-blue-950">
              {site.name}
              <span className="mt-1 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-blue-600">
                {site.city} · {site.country}
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-bold text-blue-950 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <WhatsAppButton label="Get in contact" />
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-blue-700 text-white transition hover:bg-blue-800 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <div
          id="mobile-navigation"
          className="border-t border-blue-100 pb-4 pt-3 lg:hidden"
          hidden={!open}
        >
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-sm font-bold text-blue-950 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {link.label}
              </a>
            ))}
            <div className="col-span-2 pt-1">
              <WhatsAppButton
                className="w-full"
                label="Get in contact on WhatsApp"
              />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

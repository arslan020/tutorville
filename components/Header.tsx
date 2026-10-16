"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import type { NavLink, SiteInfo } from "@/lib/content";

export default function Header({ site, nav }: { site: SiteInfo; nav: NavLink[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center sm:h-20 justify-between gap-4 px-5 sm:px-6">
          <Link href="/" onClick={() => setOpen(false)} aria-label="TutorVille home" className="flex-shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition ${
                  isActive(link.href) ? "bg-sky text-navy" : "text-ink/75 hover:bg-mist hover:text-deep-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-bold text-white transition hover:bg-deep-navy"
            >
              <PhoneIcon />
              Call us
            </a>
            <Link
              href="/book"
              className="inline-flex rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#8E3D6A]"
            >
              Book a free lesson
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-deep-navy lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-deep-navy/40 transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <nav
        className={`fixed inset-y-0 left-0 z-50 flex h-full w-80 max-w-[86%] flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-deep-navy"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-1 px-4 py-4">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-3 py-3 text-sm font-semibold hover:bg-sky hover:text-navy ${
                isActive(link.href) ? "bg-sky text-navy" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${site.phoneTel}`}
            onClick={() => setOpen(false)}
            className="mx-1 mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-4 py-3 text-sm font-bold text-white"
          >
            <PhoneIcon />
            Call us
          </a>
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="mx-1 rounded-full bg-accent px-4 py-3 text-center text-sm font-bold text-white"
          >
            Book a free lesson
          </Link>
        </div>
      </nav>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.81.3 1.6.54 2.36a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.76.24 1.55.42 2.36.54a2 2 0 011.72 2.05z" />
    </svg>
  );
}

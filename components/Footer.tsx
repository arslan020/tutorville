import Link from "next/link";
import Logo from "@/components/Logo";
import type { SiteInfo } from "@/lib/content";

const DISCOVER = [
  { label: "Home", href: "/" },
  { label: "Tutors", href: "/tutors" },
  { label: "Prices", href: "/prices" },
  { label: "Reviews", href: "/reviews" },
];

const CONNECT = [
  { label: "Book a free lesson", href: "/book" },
  { label: "Contact us", href: "/contact" },
];

export default function Footer({ site }: { site: SiteInfo }) {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-xs">
          <Logo inverted />
          <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-white/75">{site.brandStatement}</p>
        </div>
        <FooterList heading="Explore" links={DISCOVER} />
        <FooterList heading="Get started" links={CONNECT} />
        <div>
          <h4 className="text-sm font-bold text-white">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li className="text-white/75">{site.contactName}</li>
            <li>
              <a href={`tel:${site.phoneTel}`} className="text-white/80 transition hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all text-white/80 transition hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="http://www.hashtagmediamarketing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition hover:text-white"
            >
              Hashtag Media Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ heading, links }: { heading: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-white">{heading}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-white/75 transition hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

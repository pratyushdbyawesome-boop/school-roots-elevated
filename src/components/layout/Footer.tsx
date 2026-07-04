import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

import { school, navigation, importantLinks } from "@/data/school";
import logo from "@/assets/logo.png";

const quickLinks = navigation.slice(0, 8);
const govLinks = importantLinks;

const socials = [
  { label: "Facebook", icon: Facebook, url: "#" },
  { label: "Twitter", icon: Twitter, url: "#" },
  { label: "YouTube", icon: Youtube, url: "#" },
  { label: "Instagram", icon: Instagram, url: "#" },
];

export function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12" width={48} height={48} />
            <div>
              <p className="font-display text-base font-bold">{school.shortName}</p>
              <p className="text-xs text-primary-foreground/70">UDISE: {school.udise}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            A Government English-medium school committed to accessible, quality education for
            every child in Surguja, Chhattisgarh.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                aria-label={s.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-saffron hover:text-saffron-foreground"
              >
                <s.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-saffron">Quick Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-saffron">Government Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {govLinks.map((l) => (
              <li key={l.url}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-saffron">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
              <span className="text-primary-foreground/80">{school.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
              <a href={school.phoneHref} className="text-primary-foreground/80 hover:text-primary-foreground">
                {school.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
              <a href={`mailto:${school.email}`} className="break-all text-primary-foreground/80 hover:text-primary-foreground">
                {school.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/70 sm:flex-row">
          <p>© {new Date().getFullYear()} {school.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-primary-foreground">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

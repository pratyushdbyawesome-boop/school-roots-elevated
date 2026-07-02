import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import heroBg from "@/assets/hero-school.jpg";

type Crumb = { label: string; to?: string };

type Props = {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
};

/** Reusable inner-page banner with breadcrumb navigation. */
export function PageHero({ title, subtitle, crumbs = [] }: Props) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />
      <div className="container-page relative py-16 sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-primary-foreground/80">
            <li>
              <Link to="/" className="inline-flex items-center gap-1 hover:text-primary-foreground">
                <Home className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Home</span>
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-primary-foreground">
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-medium text-primary-foreground">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="max-w-3xl text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

import { school } from "@/data/school";

/**
 * Builds a consistent per-route head() payload: title, description,
 * canonical, og:url and og:title/description. Keeps canonical on the
 * leaf route (never in __root) to avoid duplicate tags.
 */
export function pageHead(opts: { title: string; description: string; path: string }) {
  const fullTitle = `${opts.title} | ${school.shortName}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: opts.description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: opts.path },
    ],
    links: [{ rel: "canonical", href: opts.path }],
  };
}

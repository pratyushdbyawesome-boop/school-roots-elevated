import { Link } from "@tanstack/react-router";
import { Megaphone } from "lucide-react";
import { notices } from "@/data/school";

/** Marquee-style latest-notices ticker. Pauses on hover. */
export function NewsTicker() {
  const items = notices.slice(0, 5);
  const doubled = [...items, ...items];

  return (
    <div className="border-b border-primary-dark/20 bg-primary text-primary-foreground">
      <div className="container-page flex items-center gap-3 py-2">
        <span className="z-10 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-saffron px-3 py-1 text-xs font-bold uppercase tracking-wide text-saffron-foreground">
          <Megaphone className="h-3.5 w-3.5" aria-hidden="true" /> Latest
        </span>
        <div className="group relative flex-1 overflow-hidden">
          <ul className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
            {doubled.map((n, i) => (
              <li key={`${n.id}-${i}`} className="flex items-center gap-2 whitespace-nowrap text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-saffron" aria-hidden="true" />
                <Link to="/notices" className="hover:underline">
                  {n.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

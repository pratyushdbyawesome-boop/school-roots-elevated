import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, Mail, ChevronDown, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { school, navigation, primaryNav } from "@/data/school";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const moreNav = navigation.filter(
  (n) => !primaryNav.some((p) => p.to === n.to),
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility top bar */}
      <div className="hidden bg-primary-dark text-primary-foreground md:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a href={school.phoneHref} className="inline-flex items-center gap-1.5 hover:text-saffron">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" /> {school.phone}
            </a>
            <a href={`mailto:${school.email}`} className="inline-flex items-center gap-1.5 hover:text-saffron">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" /> {school.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-90">UDISE: {school.udise}</span>
            <span className="opacity-70">|</span>
            <span className="opacity-90">Board: {school.board}</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "border-b transition-shadow duration-300",
          scrolled ? "glass shadow-soft" : "bg-background",
        )}
      >
        <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Primary">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="" className="h-11 w-11" width={44} height={44} />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-sm font-bold text-primary sm:text-base">
                {school.shortName}
              </span>
              <span className="text-[11px] text-muted-foreground">
                Govt. English Medium School
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((item) => (
              <NavLink key={item.to} to={item.to} active={isActive(pathname, item.to)}>
                {item.label}
              </NavLink>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary focus-visible:bg-accent">
                More <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {moreNav.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/admissions"
              className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-gradient-saffron px-4 py-2 text-sm font-semibold text-saffron-foreground shadow-soft transition-transform hover:scale-[1.03]"
            >
              <GraduationCap className="h-4 w-4" aria-hidden="true" /> Apply
            </Link>
          </div>

          {/* Mobile */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto p-0">
              <SheetHeader className="border-b bg-primary px-5 py-4 text-left">
                <SheetTitle className="flex items-center gap-2 text-primary-foreground">
                  <img src={logo} alt="" className="h-8 w-8" width={32} height={32} />
                  {school.shortName}
                </SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col p-3">
                {navigation.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={cn(
                        "block rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                        isActive(pathname, item.to)
                          ? "bg-accent text-primary"
                          : "text-foreground/80 hover:bg-accent hover:text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  to,
  active,
  children,
}: {
  to: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
        active ? "text-primary" : "text-foreground/80 hover:bg-accent hover:text-primary",
      )}
    >
      {children}
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-saffron"
        />
      )}
    </Link>
  );
}

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(to + "/");
}

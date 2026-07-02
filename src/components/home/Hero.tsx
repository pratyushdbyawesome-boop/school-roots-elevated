import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { GraduationCap, ArrowRight, ShieldCheck } from "lucide-react";

import heroImg from "@/assets/hero-school.jpg";
import { school, stats } from "@/data/school";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <img
        src={heroImg}
        alt="Campus of Swami Atmanand Govt English School, Sohga"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden="true" />

      <div className="container-page relative flex min-h-[82vh] flex-col justify-center py-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium text-primary-foreground">
            <ShieldCheck className="h-4 w-4 text-saffron" aria-hidden="true" />
            Government of Chhattisgarh · CGBSE
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl md:text-6xl">
            {school.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
            {school.name} — nurturing curious minds with quality English &amp; Hindi medium
            education, modern facilities and dedicated teachers in Surguja.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-saffron px-6 py-3 text-sm font-semibold text-saffron-foreground shadow-elevated transition-transform hover:scale-[1.03]"
            >
              <GraduationCap className="h-5 w-5" aria-hidden="true" /> Apply for Admission
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/20"
            >
              Discover the School <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="relative">
        <div className="container-page -mb-12 translate-y-12">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border shadow-card md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card px-4 py-6 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-bold text-primary sm:text-3xl">
                    {s.value}
                  </span>
                  <span className="mt-1 block text-xs font-medium text-muted-foreground sm:text-sm">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

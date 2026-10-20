"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, GraduationCap, Play, Star } from "lucide-react";
import { site } from "@/lib/site";

const ease = "easeOut" as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute -top-32 -left-24 -z-10 h-96 w-96 rounded-full bg-copper-300/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 -right-24 -z-10 h-96 w-96 rounded-full bg-navy-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Your degree. Your pace.{" "}
            <span className="text-copper-600">From India&apos;s top universities.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
          >
            {site.name} connects learners with accredited online UG &amp; PG programs from
            Tier-1, 2 &amp; 3 universities. Learn from expert faculty, watch lectures on any
            device, and get real career support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-copper-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-copper-600/25 transition-all hover:-translate-y-0.5 hover:bg-copper-500"
            >
              Explore courses
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 transition-all hover:-translate-y-0.5 hover:border-slate-400"
            >
              Talk to a counsellor
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease }}
            className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-8"
          >
            {[
              { k: "50+", v: "Universities" },
              { k: "120+", v: "Programs" },
              { k: "40,000+", v: "Learners" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">{s.k}</dt>
                <dd className="mt-1 text-sm text-slate-600">{s.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Hero visual — mock lecture player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative"
        >
          <div className="relative mx-auto max-w-md">
            <div className="rounded-3xl border border-white/60 bg-white/80 p-4 shadow-2xl shadow-copper-500/10 backdrop-blur">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950">
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-copper-600 shadow-lg">
                    <Play className="ml-0.5 h-7 w-7 fill-current" />
                  </span>
                </div>
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
                  Live lecture
                </span>
              </div>
              <div className="mt-4 px-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-900">
                    MBA — Strategic Management
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-copper-700">
                    <Star className="h-4 w-4 fill-current" /> 4.9
                  </span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-2/3 rounded-full bg-copper-600" />
                </div>
                <p className="mt-2 text-xs text-slate-600">Lesson 4 of 6 · 43 min</p>
              </div>
            </div>

            <div className="animate-float absolute -right-4 -top-5 hidden rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
              <p className="text-xs font-medium text-slate-600">Programme rating</p>
              <p className="font-display text-xl font-bold text-slate-900">4.9 / 5.0</p>
            </div>
            <div
              className="animate-float absolute -left-6 top-24 hidden rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:block"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-copper-600" />
                <p className="text-sm font-semibold text-slate-900">Placement support</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

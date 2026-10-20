"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

type Stat = { k: string; v: string; star?: boolean };

const stats: Stat[] = [
  { k: "50+", v: "Partner universities" },
  { k: "120+", v: "Online programs" },
  { k: "40,000+", v: "Active learners" },
  { k: "4.9", v: "Average rating", star: true },
];

export function Stats() {
  return (
    <section className="bg-navy-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="flex items-center justify-center gap-1.5 font-display text-4xl font-bold text-white sm:text-5xl">
                {s.k}
                {s.star && (
                  <Star
                    className="h-6 w-6 fill-copper-400 text-copper-400 sm:h-7 sm:w-7"
                    aria-hidden="true"
                  />
                )}
              </p>
              <p className="mt-2 text-sm text-slate-400">{s.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

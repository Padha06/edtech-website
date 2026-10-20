"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Calculator,
  Clock,
  Crown,
  LineChart,
  Megaphone,
  Star,
  Users,
} from "lucide-react";
import type { Course } from "@/lib/courses";
import { cn } from "@/lib/utils";

const icons = {
  briefcase: Briefcase,
  chart: BarChart3,
  calc: Calculator,
  line: LineChart,
  megaphone: Megaphone,
  crown: Crown,
} as const;

export function CourseCard({ course }: { course: Course }) {
  const Icon = icons[course.icon];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-copper-200 hover:shadow-xl hover:shadow-copper-500/10"
    >
      <div className={cn("relative h-28 bg-gradient-to-br", course.accent)}>
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#fff_1.5px,transparent_1.5px)] [background-size:18px_18px]" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
          {course.level}
        </span>
        <div className="absolute -bottom-6 left-5 grid h-12 w-12 place-items-center rounded-xl bg-white shadow-md">
          <Icon className="h-6 w-6 text-slate-800" />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-9">
        <div className="flex items-center justify-between text-xs font-medium text-slate-500">
          <span>{course.stream}</span>
          <span className="inline-flex items-center gap-1 text-copper-700">
            <Star className="h-3.5 w-3.5 fill-current" /> {course.rating}
          </span>
        </div>
        <h3 className="mt-2 font-display text-lg font-bold leading-snug text-slate-900">
          {course.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{course.short}</p>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-4 w-4" /> {course.students}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="font-display text-lg font-bold text-slate-900">{course.fee}</p>
            <p className="text-xs text-slate-500">{course.emi}</p>
          </div>
          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-copper-50 px-4 py-2 text-sm font-semibold text-copper-600 transition-colors group-hover:bg-copper-600 group-hover:text-white"
          >
            View
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

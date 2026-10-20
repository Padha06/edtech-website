"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { Course } from "@/lib/courses";
import { CourseCard } from "./course-card";
import { cn } from "@/lib/utils";

const streamFilters = ["All", "Management", "Commerce"] as const;
const levelFilters = ["All", "UG", "PG"] as const;

export function CourseCatalog({ courses }: { courses: Course[] }) {
  const [stream, setStream] = useState<(typeof streamFilters)[number]>("All");
  const [level, setLevel] = useState<(typeof levelFilters)[number]>("All");

  const filtered = courses.filter(
    (c) =>
      (stream === "All" || c.stream === stream) &&
      (level === "All" || c.level === level),
  );

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <div className="flex flex-wrap justify-center gap-2">
          {streamFilters.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStream(s)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                stream === s
                  ? "border-copper-600 bg-copper-600 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
              )}
            >
              {s}
            </button>
          ))}
        </div>
        <span className="mx-1 hidden h-6 w-px bg-slate-200 sm:block" />
        <div className="flex flex-wrap justify-center gap-2">
          {levelFilters.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLevel(l)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                level === l
                  ? "border-copper-600 bg-copper-600 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
              )}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-slate-500">
          No courses match these filters yet.
        </p>
      ) : (
        <motion.div
          key={`${stream}-${level}`}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </motion.div>
      )}
    </div>
  );
}

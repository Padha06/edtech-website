import type { Metadata } from "next";
import { CourseCatalog } from "@/components/course-catalog";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Browse accredited online UG & PG programs in Management and Commerce from India's top universities.",
};

export default function CoursesPage() {
  return (
    <section className="pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Find the right course for your future
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Accredited online degrees with flexible learning, expert faculty and career support.
          </p>
        </div>

        <div className="mt-12">
          <CourseCatalog courses={courses} />
        </div>
      </div>
    </section>
  );
}

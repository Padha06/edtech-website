import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { Features } from "@/components/features";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { Cta } from "@/components/cta";
import { CourseCard } from "@/components/course-card";
import { SectionHeading } from "@/components/section";
import { courses } from "@/lib/courses";

export default function Home() {
  const featured = courses.slice(0, 3);

  return (
    <>
      <Hero />
      <LogoCloud />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Courses our learners love"
            description="Start with our most-enrolled online degrees and diplomas."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-700"
            >
              View all courses
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Features />
      <Stats />
      <Testimonials />
      <Cta />
    </>
  );
}

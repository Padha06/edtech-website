import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock,
  GraduationCap,
  MessageCircle,
  Play,
  Star,
  Users,
} from "lucide-react";
import { courses, getCourse } from "@/lib/courses";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  return { title: course?.title ?? "Course" };
}

export default async function CoursePage({ params }: PageProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const enroll = `${site.wa}?text=${encodeURIComponent(
    `Hi, I want to enroll in ${course.title}`,
  )}`;

  return (
    <section className="pt-28 pb-20 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/courses"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" /> All courses
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-copper-50 px-3 py-1 text-xs font-semibold text-copper-600">
                {course.stream}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {course.level}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-copper-700">
                <Star className="h-4 w-4 fill-current" /> {course.rating}
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {course.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">{course.short}</p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-slate-400" /> {course.duration}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-slate-400" /> {course.mode}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Building2 className="h-4 w-4 text-slate-400" /> {course.tier} universities
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-4 w-4 text-slate-400" /> {course.students} learners
              </span>
            </div>

            {/* What you'll learn */}
            <div className="mt-10">
              <h2 className="font-display text-xl font-bold text-slate-900">What you&apos;ll learn</h2>
              <ul className="mt-4 space-y-3">
                {course.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-copper-500" />
                    <span className="leading-7">{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum */}
            <div className="mt-10">
              <h2 className="font-display text-xl font-bold text-slate-900">Curriculum</h2>
              <ol className="mt-4 divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
                {course.curriculum.map((lesson, i) => (
                  <li key={lesson.title}>
                    <Link
                      href={`/courses/${course.slug}/watch/${i}`}
                      className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-slate-50"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-copper-50 text-copper-600">
                        <Play className="ml-0.5 h-4 w-4 fill-current" />
                      </span>
                      <div className="flex-1">
                        <p className="font-medium text-slate-900">{lesson.title}</p>
                        <p className="text-sm text-slate-500">Lesson {i + 1}</p>
                      </div>
                      <span className="text-sm text-slate-600">{lesson.duration}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Sticky side card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5">
              <p className="text-sm text-slate-500">Programme fee</p>
              <p className="mt-1 font-display text-3xl font-bold text-slate-900">{course.fee}</p>
              <p className="mt-1 text-sm text-copper-700">{course.emi}</p>

              <div className="mt-5 space-y-2.5">
                {course.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-slate-700">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-copper-500" />
                    {h}
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href={enroll}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-copper-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-copper-600/25 transition-colors hover:bg-copper-500"
                >
                  Enroll now
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 text-base font-semibold text-slate-800 transition-colors hover:border-slate-400"
                >
                  <MessageCircle className="h-5 w-5" /> Ask a counsellor
                </a>
              </div>
              <p className="mt-4 text-center text-xs text-slate-600">
                No-cost counselling · Easy EMI · UGC-entitled
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

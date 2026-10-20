import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Play } from "lucide-react";
import { courses, getCourse } from "@/lib/courses";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return courses.flatMap((c) =>
    c.curriculum.map((_, i) => ({ slug: c.slug, index: String(i) })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]/watch/[index]">): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  return { title: course ? `Watch — ${course.title}` : "Watch" };
}

export default async function WatchPage({
  params,
}: PageProps<"/courses/[slug]/watch/[index]">) {
  const { slug, index } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const parsed = Number.parseInt(index, 10);
  const lessonIndex = Number.isFinite(parsed)
    ? Math.min(Math.max(parsed, 0), course.curriculum.length - 1)
    : 0;
  const lesson = course.curriculum[lessonIndex];

  return (
    <section className="pt-28 pb-20 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href={`/courses/${course.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" /> Back to course
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <YouTubeEmbed videoId={lesson.videoId} title={lesson.title} />
            <h1 className="mt-6 font-display text-2xl font-bold tracking-tight text-slate-900">
              {lesson.title}
            </h1>
            <p className="mt-2 text-slate-600">
              {course.title} · Lesson {lessonIndex + 1} of {course.curriculum.length} ·{" "}
              {lesson.duration}
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-slate-900">Course content</h2>
            <ol className="mt-4 divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
              {course.curriculum.map((l, i) => (
                <li key={l.title}>
                  <Link
                    href={`/courses/${course.slug}/watch/${i}`}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 transition-colors hover:bg-slate-50",
                      i === lessonIndex && "bg-copper-50/60",
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full",
                        i === lessonIndex
                          ? "bg-copper-600 text-white"
                          : "bg-slate-100 text-slate-500",
                      )}
                    >
                      <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                    </span>
                    <span className="flex-1 text-sm">
                      <span
                        className={cn(
                          "block font-medium",
                          i === lessonIndex ? "text-copper-700" : "text-slate-800",
                        )}
                      >
                        {l.title}
                      </span>
                      <span className="text-xs text-slate-600">{l.duration}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

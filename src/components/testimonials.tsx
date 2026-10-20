import { Star } from "lucide-react";
import { SectionHeading } from "./section";

const testimonials = [
  {
    quote:
      "I completed my BBA entirely online while working a part-time job. The recorded lectures and weekend live sessions made it possible.",
    name: "Priya Sharma",
    role: "BBA Graduate · Mumbai",
  },
  {
    quote:
      "The university options and EMI plans were the reason I finally enrolled. The placement cell helped me land my first internship in six months.",
    name: "Rahul Verma",
    role: "MBA Student · Delhi",
  },
  {
    quote:
      "As a working professional, the weekend EMBA fit my schedule perfectly. The faculty and mentorship were genuinely senior and experienced.",
    name: "Ananya Iyer",
    role: "EMBA Student · Bengaluru",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Loved by learners across India"
          description="Real stories from students who earned their degrees on Edvance."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
            >
              <div className="flex gap-0.5 text-copper-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-7 text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

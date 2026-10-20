import {
  BadgeCheck,
  Briefcase,
  GraduationCap,
  Layers,
  MessageCircle,
  Wallet,
} from "lucide-react";
import { SectionHeading } from "./section";

const features = [
  {
    icon: Layers,
    title: "Tier 1, 2 & 3 choice",
    body: "Compare and choose from 50+ recognised universities across every tier, so you find the right fit for your goals and budget.",
  },
  {
    icon: BadgeCheck,
    title: "Accredited programs",
    body: "UGC-entitled degrees and diploma programs that hold real value in the job market and for further studies.",
  },
  {
    icon: GraduationCap,
    title: "Learn from anywhere",
    body: "Recorded lectures plus live doubt sessions. Watch on your phone or laptop — your classes fit around your life.",
  },
  {
    icon: MessageCircle,
    title: "Expert mentorship",
    body: "Get guided by experienced faculty and industry mentors who help you stay on track, semester after semester.",
  },
  {
    icon: Briefcase,
    title: "Career & placement",
    body: "Resume support, interview prep and placement assistance to help you convert learning into a real career.",
  },
  {
    icon: Wallet,
    title: "Affordable & flexible",
    body: "Transparent fees with easy monthly EMI options, so a quality degree doesn't strain your finances.",
  },
];

export function Features() {
  return (
    <section id="why-us" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Everything you need to earn your degree online"
          description="We bring universities, faculty and career support together on one simple platform."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-copper-200 hover:shadow-lg hover:shadow-copper-500/5"
            >
              <div className="flex items-center gap-3">
                <f.icon className="h-5 w-5 shrink-0 text-copper-600" />
                <h3 className="font-display text-lg font-bold text-slate-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Building2 } from "lucide-react";
import { universities } from "@/lib/courses";

export function LogoCloud() {
  return (
    <section id="universities" className="border-y border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-600">
          Learn from recognised universities across India
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {universities.map((u) => (
            <div key={u} className="flex items-center gap-2 text-slate-600">
              <Building2 className="h-5 w-5 text-copper-600" />
              <span className="font-display text-base font-semibold">{u}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

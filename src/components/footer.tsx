import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              {site.tagline}. Accredited programs, flexible learning and career support — all in
              one place.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-600 hover:text-copper-600">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/courses" className="text-slate-600 hover:text-copper-600">
                  All courses
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-400" /> {site.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-400" /> {site.email}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-400" /> India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p className="text-xs text-slate-600">Demo site — replace content with your details.</p>
        </div>
      </div>
    </footer>
  );
}

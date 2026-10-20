"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Building2, Home, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function BottomNav() {
  const pathname = usePathname();

  const tabs = [
    { label: "Home", href: "/", icon: Home, active: pathname === "/" },
    {
      label: "Courses",
      href: "/courses",
      icon: BookOpen,
      active: pathname.startsWith("/courses"),
    },
    { label: "Colleges", href: "/#universities", icon: Building2, active: false },
    {
      label: "Call",
      href: `tel:${site.phone.replace(/\s/g, "")}`,
      icon: Phone,
      active: false,
    },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="border-t border-slate-200 bg-white/95 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
        <div className="pb-[env(safe-area-inset-bottom)]">
          <div className="mx-auto grid h-16 max-w-md grid-cols-5">
            <Tab {...tabs[0]} />
            <Tab {...tabs[1]} />

            <div className="relative flex justify-center">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="-mt-8 flex flex-col items-center"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-copper-500 via-copper-600 to-copper-700 text-white shadow-lg shadow-copper-600/40 ring-4 ring-white transition-transform active:scale-95">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <span className="mt-1 text-[11px] font-semibold text-slate-500">Chat</span>
              </a>
            </div>

            <Tab {...tabs[2]} />
            <Tab {...tabs[3]} />
          </div>
        </div>
      </div>
    </nav>
  );
}

function Tab({
  label,
  href,
  icon: Icon,
  active,
}: {
  label: string;
  href: string;
  icon: typeof Home;
  active: boolean;
}) {
  const inner = (
    <span className="flex flex-col items-center gap-1">
      <Icon className={cn("h-5 w-5", active ? "text-copper-600" : "text-slate-500")} />
      <span
        className={cn(
          "whitespace-nowrap text-[11px] font-semibold",
          active ? "text-copper-600" : "text-slate-500",
        )}
      >
        {label}
      </span>
    </span>
  );

  if (href.startsWith("tel:")) {
    return (
      <a
        href={href}
        aria-label={label}
        className="flex h-full w-full items-center justify-center active:opacity-60"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-full w-full items-center justify-center"
    >
      {inner}
    </Link>
  );
}

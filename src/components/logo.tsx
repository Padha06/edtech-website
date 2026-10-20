"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  const gradientId = `edv-${useId().replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={cn("h-9 w-9 shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#223850" />
          <stop offset="1" stopColor="#b85f2f" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill={`url(#${gradientId})`} />
      <path d="M12 16.5 20 12l8 4.5L20 21l-8-4.5Z" fill="#fff" />
      <path
        d="M12 16.5v6c0 2 3.6 4.5 8 4.5s8-2.5 8-4.5v-6L20 21l-8-4.5Z"
        fill="#fff"
        fillOpacity="0.55"
      />
      <path d="M20 24.5V29" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {showText && (
        <span className="font-display text-xl font-bold tracking-tight text-slate-900">
          Edvance
        </span>
      )}
    </span>
  );
}

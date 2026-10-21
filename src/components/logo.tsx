import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/logo.jpg"
        alt="Edvance logo"
        width={36}
        height={36}
        className="h-9 w-9 rounded-lg object-cover"
      />
      {showText && (
        <span className="font-display text-xl font-bold tracking-tight text-slate-900">
          Edvance
        </span>
      )}
    </span>
  );
}

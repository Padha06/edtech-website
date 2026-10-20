import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid flex-1 place-items-center px-4 pt-28 pb-20 text-center">
      <div>
        <p className="font-display text-7xl font-bold text-slate-200">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-slate-900">
          Page not found
        </h1>
        <p className="mt-2 text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-copper-600 px-6 py-3 text-sm font-semibold text-white hover:bg-copper-500"
        >
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </div>
    </section>
  );
}

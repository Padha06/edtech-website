import Image from "next/image";

export function LogoCloud() {
  return (
    <section id="universities" className="border-y border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-600">
          Learn from recognised universities across India
        </p>
        <div className="mt-8 flex justify-center">
          <Image
            src="/images/university-logo.jpg"
            alt="Partner universities across India"
            width={900}
            height={120}
            className="h-auto w-full max-w-4xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}

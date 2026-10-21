import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BottomNav } from "@/components/bottom-nav";
import { MotionProvider } from "@/components/motion-provider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edtech-website-nine.vercel.app"),
  title: {
    default: `${site.name} — Online UG & PG Degrees`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  openGraph: {
    title: `${site.name} — Online UG & PG Degrees`,
    description: site.description,
    images: ["/og-image.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf6f0",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-24 md:pb-0">
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BottomNav />
        </MotionProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { IBM_Plex_Mono, Manrope, Syne } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Syne({
  variable: "--font-display",
  subsets: ["latin"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Web Growth Studio | Privacy, Care Plans, and Consulting",
    template: "%s | Web Growth Studio",
  },
  description:
    "Professional website services for privacy compliance, care plans, and consulting, backed by 7+ years of enterprise implementation experience across multi-subsidiary organizations.",
  keywords: [
    "website privacy compliance",
    "consent implementation",
    "cookie consent audit",
    "website care plans",
    "enterprise web consulting",
    "enterprise compliance implementation",
    "multi-subsidiary website governance",
    "accessibility remediation",
    "Google Tag Manager consent",
    "AI-generated static websites",
    "Next.js static site generation",
    "Vercel deployment",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Web Growth Studio",
    title: "Web Growth Studio | Privacy, Care Plans, and Consulting",
    description:
      "Professional website services for privacy compliance, care plans, and consulting, backed by 7+ years of enterprise implementation experience across multi-subsidiary organizations.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Growth Studio | Privacy, Care Plans, and Consulting",
    description:
      "Professional website services for privacy compliance, care plans, and consulting, backed by 7+ years of enterprise implementation experience across multi-subsidiary organizations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <GoogleTagManager gtmId="GTM-KJCXXH7F" />
        <div className="page-wrap flex min-h-full flex-col">
          <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
              <a
                href="/"
                className="display-font text-xl text-slate-950 sm:text-2xl"
              >
                Web Growth Studio
              </a>

              <nav
                aria-label="Main"
                className="flex items-center gap-2 sm:gap-4"
              >
                <a
                  href="/"
                  className="rounded-full px-3 py-1.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                >
                  Home
                </a>
                <a
                  href="/services"
                  className="rounded-full px-3 py-1.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                >
                  Services
                </a>
                <a
                  href="/contact-us"
                  className="rounded-full bg-slate-950 px-4 py-1.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Contact
                </a>
              </nav>
            </div>
          </header>

          {children}

          <footer className="mt-14 border-t border-slate-200/80 bg-white/85 py-8 backdrop-blur-sm">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 sm:px-8 lg:px-10">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-700">
                <a
                  href="/privacy-policy"
                  className="transition-colors hover:text-slate-950 hover:underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="transition-colors hover:text-slate-950 hover:underline"
                >
                  Terms
                </a>
                <a
                  href="/contact-us"
                  className="transition-colors hover:text-slate-950 hover:underline"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="cky-banner-element transition-colors hover:text-slate-950 hover:underline"
                >
                  Cookie Settings
                </a>
              </div>
              <p className="text-sm text-slate-600">
                {year} Web Growth Studio. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

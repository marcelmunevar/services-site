import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { IBM_Plex_Mono, Manrope, Syne } from "next/font/google";
import LayoutShell from "./LayoutShell";
import Providers from "./providers";
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
      className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`}
    >
      <body>
        <GoogleTagManager gtmId="GTM-KJCXXH7F" />
        <Providers>
          <LayoutShell year={year}>{children}</LayoutShell>
        </Providers>
      </body>
    </html>
  );
}

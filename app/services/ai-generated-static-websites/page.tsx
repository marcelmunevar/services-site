import type { Metadata } from "next";
import Link from "next/link";
import TrackableCTA from "../../components/TrackableCTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  title: "AI-Generated Static Websites",
  description:
    "Cost-effective static websites built with AI and Next.js, deployed to Vercel's free tier. Ideal for portfolios, landing pages, documentation sites, and small business websites.",
  keywords: [
    "AI-generated static websites",
    "Next.js static site generation",
    "Vercel deployment",
    "free tier hosting",
    "portfolio website",
    "landing page development",
    "static site generator",
  ],
  alternates: {
    canonical: "/services/ai-generated-static-websites",
  },
};

export default function AIGeneratedStaticWebsitesPage() {
  const faqs = [
    {
      question: "What is included in the free Vercel deployment?",
      answer:
        "Vercel's free tier (Hobby plan) includes hosting, global CDN delivery, automatic HTTPS, and continuous deployment from Git. It supports custom domains and provides generous bandwidth for most small sites. Limitations include bandwidth caps and limits on build minutes per month.",
    },
    {
      question: "Can I use my own domain name?",
      answer:
        "Yes. You bring your domain and we configure it in your Vercel account. DNS updates typically propagate within a few hours. SSL is provisioned automatically at no extra cost.",
    },
    {
      question: "What are the free tier limitations?",
      answer:
        "Vercel's free Hobby tier is designed for personal projects and low-traffic sites. Commercial use requires a Pro plan. There are also limits on serverless function execution time, build minutes, and bandwidth. For most portfolios and landing pages these limits are more than sufficient.",
    },
    {
      question: "Is this suitable for e-commerce or a membership site?",
      answer:
        "No. This service targets static content sites without real-time databases, user authentication, or complex backend interactions. It is ideal for portfolios, landing pages, documentation sites, and small business brochure sites.",
    },
    {
      question: "How is the content generated?",
      answer:
        "Content is drafted using AI based on a brief you provide about your brand, goals, and audience. You review and approve the copy before deployment. Final content is always your choice.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI-Generated Static Websites",
        item: `${siteUrl}/services/ai-generated-static-websites`,
      },
    ],
  };

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-5 py-12 sm:px-8 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="transition-colors hover:text-slate-900">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <a
              href="/services"
              className="transition-colors hover:text-slate-900"
            >
              Services
            </a>
          </li>
          <li>/</li>
          <li className="font-semibold text-slate-900">
            AI-Generated Static Websites
          </li>
        </ol>
      </nav>

      <section className="reveal rounded-[1.8rem] border border-white/70 bg-white/85 p-7 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          AI-Generated Static Websites
        </p>
        <h1 className="display-font mt-3 text-4xl text-slate-950 sm:text-5xl">
          A professional web presence, built with AI and deployed for free
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
          Get a fast, fully responsive static website without the cost of
          traditional web development. AI drafts the content, Next.js powers the
          build, and Vercel hosts it on a global CDN—often at zero hosting cost.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="reveal rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)]">
          <h2 className="text-2xl font-semibold text-slate-950">
            What you get
          </h2>
          <ul className="dot-list mt-4 space-y-2 text-sm text-slate-700">
            <li>AI-powered content generation from your brief</li>
            <li>Next.js static site generation (fast, SEO-friendly)</li>
            <li>Vercel account creation and project setup</li>
            <li>Free tier Vercel deployment with global CDN</li>
            <li>Fully responsive, mobile-first design</li>
            <li>SEO-optimized markup and metadata</li>
            <li>Custom domain configuration (you provide the domain)</li>
            <li>Automatic HTTPS and deployment automation</li>
            <li>No monthly hosting cost for initial deployment</li>
          </ul>
        </article>

        <article className="delay-1 reveal rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)]">
          <h2 className="text-2xl font-semibold text-slate-950">Best for</h2>
          <ul className="dot-list mt-4 space-y-2 text-sm text-slate-700">
            <li>Personal and professional portfolios</li>
            <li>Product or service landing pages</li>
            <li>Documentation and knowledge base sites</li>
            <li>Small business brochure websites</li>
            <li>Event or campaign pages</li>
            <li>Anyone who wants a fast, professional site without ongoing hosting bills</li>
          </ul>
          <TrackableCTA
            href="/#contact"
            eventName="consultation_cta_clicked"
            eventProperties={{ service: "ai-generated-static-websites" }}
            className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Book a discovery call
          </TrackableCTA>
        </article>
      </section>

      <section className="reveal rounded-[1.8rem] border border-slate-200 bg-white/90 p-7 shadow-[0_16px_55px_rgba(2,8,20,0.08)] sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          Process
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950">
          From brief to live site in days
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          A straightforward process designed to move quickly without sacrificing
          quality.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-bold text-orange-700 uppercase tracking-wide">
              Step 1
            </p>
            <p className="mt-2 text-base font-semibold text-slate-900">
              AI Generation
            </p>
            <p className="mt-2 text-sm text-slate-700">
              You share a brief about your goals, audience, and brand. AI drafts
              the copy and structure. You review and approve before anything is
              built.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-bold text-orange-700 uppercase tracking-wide">
              Step 2
            </p>
            <p className="mt-2 text-base font-semibold text-slate-900">
              Build &amp; Review
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Next.js compiles your approved content into a static site. You
              review a preview link and request any final adjustments before
              going live.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-bold text-orange-700 uppercase tracking-wide">
              Step 3
            </p>
            <p className="mt-2 text-base font-semibold text-slate-900">
              Deploy to Vercel
            </p>
            <p className="mt-2 text-sm text-slate-700">
              We create your Vercel account, connect your domain, and deploy.
              Your site is live on a global CDN with automatic HTTPS and
              continuous deployment.
            </p>
          </article>
        </div>
      </section>

      <section className="reveal rounded-[1.8rem] border border-slate-200 bg-white/90 p-7 shadow-[0_16px_55px_rgba(2,8,20,0.08)] sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          Hosting &amp; Costs
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950">
          Vercel free tier: what's included and what to know
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Free tier includes
            </p>
            <ul className="dot-list mt-3 space-y-2 text-sm text-slate-700">
              <li>Global CDN hosting (100GB bandwidth/month)</li>
              <li>Automatic HTTPS and SSL certificates</li>
              <li>Custom domain support</li>
              <li>Continuous deployment from Git</li>
              <li>Preview deployments for every push</li>
              <li>Serverless functions (limited invocations)</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Free tier limitations to note
            </p>
            <ul className="dot-list mt-3 space-y-2 text-sm text-slate-700">
              <li>100GB bandwidth cap per month</li>
              <li>Hobby plan is for personal, non-commercial use</li>
              <li>Limited build minutes per month</li>
              <li>No team collaboration on free plan</li>
              <li>
                Commercial projects require a Pro plan (paid upgrade)
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-slate-600">
          For most portfolios and small business landing pages, the free tier
          is more than enough. If your site grows, upgrading to Vercel Pro is
          straightforward and reasonably priced. Your only required ongoing cost
          is your domain name (typically $10–$20/year).
        </p>
      </section>

      <section className="reveal rounded-[1.8rem] border border-slate-200 bg-white/90 p-7 shadow-[0_16px_55px_rgba(2,8,20,0.08)] sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-500 uppercase">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950">
          Common questions
        </h2>
        <div className="mt-5 grid gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white p-4"
            >
              <summary className="cursor-pointer font-semibold text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="reveal rounded-[1.8rem] border border-slate-200 bg-slate-900 p-7 text-slate-100 sm:p-10">
        <p className="text-xs font-bold tracking-[0.16em] text-slate-300 uppercase">
          Get started
        </p>
        <h2 className="display-font mt-3 text-3xl">
          Ready to launch your site?
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
          Book a short discovery call to share your goals. I&apos;ll confirm
          whether a static site is the right fit, outline the timeline, and
          explain the cost breakdown (usually just your domain).
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <TrackableCTA
            href="/#contact"
            eventName="consultation_cta_clicked"
            eventProperties={{ service: "ai-generated-static-websites", source: "bottom_cta" }}
            className="inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Book a discovery call
          </TrackableCTA>
          <a
            href="/services"
            className="inline-flex rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800"
          >
            View all services
          </a>
        </div>
      </section>
    </main>
  );
}

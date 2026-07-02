import TrackableCTA from "./components/TrackableCTA";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Web Growth Studio",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
    description:
      "Professional web services with 7+ years supporting enterprise compliance implementations across multi-subsidiary organizations.",
    serviceType: [
      "Website Privacy Compliance",
      "Website Care Plans",
      "Enterprise Web Consulting",
      "Productized Website Services",
      "AI-Generated Static Websites",
    ],
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Growth Studio Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Privacy Compliance",
            url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"}/services/website-privacy-compliance`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Care Plans",
            url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"}/services/website-care-plans`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Enterprise Web Consulting",
            url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"}/services/enterprise-web-consulting`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Productized Website Services",
            url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"}/services/productized-website-services`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI-Generated Static Websites",
            url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"}/services/ai-generated-static-websites`,
          },
        },
      ],
    },
    knowsAbout: [
      "Consent implementation",
      "Cookie consent management",
      "Google Tag Manager",
      "Website accessibility",
      "Website performance",
      "WordPress maintenance",
      "Next.js development",
    ],
  };

  const serviceTracks = [
    {
      title: "Website Privacy Compliance",
      value: "Technical implementation and ongoing assurance",
      points: [
        "Cookie consent audits",
        "Consent implementation",
        "OneTrust/CookiePro setup",
        "Privacy policy implementation",
        "Google Tag Manager consent fixes",
        "Cross-subsidiary rollout support",
        "Monthly compliance monitoring",
      ],
      cta: "View compliance service",
      href: "/services/website-privacy-compliance",
    },
    {
      title: "Website Care Plans",
      value: "Monthly support for stable, secure websites",
      points: [
        "WordPress updates",
        "Security monitoring",
        "Backups",
        "Accessibility checks",
        "Cookie scans",
        "Small content updates",
      ],
      cta: "View care plans",
      href: "/services/website-care-plans",
    },
    {
      title: "Enterprise Web Consulting",
      value: "Senior delivery for high-impact web initiatives",
      points: [
        "Website migrations",
        "New landing pages",
        "Performance improvements",
        "Accessibility remediation",
        "Governance across multiple brands and teams",
        "Development support",
        "CI/CD and platform modernization",
      ],
      cta: "View consulting service",
      href: "/services/enterprise-web-consulting",
    },
    {
      title: "Productized Website Services",
      value: "Fixed-scope deliverables with clear turnaround",
      points: [
        "Website compliance audits",
        "Accessibility reports",
        "Cookie inventory reports",
        "Privacy checklists",
        "Templates and implementation guides",
        "Fixed-scope delivery packages",
      ],
      cta: "View productized offers",
      href: "/services/productized-website-services",
    },
    {
      title: "AI-Generated Static Websites",
      value: "Cost-effective static sites built with AI, deployed to Vercel's free tier",
      points: [
        "AI-powered content generation",
        "Next.js static site generation",
        "Vercel account creation and setup",
        "Free tier Vercel deployment (included)",
        "Fully responsive design",
        "SEO-optimized markup",
        "Fast CDN delivery",
        "Custom domain support",
        "No hosting costs for initial deployment",
      ],
      cta: "View AI website service",
      href: "/services/ai-generated-static-websites",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-5 py-12 sm:px-8 lg:px-10">
        <section className="reveal relative overflow-hidden rounded-[2rem] border border-white/65 bg-white/80 p-7 shadow-[0_26px_90px_rgba(13,26,38,0.18)] backdrop-blur-xl sm:p-12">
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(255,95,45,0.45),_rgba(255,95,45,0))]" />
          <div className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-[radial-gradient(circle,_rgba(5,141,110,0.35),_rgba(5,141,110,0))]" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-6">
              <p className="inline-block rounded-full border border-slate-300/70 bg-white/70 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-slate-700 uppercase">
                Professional Web Services
              </p>
              <h1 className="display-font max-w-3xl text-4xl leading-[1.04] text-slate-950 sm:text-5xl lg:text-6xl">
                I help businesses with privacy, maintenance, consulting, and
                audits.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl">
                I am a professional web partner focused on measurable outcomes:
                compliant tracking, healthier websites, faster delivery, and
                clear implementation standards.
              </p>
              <p className="inline-flex items-center rounded-full border border-slate-300/80 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.08em] text-slate-700 uppercase">
                7+ years supporting enterprise web programs across
                multi-subsidiary organizations
              </p>
              <div className="flex flex-wrap gap-3">
                <TrackableCTA
                  href="#services"
                  eventName="explore_services_clicked"
                  className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Explore Services
                </TrackableCTA>
                <TrackableCTA
                  href="#contact"
                  eventName="book_discovery_call_clicked"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                >
                  Book a Discovery Call
                </TrackableCTA>
              </div>
            </div>

            <div className="delay-1 reveal rounded-3xl border border-slate-200/80 bg-slate-50/90 p-6">
              <p className="text-xs font-bold tracking-[0.14em] text-slate-500 uppercase">
                Why clients work with me
              </p>
              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Clear technical leadership
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    You get practical recommendations, scoped execution, and no
                    vague handoffs.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Implementation that is audit-ready
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Privacy, accessibility, and tracking updates are documented
                    and easy for teams to maintain.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Fast, reliable communication
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Consistent progress updates, realistic timelines, and
                    predictable delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reveal rounded-[1.8rem] border border-slate-200 bg-white/90 p-7 shadow-[0_16px_55px_rgba(2,8,20,0.08)] sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-slate-500 uppercase">
                Enterprise Experience
              </p>
              <h2 className="display-font mt-3 text-3xl text-slate-950 sm:text-4xl">
                Proven compliance implementation across complex organizations
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-base leading-relaxed text-slate-700">
                I have spent over 7 years delivering implementation work for a
                large enterprise with many subsidiaries. I am experienced in
                rolling out compliance products and standards across different
                brands, teams, and site stacks while keeping execution practical
                and consistent.
              </p>

              <ul className="dot-list space-y-2 text-sm text-slate-700">
                <li>Multi-site and multi-team rollout planning</li>
                <li>Consent and tag governance across subsidiaries</li>
                <li>Clear documentation and handoff for internal teams</li>
                <li>Implementation aligned to enterprise constraints</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-bold tracking-[0.18em] text-slate-500 uppercase">
              Services
            </p>
            <h2 className="display-font text-3xl text-slate-950 sm:text-4xl">
              Five core services I offer
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {serviceTracks.map((track, index) => (
              <article
                key={track.title}
                className={`reveal rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.09)] backdrop-blur ${index % 2 === 1 ? "delay-1" : ""}`}
              >
                <p className="text-xs font-bold tracking-[0.15em] text-orange-700 uppercase">
                  {track.value}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                  {track.title}
                </h3>

                <ul className="dot-list mt-5 space-y-2 text-sm text-slate-700">
                  {track.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <TrackableCTA
                  href={track.href}
                  eventName="service_card_cta_clicked"
                  eventProperties={{ service: track.title }}
                  className="mt-5 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                >
                  {track.cta}
                </TrackableCTA>
              </article>
            ))}
          </div>
        </section>

        <section className="delay-1 reveal grid gap-5 rounded-[1.8rem] border border-slate-200 bg-slate-900 p-7 text-slate-100 sm:p-10 lg:grid-cols-3">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-slate-300 uppercase">
              Approach
            </p>
            <h3 className="display-font mt-3 text-3xl">
              Technical execution with business clarity.
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-200">
            I focus on implementation: consent tooling, GTM fixes, accessibility
            execution, and reliable delivery systems. When legal interpretation
            is required, I coordinate with legal teams while staying focused on
            technical outcomes.
          </p>
          <p className="text-sm leading-relaxed text-slate-200">
            Every engagement is built around clear deliverables, timelines, and
            reporting. Clients get confidence, not just code.
          </p>
        </section>

        <section
          id="contact"
          className="space-y-4 rounded-[1.7rem] border border-slate-200 bg-white/90 p-7 shadow-[0_16px_55px_rgba(2,8,20,0.08)] sm:p-10"
        >
          <p className="text-xs font-bold tracking-[0.18em] text-slate-500 uppercase">
            Next step
          </p>
          <h2 className="display-font text-3xl text-slate-950 sm:text-4xl">
            Let&apos;s talk about your website goals.
          </h2>
          <p className="max-w-2xl text-slate-700">
            Share your current setup and priorities. I&apos;ll recommend the
            right engagement model, from monthly support to consulting or
            fixed-scope audits.
          </p>
          <div className="flex flex-wrap gap-3">
            <TrackableCTA
              href="mailto:hello@example.com"
              eventName="contact_email_clicked"
              eventProperties={{ source: "home_contact_section" }}
              className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Email for Inquiries
            </TrackableCTA>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
            >
              Review Services Again
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

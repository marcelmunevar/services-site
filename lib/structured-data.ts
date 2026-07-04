const DEFAULT_SITE_URL = "https://example.com";

type ServiceDefinition = {
  title: string;
  href: string;
  servicesDescription: string;
  homeValue: string;
  homePoints: string[];
  homeCta: string;
};

const serviceDefinitions: ServiceDefinition[] = [
  {
    title: "Website Privacy Compliance",
    href: "/services/website-privacy-compliance",
    servicesDescription:
      "Cookie consent audits, consent management platform implementation, consent mode configuration, tag governance, and privacy-aware analytics.",
    homeValue: "Technical implementation and ongoing assurance",
    homePoints: [
      "Cookie consent audits",
      "Consent implementation",
      "OneTrust/CookiePro setup",
      "Privacy policy implementation",
      "Google Tag Manager consent fixes",
      "Cross-subsidiary rollout support",
      "Monthly compliance monitoring",
    ],
    homeCta: "View compliance service",
  },
  {
    title: "DNS Management & Edge Services",
    href: "/services/dns-management-edge-services",
    servicesDescription:
      "Client-owned Cloudflare setup and managed DNS/edge operations including migrations, DNS records, SSL/TLS hardening, CDN and WAF tuning, and ongoing change support.",
    homeValue: "Client-owned Cloudflare setup and managed DNS operations",
    homePoints: [
      "Client-owned Cloudflare account onboarding",
      "DNS migration planning and record validation",
      "Nameserver cutover support",
      "SSL/TLS hardening and redirect strategy",
      "CDN caching and edge performance tuning",
      "WAF baseline and bot protection setup",
      "Ongoing DNS and edge change support",
    ],
    homeCta: "View DNS service",
  },
  {
    title: "Website Care Plans",
    href: "/services/website-care-plans",
    servicesDescription:
      "Monthly website support including updates, security monitoring, backups, accessibility checks, and content maintenance.",
    homeValue: "Monthly support for stable, secure websites",
    homePoints: [
      "WordPress updates",
      "Security monitoring",
      "Backups",
      "Accessibility checks",
      "Cookie scans",
      "Small content updates",
    ],
    homeCta: "View care plans",
  },
  {
    title: "Enterprise Web Consulting",
    href: "/services/enterprise-web-consulting",
    servicesDescription:
      "Senior consulting for website migrations, landing pages, performance improvements, and accessibility remediation.",
    homeValue: "Senior delivery for high-impact web initiatives",
    homePoints: [
      "Website migrations",
      "New landing pages",
      "Performance improvements",
      "Accessibility remediation",
      "Governance across multiple brands and teams",
      "Development support",
      "CI/CD and platform modernization",
    ],
    homeCta: "View consulting service",
  },
  {
    title: "Website Compliance Audits & Checklists",
    href: "/services/website-compliance-audits",
    servicesDescription:
      "Independent compliance audit reports for teams that want to self-remediate. Covers privacy, security, accessibility, cookie inventory, and includes an implementation guide with templates.",
    homeValue:
      "Independent audits and reports for teams that want to self-remediate",
    homePoints: [
      "Website compliance audit report (privacy, security, accessibility)",
      "Detailed findings with remediation priorities",
      "Cookie and consent inventory report",
      "Privacy policy and legal checklist",
      "Accessibility conformance audit",
      "Implementation guide with templates",
      "2-week turnaround",
    ],
    homeCta: "View audit packages",
  },
  {
    title: "AI-Generated Static Websites",
    href: "/services/ai-generated-static-websites",
    servicesDescription:
      "Cost-effective static websites built with AI and Next.js, deployed to Vercel's free tier. Ideal for portfolios, landing pages, and small business sites.",
    homeValue:
      "Cost-effective static sites built with AI, deployed to Vercel's free tier",
    homePoints: [
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
    homeCta: "View AI website service",
  },
];

export function getServicesIndexCards() {
  return serviceDefinitions.map((service) => ({
    title: service.title,
    href: service.href,
    description: service.servicesDescription,
  }));
}

export function getHomeServiceTracks() {
  return serviceDefinitions.map((service) => ({
    title: service.title,
    value: service.homeValue,
    points: service.homePoints,
    cta: service.homeCta,
    href: service.href,
  }));
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
}

export function buildServicesBreadcrumbSchema() {
  const siteUrl = getSiteUrl();

  return {
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
    ],
  };
}

export function buildHomeProfessionalServiceSchema() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Web Growth Studio",
    url: siteUrl,
    description:
      "Professional web services with 7+ years supporting enterprise compliance implementations across multi-subsidiary organizations.",
    serviceType: serviceDefinitions.map((service) => service.title),
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Growth Studio Services",
      itemListElement: serviceDefinitions.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${siteUrl}${service.href}`,
        },
      })),
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
}

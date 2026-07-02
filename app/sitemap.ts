import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/services",
    "/services/website-privacy-compliance",
    "/services/website-care-plans",
    "/services/enterprise-web-consulting",
    "/services/productized-website-services",
    "/services/ai-generated-static-websites",
  ];

  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: index === 0 ? 1 : 0.8,
  }));
}

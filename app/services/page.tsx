import type { Metadata } from "next";
import {
  buildServicesBreadcrumbSchema,
  getServicesIndexCards,
} from "../../lib/structured-data";
import ServicesIndexContent from "./ServicesIndexContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional website services for privacy compliance, website care plans, enterprise consulting, and compliance audits.",
  alternates: {
    canonical: "/services",
  },
};

const services = getServicesIndexCards();

export default function ServicesIndexPage() {
  const breadcrumbSchema = buildServicesBreadcrumbSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesIndexContent
        breadcrumbSchema={breadcrumbSchema}
        services={services}
      />
    </>
  );
}

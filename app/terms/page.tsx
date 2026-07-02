import type { Metadata } from "next";
import LegalDocumentContent, {
  LegalMailtoLink,
} from "../components/LegalDocumentContent";

const BUSINESS_NAME = "Web Growth Studio";
const CONTACT_EMAIL = "hello@example.com";
const LAST_UPDATED = "June 29, 2026";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use and service terms for Web Growth Studio.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  const sections = [
    {
      paragraphs: [
        <>
          These Terms govern access to this website and the services provided by{" "}
          {BUSINESS_NAME}. By using this website, you agree to these Terms.
        </>,
      ],
    },
    {
      heading: "1. Use of This Website",
      paragraphs: [
        "Website content is provided for general informational purposes and may be updated at any time. Your use of this website does not create a client relationship.",
      ],
    },
    {
      heading: "2. Service Engagements",
      paragraphs: [
        "Services are provided only under signed proposals, statements of work, or master agreements. Scope, timelines, fees, and deliverables are defined in those documents.",
      ],
    },
    {
      heading: "3. No Legal Advice",
      paragraphs: [
        <>
          {BUSINESS_NAME} provides technical implementation services and does
          not provide legal advice. Clients should consult legal counsel for
          legal interpretation and regulatory advice.
        </>,
      ],
    },
    {
      heading: "4. Fees and Payment",
      paragraphs: [
        "Fees, billing schedule, and payment terms are specified in signed agreements. Late payment handling and any suspension rights are also governed by the applicable contract.",
      ],
    },
    {
      heading: "5. Client Responsibilities",
      bullets: [
        "Provide accurate information and timely approvals.",
        "Provide required system and tool access where needed.",
        "Maintain ownership or rights to content, assets, and data shared.",
      ],
    },
    {
      heading: "6. Intellectual Property",
      paragraphs: [
        "Unless otherwise agreed in writing, pre-existing materials and methodologies remain the property of their original owner. Ownership of project deliverables is determined by the signed contract.",
      ],
    },
    {
      heading: "7. Confidentiality",
      paragraphs: [
        "Each party agrees to protect confidential information disclosed during an engagement and use it only for authorized project purposes.",
      ],
    },
    {
      heading: "8. Warranties and Disclaimers",
      paragraphs: [
        'Except as expressly stated in a signed contract, services and website content are provided "as is" and "as available," without implied warranties.',
      ],
    },
    {
      heading: "9. Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by law, neither party is liable for indirect, consequential, or special damages. Any liability limits are governed by signed agreements.",
      ],
    },
    {
      heading: "10. Third-Party Services",
      paragraphs: [
        "Projects may involve third-party tools or platforms. Their use is subject to those providers&apos; own terms and policies.",
      ],
    },
    {
      heading: "11. Termination",
      paragraphs: [
        "Termination rights and obligations are set out in signed contracts, including payment, data handling, and transition requirements.",
      ],
    },
    {
      heading: "12. Governing Law",
      paragraphs: [
        "These website terms are governed by applicable laws in the jurisdiction specified in the relevant service agreement, unless local law requires otherwise.",
      ],
    },
    {
      heading: "13. Changes to These Terms",
      paragraphs: [
        "We may update these Terms from time to time. Changes are effective when posted on this page with a revised last updated date.",
      ],
    },
    {
      heading: "14. Contact",
      paragraphs: [
        <>
          Questions about these Terms can be sent to
          <LegalMailtoLink email={CONTACT_EMAIL} />.
        </>,
      ],
    },
  ];

  return (
    <LegalDocumentContent
      title="Terms"
      lastUpdated={LAST_UPDATED}
      sections={sections}
    />
  );
}

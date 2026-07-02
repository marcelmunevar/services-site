import type { Metadata } from "next";
import LegalDocumentContent, {
  LegalMailtoLink,
} from "../components/LegalDocumentContent";

const BUSINESS_NAME = "Web Growth Studio";
const CONTACT_EMAIL = "hello@example.com";
const LAST_UPDATED = "June 29, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Web Growth Studio website and service inquiries.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      paragraphs: [
        <>
          This Privacy Policy describes how {BUSINESS_NAME} collects, uses,
          stores, and shares personal information when you use this website,
          contact us, or engage our services.
        </>,
      ],
    },
    {
      heading: "1. Information We Collect",
      bullets: [
        "Contact information such as name, email address, phone number, company name, and job title.",
        "Inquiry and project details you choose to provide, including technical and business requirements.",
        "Usage and device data such as browser type, page activity, and general analytics data.",
        "Communications and records associated with service delivery and support.",
      ],
    },
    {
      heading: "2. How We Use Information",
      bullets: [
        "Respond to inquiries and provide service proposals.",
        "Deliver contracted services and project communications.",
        "Operate, improve, and secure our website and systems.",
        "Manage billing, legal, and operational obligations.",
      ],
    },
    {
      heading: "3. Legal Bases for Processing",
      paragraphs: [
        "Where applicable, we process personal information based on consent, contract performance, legal obligations, and legitimate business interests.",
      ],
    },
    {
      heading: "4. Cookies and Similar Technologies",
      paragraphs: [
        "We may use cookies and related technologies for functionality, analytics, and performance monitoring. You can manage preferences via Cookie Settings and your browser controls.",
      ],
    },
    {
      heading: "5. How We Share Information",
      paragraphs: [
        "We do not sell personal information. We may share data with:",
      ],
      bullets: [
        "Service providers supporting website and business operations.",
        "Professional advisers where needed for legal or accounting use.",
        "Authorities where disclosure is required by law.",
      ],
    },
    {
      heading: "6. Data Retention",
      paragraphs: [
        "We retain personal information only for as long as needed for the purposes described in this policy and to meet legal or contractual requirements.",
      ],
    },
    {
      heading: "7. Security",
      paragraphs: [
        "We use reasonable administrative, technical, and organizational safeguards to protect personal information, but no system is entirely secure.",
      ],
    },
    {
      heading: "8. International Transfers",
      paragraphs: [
        "Your information may be processed in countries outside your residence. Where required, we apply safeguards to support lawful transfers.",
      ],
    },
    {
      heading: "9. Your Rights",
      paragraphs: [
        "Depending on your location, you may have rights to access, correct, delete, restrict, or object to processing, and to request data portability.",
        <>
          To submit a privacy request, email
          <LegalMailtoLink email={CONTACT_EMAIL} />.
        </>,
      ],
    },
    {
      heading: "10. Children&apos;s Privacy",
      paragraphs: [
        "Our website and services are not directed to children, and we do not knowingly collect personal information from children.",
      ],
    },
    {
      heading: "11. Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy periodically. Changes become effective when posted on this page with a revised last updated date.",
      ],
    },
    {
      heading: "12. Contact",
      paragraphs: [
        <>
          For any privacy questions, contact
          <LegalMailtoLink email={CONTACT_EMAIL} />.
        </>,
      ],
    },
  ];

  return (
    <LegalDocumentContent
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      sections={sections}
    />
  );
}

import type { Metadata } from "next";
import LegalDocumentContent, {
  LegalMailtoLink,
} from "../components/LegalDocumentContent";

const BUSINESS_NAME = "Web Growth Studio";
const CONTACT_EMAIL = "privacy@marcelm.org";
const LAST_UPDATED = "July 2, 2026";

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
          This Privacy Policy describes how {BUSINESS_NAME} ("we," "us," or
          "our") collects, uses, stores, and shares personal information when
          you visit this website, submit an inquiry, or engage our services.
        </>,
      ],
    },
    {
      heading: "1. Information We Collect",
      bullets: [
        "Information you provide through our contact form, including your name, email address, company name (if provided), website URL (if provided), service interest, and any information you include in your message.",
        "Communications between you and us related to inquiries or services.",
        "Technical information such as your IP address, browser type, device information, pages visited, referring website, and interactions with this website collected through analytics technologies.",
      ],
    },
    {
      heading: "2. How We Use Information",
      bullets: [
        "Respond to inquiries and communicate about requested services.",
        "Prepare quotes, proposals, and project-related communications.",
        "Operate, maintain, improve, and secure this website.",
        "Analyze website traffic and visitor behavior to improve our website and services.",
        "Comply with legal obligations and enforce our legal rights.",
        "Send marketing or promotional communications where permitted by applicable law. You may opt out of marketing emails at any time.",
      ],
    },
    {
      heading: "3. Legal Bases for Processing",
      paragraphs: [
        "Where applicable, we process personal information based on your consent, the performance of a contract or requested services, compliance with legal obligations, and our legitimate interests in operating, improving, securing, and marketing our business.",
      ],
    },
    {
      heading: "4. Cookies and Similar Technologies",
      paragraphs: [
        "This website uses cookies and similar technologies to provide essential functionality and, with your consent where required by law, analytics and performance measurement. Cookie preferences are managed through our CookieYes consent banner, which allows you to accept or reject non-essential cookie categories.",
      ],
    },
    {
      heading: "5. Analytics",
      paragraphs: [
        "We use Google Analytics 4 and PostHog to understand how visitors use our website, measure website performance, identify usability improvements, and improve our services. These services may collect information such as your IP address, browser type, device information, pages visited, and interactions with the website. Analytics technologies are used only in accordance with your cookie preferences where required by applicable law.",
      ],
    },
    {
      heading: "6. How We Share Information",
      paragraphs: [
        "We do not sell your personal information. We may share personal information with:",
      ],
      bullets: [
        "Service providers that help us host this website, deliver emails, process inquiries, provide analytics, or support our business operations.",
        "Professional advisers such as legal or accounting professionals when necessary.",
        "Government authorities or other parties where disclosure is required by applicable law or legal process.",
        "A successor organization if our business is reorganized, sold, or transferred.",
      ],
    },
    {
      heading: "7. Data Retention",
      paragraphs: [
        "We retain personal information only for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.",
      ],
    },
    {
      heading: "8. Security",
      paragraphs: [
        "We implement reasonable administrative, technical, and organizational safeguards designed to protect personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      heading: "9. International Transfers",
      paragraphs: [
        "Your information may be processed or stored in countries outside your state or country of residence. Where required by applicable law, we implement appropriate safeguards for such transfers.",
      ],
    },
    {
      heading: "10. Your Privacy Rights",
      paragraphs: [
        "Depending on your location, you may have rights to access, correct, update, delete, or restrict the processing of your personal information, object to certain processing activities, request a copy of your information, or withdraw consent where processing is based on consent.",
        <>
          You may also unsubscribe from marketing emails at any time using the
          unsubscribe link included in those emails or by contacting{" "}
          <LegalMailtoLink email={CONTACT_EMAIL} />.
        </>,
        <>
          To submit a privacy request, contact{" "}
          <LegalMailtoLink email={CONTACT_EMAIL} />.
        </>,
      ],
    },
    {
      heading: "11. Children's Privacy",
      paragraphs: [
        "This website and our services are not directed to children under the age required by applicable law, and we do not knowingly collect personal information from children.",
      ],
    },
    {
      heading: "12. Changes to This Privacy Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or our services. The updated version will become effective when it is posted on this page together with a revised 'Last Updated' date.",
      ],
    },
    {
      heading: "13. Contact",
      paragraphs: [
        <>
          If you have questions about this Privacy Policy or would like to
          exercise your privacy rights, please contact{" "}
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

import type { Metadata } from "next";
import LegalDocumentContent, {
  LegalMailtoLink,
} from "../components/LegalDocumentContent";

const BUSINESS_NAME = "Web Growth Studio";
const CONTACT_EMAIL = "privacy@marcelm.org";
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
          These Terms of Service ("Terms") govern your access to and use of this
          website and any services provided by {BUSINESS_NAME}. By accessing or
          using this website, you agree to be bound by these Terms. If you do
          not agree, please do not use this website.
        </>,
      ],
    },
    {
      heading: "1. Use of This Website",
      paragraphs: [
        "This website is provided for informational and marketing purposes. The content on this website may be updated, modified, or removed at any time without notice.",
        "Your use of this website, including submitting a contact form, does not create a client relationship. A client relationship is established only through a separately signed written agreement.",
      ],
    },
    {
      heading: "2. Service Engagements",
      paragraphs: [
        "All consulting, development, compliance, accessibility, analytics, and related services are provided only under a separately signed proposal, statement of work, master services agreement, or similar written contract.",
        "Project scope, pricing, deliverables, timelines, payment terms, intellectual property ownership, warranties, and other project-specific terms are governed exclusively by the applicable signed agreement.",
        "We reserve the right to decline any project or inquiry at our sole discretion.",
      ],
    },
    {
      heading: "3. No Legal Advice",
      paragraphs: [
        <>
          {BUSINESS_NAME} provides technical consulting and implementation
          services only. Nothing on this website or provided during an
          engagement constitutes legal advice. Clients are solely responsible
          for obtaining legal advice regarding applicable laws, regulations, and
          compliance obligations.
        </>,
        "Recommendations and implementations are based on information available at the time of the engagement and do not guarantee compliance with any law, regulation, or industry standard.",
      ],
    },
    {
      heading: "4. Fees and Payment",
      paragraphs: [
        "Any pricing displayed on this website is for informational purposes only and does not constitute a binding offer.",
        "Project fees, payment schedules, deposits, refunds, and billing terms are determined solely by the applicable signed agreement.",
      ],
    },
    {
      heading: "5. Client Responsibilities",
      bullets: [
        "Provide accurate, complete, and timely information.",
        "Provide required credentials, approvals, and system access needed to perform the agreed services.",
        "Review deliverables and provide feedback within a reasonable timeframe.",
        "Ensure that any content, images, trademarks, software, or other materials provided to us may be lawfully used.",
        "Maintain appropriate backups of websites, applications, and business data unless otherwise agreed in writing.",
      ],
    },
    {
      heading: "6. Intellectual Property",
      paragraphs: [
        "Ownership of project deliverables is governed exclusively by the applicable signed agreement.",
        "Unless otherwise agreed in writing, we retain ownership of our pre-existing intellectual property, methodologies, reusable code, templates, libraries, tools, know-how, and general technical expertise developed independently of a specific client engagement.",
        "Nothing in these Terms transfers ownership of intellectual property except as expressly provided in a signed agreement.",
      ],
    },
    {
      heading: "7. Portfolio and Marketing",
      paragraphs: [
        "Unless otherwise agreed in writing, we may identify you as a client and display completed work, screenshots, project descriptions, and publicly available logos or trademarks as part of our portfolio or marketing materials.",
        "Clients may request in writing that specific work not be displayed, and we will honor reasonable requests.",
      ],
    },
    {
      heading: "8. Confidentiality",
      paragraphs: [
        "We will use reasonable efforts to protect confidential information shared during a project and will use such information only as necessary to perform the agreed services, unless disclosure is required by law or authorized by the client.",
      ],
    },
    {
      heading: "9. Warranties and Disclaimers",
      paragraphs: [
        'This website and all services are provided on an "as is" and "as available" basis unless otherwise expressly stated in a signed agreement.',
        "We make no warranties regarding uninterrupted availability, accuracy, completeness, or fitness for a particular purpose.",
        "We do not guarantee response times, project completion dates, website availability, or uninterrupted operation of any third-party service.",
      ],
    },
    {
      heading: "10. Third-Party Services",
      paragraphs: [
        "Projects may involve third-party software, hosting providers, analytics platforms, accessibility tools, consent management platforms, APIs, or other services.",
        "We are not responsible for the availability, security, pricing, functionality, outages, policy changes, or performance of third-party services. Their use is governed by the applicable third-party terms and privacy policies.",
      ],
    },
    {
      heading: "11. Artificial Intelligence",
      paragraphs: [
        "We may use artificial intelligence (AI) tools to improve efficiency during research, drafting, analysis, development, or other aspects of service delivery.",
        "Final deliverables are reviewed by a human prior to delivery. Clients remain responsible for reviewing deliverables for accuracy and suitability for their intended use.",
      ],
    },
    {
      heading: "12. Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, our total liability arising out of or relating to this website or any services shall not exceed the total amount actually paid by the client for the specific services giving rise to the claim.",
        "We shall not be liable for indirect, incidental, consequential, punitive, exemplary, or special damages, including loss of profits, revenue, business opportunities, goodwill, or data, even if advised of the possibility of such damages.",
      ],
    },
    {
      heading: "13. Governing Law",
      paragraphs: [
        "These Terms are governed by the laws of the State of Connecticut, without regard to its conflict of law principles.",
        "Any legal action relating to these Terms shall be brought exclusively in the state or federal courts located in Connecticut, unless applicable law requires otherwise.",
      ],
    },
    {
      heading: "14. Changes to These Terms",
      paragraphs: [
        "We may revise these Terms from time to time. Updated versions become effective immediately upon posting to this website together with a revised 'Last Updated' date. Continued use of the website constitutes acceptance of the revised Terms.",
      ],
    },
    {
      heading: "15. Contact",
      paragraphs: [
        <>
          Questions regarding these Terms may be sent to{" "}
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

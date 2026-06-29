import type { Metadata } from "next";

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
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-5 py-12 sm:px-8 lg:px-10">
      <h1 className="display-font text-4xl text-slate-950 sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="text-sm text-slate-600">Last updated: {LAST_UPDATED}</p>

      <section className="space-y-3 text-slate-700">
        <p>
          This Privacy Policy describes how {BUSINESS_NAME} collects, uses,
          stores, and shares personal information when you use this website,
          contact us, or engage our services.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          1. Information We Collect
        </h2>
        <ul className="dot-list space-y-2">
          <li>
            Contact information such as name, email address, phone number,
            company name, and job title.
          </li>
          <li>
            Inquiry and project details you choose to provide, including
            technical and business requirements.
          </li>
          <li>
            Usage and device data such as browser type, page activity, and
            general analytics data.
          </li>
          <li>
            Communications and records associated with service delivery and
            support.
          </li>
        </ul>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          2. How We Use Information
        </h2>
        <ul className="dot-list space-y-2">
          <li>Respond to inquiries and provide service proposals.</li>
          <li>Deliver contracted services and project communications.</li>
          <li>Operate, improve, and secure our website and systems.</li>
          <li>Manage billing, legal, and operational obligations.</li>
        </ul>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          3. Legal Bases for Processing
        </h2>
        <p>
          Where applicable, we process personal information based on consent,
          contract performance, legal obligations, and legitimate business
          interests.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          4. Cookies and Similar Technologies
        </h2>
        <p>
          We may use cookies and related technologies for functionality,
          analytics, and performance monitoring. You can manage preferences via
          Cookie Settings and your browser controls.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          5. How We Share Information
        </h2>
        <p>We do not sell personal information. We may share data with:</p>
        <ul className="dot-list space-y-2">
          <li>Service providers supporting website and business operations.</li>
          <li>
            Professional advisers where needed for legal or accounting use.
          </li>
          <li>Authorities where disclosure is required by law.</li>
        </ul>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          6. Data Retention
        </h2>
        <p>
          We retain personal information only for as long as needed for the
          purposes described in this policy and to meet legal or contractual
          requirements.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">7. Security</h2>
        <p>
          We use reasonable administrative, technical, and organizational
          safeguards to protect personal information, but no system is entirely
          secure.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          8. International Transfers
        </h2>
        <p>
          Your information may be processed in countries outside your residence.
          Where required, we apply safeguards to support lawful transfers.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">9. Your Rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct,
          delete, restrict, or object to processing, and to request data
          portability.
        </p>
        <p>
          To submit a privacy request, email
          <a
            className="ml-1 font-semibold text-slate-900 underline"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          10. Children&apos;s Privacy
        </h2>
        <p>
          Our website and services are not directed to children, and we do not
          knowingly collect personal information from children.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          11. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy periodically. Changes become
          effective when posted on this page with a revised last updated date.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">12. Contact</h2>
        <p>
          For any privacy questions, contact
          <a
            className="ml-1 font-semibold text-slate-900 underline"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </section>
    </main>
  );
}

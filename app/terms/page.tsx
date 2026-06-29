import type { Metadata } from "next";

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
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-5 py-12 sm:px-8 lg:px-10">
      <h1 className="display-font text-4xl text-slate-950 sm:text-5xl">
        Terms
      </h1>
      <p className="text-sm text-slate-600">Last updated: {LAST_UPDATED}</p>

      <section className="space-y-3 text-slate-700">
        <p>
          These Terms govern access to this website and the services provided by{" "}
          {BUSINESS_NAME}. By using this website, you agree to these Terms.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          1. Use of This Website
        </h2>
        <p>
          Website content is provided for general informational purposes and may
          be updated at any time. Your use of this website does not create a
          client relationship.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          2. Service Engagements
        </h2>
        <p>
          Services are provided only under signed proposals, statements of work,
          or master agreements. Scope, timelines, fees, and deliverables are
          defined in those documents.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          3. No Legal Advice
        </h2>
        <p>
          {BUSINESS_NAME} provides technical implementation services and does
          not provide legal advice. Clients should consult legal counsel for
          legal interpretation and regulatory advice.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          4. Fees and Payment
        </h2>
        <p>
          Fees, billing schedule, and payment terms are specified in signed
          agreements. Late payment handling and any suspension rights are also
          governed by the applicable contract.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          5. Client Responsibilities
        </h2>
        <ul className="dot-list space-y-2">
          <li>Provide accurate information and timely approvals.</li>
          <li>Provide required system and tool access where needed.</li>
          <li>
            Maintain ownership or rights to content, assets, and data shared.
          </li>
        </ul>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          6. Intellectual Property
        </h2>
        <p>
          Unless otherwise agreed in writing, pre-existing materials and
          methodologies remain the property of their original owner. Ownership
          of project deliverables is determined by the signed contract.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          7. Confidentiality
        </h2>
        <p>
          Each party agrees to protect confidential information disclosed during
          an engagement and use it only for authorized project purposes.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          8. Warranties and Disclaimers
        </h2>
        <p>
          Except as expressly stated in a signed contract, services and website
          content are provided "as is" and "as available," without implied
          warranties.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          9. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by law, neither party is liable for
          indirect, consequential, or special damages. Any liability limits are
          governed by signed agreements.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          10. Third-Party Services
        </h2>
        <p>
          Projects may involve third-party tools or platforms. Their use is
          subject to those providers&apos; own terms and policies.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          11. Termination
        </h2>
        <p>
          Termination rights and obligations are set out in signed contracts,
          including payment, data handling, and transition requirements.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          12. Governing Law
        </h2>
        <p>
          These website terms are governed by applicable laws in the
          jurisdiction specified in the relevant service agreement, unless local
          law requires otherwise.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">
          13. Changes to These Terms
        </h2>
        <p>
          We may update these Terms from time to time. Changes are effective
          when posted on this page with a revised last updated date.
        </p>
      </section>

      <section className="space-y-3 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-950">14. Contact</h2>
        <p>
          Questions about these Terms can be sent to
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

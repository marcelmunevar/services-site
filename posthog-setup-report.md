# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Web Growth Studio services site. PostHog is initialized client-side via `instrumentation-client.ts` (Next.js 15.3+ pattern), with a reverse proxy configured in `next.config.ts` to route events through `/ingest`. A `TrackableCTA` client component was created to capture explicit click events from the marketing site's key CTAs across all server-component pages. Ten events covering the full conversion funnel — from hero engagement through service discovery to email inquiry — are now instrumented.

| Event name                    | Description                                                        | File                                               |
| ----------------------------- | ------------------------------------------------------------------ | -------------------------------------------------- |
| `contact_email_clicked`       | User clicks the Email for Inquiries CTA on the home page           | `app/page.tsx`                                     |
| `explore_services_clicked`    | User clicks the Explore Services CTA in the home page hero         | `app/page.tsx`                                     |
| `book_discovery_call_clicked` | User clicks the Book a Discovery Call CTA in the home page hero    | `app/page.tsx`                                     |
| `service_card_cta_clicked`    | User clicks a View service CTA on a service card on the home page  | `app/page.tsx`                                     |
| `contact_email_clicked`       | User clicks the email link on the Contact Us page                  | `app/contact-us/page.tsx`                          |
| `service_card_clicked`        | User clicks a View service details link on the services index page | `app/services/page.tsx`                            |
| `consultation_cta_clicked`    | User clicks the privacy compliance consultation CTA                | `app/services/website-privacy-compliance/page.tsx` |
| `consultation_cta_clicked`    | User clicks the care plans consultation CTA                        | `app/services/website-care-plans/page.tsx`         |
| `consultation_cta_clicked`    | User clicks the enterprise consulting contact CTA                  | `app/services/enterprise-web-consulting/page.tsx`  |
| `consultation_cta_clicked`    | User clicks the productized service request CTA                    | `app/services/website-compliance-audits/page.tsx`  |

## Next steps

We've built insights and a dashboard to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) Dashboard](https://us.posthog.com/project/491078/dashboard/1776145)
- [Contact Email Clicks (30 days)](https://us.posthog.com/project/491078/insights/80lR5mWj)
- [Consultation CTA Clicks by Service](https://us.posthog.com/project/491078/insights/DPxrj2mt)
- [Hero CTA Clicks (30 days)](https://us.posthog.com/project/491078/insights/r1yzkvPl)
- [Service Card Clicks by Source](https://us.posthog.com/project/491078/insights/iV5MzGet)
- [All Conversion CTA Clicks (30 days)](https://us.posthog.com/project/491078/insights/ungy0faR)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add the exact PostHog env var names (`NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`, `NEXT_PUBLIC_POSTHOG_HOST`) to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

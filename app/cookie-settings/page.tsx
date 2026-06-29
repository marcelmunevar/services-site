import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Settings",
  description:
    "Manage cookie preferences and consent settings for Web Growth Studio.",
  alternates: {
    canonical: "/cookie-settings",
  },
};

export default function CookieSettingsPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-5 py-12 sm:px-8 lg:px-10">
      <h1 className="display-font text-4xl text-slate-950 sm:text-5xl">
        Cookie Settings
      </h1>
      <p className="max-w-2xl text-slate-700">
        Update your consent preferences for analytics and marketing cookies.
      </p>

      <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_16px_55px_rgba(2,8,20,0.08)]">
        <h2 className="text-xl font-semibold text-slate-950">
          Manage Preferences
        </h2>
        <p className="mt-2 text-slate-700">
          If your consent manager is enabled on this site, use the cookie banner
          settings control to update your preferences.
        </p>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import ContactUsContent from "./ContactUsContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Web Growth Studio for website privacy, care plans, consulting, and compliance audit inquiries.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsPage() {
  return <ContactUsContent />;
}

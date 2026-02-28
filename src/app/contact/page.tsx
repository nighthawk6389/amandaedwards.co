import type { Metadata } from "next";
import { generateFAQStructuredData } from "@/lib/metadata";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with children's book author Amanda Edwards — for school visits, bulk orders, press inquiries, or just to say hi!",
  openGraph: {
    title: "Contact Amanda Edwards | Children's Book Author",
    description:
      "Reach out about school visits, bulk orders, press inquiries, or fan mail!",
  },
};

const faqs = [
  {
    question: "What is the typical response time for inquiries?",
    answer:
      "Amanda typically responds to all inquiries within 2-3 business days. For time-sensitive requests like upcoming school visits, please mention the date in your message.",
  },
  {
    question: "Can I order signed copies of Amanda Edwards' books?",
    answer:
      "Yes! Amanda offers signed and personalized copies. Just mention it in your message through the contact form, and she'll arrange everything for you.",
  },
  {
    question: "Does Amanda Edwards do virtual school visits?",
    answer:
      "Absolutely! Amanda offers virtual author visits via Zoom for schools, libraries, and book clubs anywhere in the world. Virtual visits include interactive read-alouds, Q&A sessions, and writing workshops.",
  },
  {
    question: "How do I book Amanda Edwards for a school visit or event?",
    answer:
      "You can book a visit by filling out the contact form on this page and selecting 'School Visit' as the reason. Amanda will follow up with availability, pricing, and program details.",
  },
  {
    question: "Are bulk orders available for classrooms and libraries?",
    answer:
      "Yes! Discounted bulk orders are available for schools, libraries, and bookshops. Contact Amanda directly through the form and select 'Bulk Order' to get a custom quote.",
  },
];

export default function ContactPage() {
  const faqStructuredData = generateFAQStructuredData(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <ContactPageClient />
    </>
  );
}

import type { Metadata } from "next";
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

export default function ContactPage() {
  return <ContactPageClient />;
}

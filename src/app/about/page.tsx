import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Amanda",
  description:
    "Meet Amanda Edwards — children's book author, storyteller, and firm believer that every child deserves stories that make them feel seen.",
  openGraph: {
    title: "About Amanda Edwards | Children's Book Author",
    description:
      "Meet Amanda Edwards — the storyteller behind your child's favorite bedtime books.",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}

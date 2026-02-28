import type { Metadata } from "next";
import { ActivitiesPageClient } from "./ActivitiesPageClient";

export const metadata: Metadata = {
  title: "Fun Stuff & Activities",
  description:
    "Free coloring pages, drawing tutorials, creative writing prompts, and more — all inspired by Amanda Edwards' children's books!",
  openGraph: {
    title: "Fun Stuff & Activities | Amanda Edwards",
    description:
      "Free printable activities, coloring pages, and creative fun for kids!",
  },
};

export default function ActivitiesPage() {
  return <ActivitiesPageClient />;
}

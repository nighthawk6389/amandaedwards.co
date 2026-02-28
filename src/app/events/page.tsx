import type { Metadata } from "next";
import { EventsPageClient } from "./EventsPageClient";

export const metadata: Metadata = {
  title: "Events & School Visits",
  description:
    "Book children's book author Amanda Edwards for school visits, library events, book festivals, and virtual read-alouds. Interactive programs for Pre-K through 3rd grade.",
  openGraph: {
    title: "Events & School Visits | Amanda Edwards",
    description:
      "Book Amanda Edwards for school visits, library events, and interactive read-alouds!",
  },
};

export default function EventsPage() {
  return <EventsPageClient />;
}

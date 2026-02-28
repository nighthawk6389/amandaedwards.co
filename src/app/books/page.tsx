import type { Metadata } from "next";
import { books } from "@/data/books";
import { BooksPageClient } from "./BooksPageClient";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Explore Amanda Edwards' collection of children's books — magical stories about courage, kindness, imagination, and celebrating what makes every child unique.",
  openGraph: {
    title: "Books | Amanda Edwards",
    description:
      "Explore Amanda Edwards' collection of children's books — magical stories for little dreamers.",
  },
};

export default function BooksPage() {
  return <BooksPageClient books={books} />;
}

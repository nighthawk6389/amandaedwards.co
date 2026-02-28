import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { books, getBookBySlug } from "@/data/books";
import { generateBookStructuredData } from "@/lib/metadata";
import { BookDetailClient } from "./BookDetailClient";

interface BookPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return {};

  return {
    title: book.title,
    description: book.description,
    openGraph: {
      title: `${book.title} | Amanda Edwards`,
      description: book.description,
      type: "book",
    },
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  const structuredData = generateBookStructuredData(book);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BookDetailClient book={book} />
    </>
  );
}

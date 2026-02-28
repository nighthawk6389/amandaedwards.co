import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { books, getBookBySlug } from "@/data/books";
import { generateBookStructuredData, generateBreadcrumbStructuredData } from "@/lib/metadata";
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
  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "https://amandaedwards.co" },
    { name: "Books", url: "https://amandaedwards.co/books" },
    { name: book.title, url: `https://amandaedwards.co/books/${book.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <BookDetailClient book={book} />
    </>
  );
}

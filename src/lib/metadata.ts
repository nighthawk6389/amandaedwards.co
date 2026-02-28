import type { Metadata } from "next";

const siteUrl = "https://amandaedwards.co";
const siteName = "Amanda Edwards | Children's Book Author";
const siteDescription =
  "Amanda Edwards is an independent children's book author creating magical, heartwarming stories that spark imagination and celebrate what makes every child unique.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | Amanda Edwards`,
  },
  description: siteDescription,
  keywords: [
    "children's books",
    "kids books",
    "picture books",
    "bedtime stories",
    "children's author",
    "Amanda Edwards",
    "independent author",
    "kids activities",
    "read aloud",
    "storytime",
    "children's literature",
    "social emotional learning",
    "books for kids",
  ],
  authors: [{ name: "Amanda Edwards", url: siteUrl }],
  creator: "Amanda Edwards",
  publisher: "Amanda Edwards",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Amanda Edwards - Children's Book Author",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export function generateBookStructuredData(book: {
  title: string;
  description: string;
  isbn: string;
  publishDate: string;
  pages: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    description: book.description,
    isbn: book.isbn,
    datePublished: book.publishDate,
    numberOfPages: book.pages,
    author: {
      "@type": "Person",
      name: "Amanda Edwards",
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: "Amanda Edwards",
    },
    bookFormat: "https://schema.org/Hardcover",
    audience: {
      "@type": "PeopleAudience",
      suggestedMinAge: 2,
      suggestedMaxAge: 8,
    },
  };
}

export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Amanda Edwards",
  url: siteUrl,
  jobTitle: "Children's Book Author",
  description: siteDescription,
  sameAs: [
    "https://instagram.com/amandaedwardsbooks",
    "https://facebook.com/amandaedwardsbooks",
    "https://tiktok.com/@amandaedwardsbooks",
  ],
};

export function generateBreadcrumbStructuredData(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQStructuredData(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  author: {
    "@type": "Person",
    name: "Amanda Edwards",
  },
};

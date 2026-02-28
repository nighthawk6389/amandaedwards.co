import type { Metadata } from "next";
import { blogPosts } from "@/data/blogPosts";
import { BlogPageClient } from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Parenting tips, behind-the-scenes stories, reading advice, and creative inspiration from children's book author Amanda Edwards.",
  openGraph: {
    title: "Blog | Amanda Edwards",
    description:
      "Parenting tips, behind-the-scenes stories, and creative inspiration.",
  },
};

export default function BlogPage() {
  return <BlogPageClient posts={blogPosts} />;
}

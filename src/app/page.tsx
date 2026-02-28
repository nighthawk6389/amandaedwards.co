import { HomePageClient } from "./HomePageClient";
import { books } from "@/data/books";
import { blogPosts } from "@/data/blogPosts";

export default function Home() {
  return <HomePageClient books={books} blogPosts={blogPosts.slice(0, 3)} />;
}

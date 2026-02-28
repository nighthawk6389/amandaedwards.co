export interface Book {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription: string;
  sampleExcerpt?: string;
  ageRange: string;
  pages: number;
  isbn: string;
  publishDate: string;
  coverColor: string;
  accentColor: string;
  emoji: string;
  amazonLink: string;
  barnesNobleLink?: string;
  bookshopLink?: string;
  reviews: {
    text: string;
    author: string;
    source?: string;
    stars: number;
  }[];
  themes: string[];
}

export const books: Book[] = [
  {
    slug: "whiskers-and-the-moonlight-garden",
    title: "Whiskers and the Moonlight Garden",
    subtitle: "A Bedtime Adventure",
    description: "Join Whiskers the curious kitten on a magical nighttime journey through a garden where flowers glow and fireflies tell stories.",
    longDescription: "When the moon rises over Willow Lane, something magical happens in Mrs. Henderson's garden. Whiskers, a tiny orange kitten with enormous curious eyes, discovers a secret world of glowing flowers, dancing fireflies, and friendly creatures who only come out at night. Through gentle rhymes and enchanting illustrations, children learn about bravery, friendship, and the beauty of the nighttime world. Perfect for bedtime reading, this story wraps little ones in a cozy blanket of wonder as they drift off to sleep.",
    sampleExcerpt: "When the moon peeks up and the stars say hi,\nLittle Whiskers stretches with a curious eye.\nThrough the garden gate where the moonbeams play,\nA secret world wakes at the end of the day.\n\nThe roses glow pink, the daisies glow blue,\nAnd the fireflies whisper, \"We've been waiting for you!\"",
    ageRange: "2-5",
    pages: 32,
    isbn: "978-1-234567-01-0",
    publishDate: "2024-03-15",
    coverColor: "#1a1a4e",
    accentColor: "#FFE66D",
    emoji: "🌙",
    amazonLink: "#",
    barnesNobleLink: "#",
    bookshopLink: "#",
    reviews: [
      { text: "A truly magical bedtime story that my daughter asks for every single night!", author: "Sarah M.", source: "Amazon", stars: 5 },
      { text: "The illustrations are breathtaking and the rhymes are so soothing.", author: "Parent Reader", source: "Goodreads", stars: 5 },
      { text: "Amanda Edwards has created something truly special here.", author: "BookBug Reviews", stars: 5 },
    ],
    themes: ["bedtime", "courage", "nature", "friendship"],
  },
  {
    slug: "the-big-feelings-cloud",
    title: "The Big Feelings Cloud",
    subtitle: "Understanding Your Emotions",
    description: "A gentle story about a little cloud named Cumulus who experiences big feelings and learns that every emotion is like a different kind of weather.",
    longDescription: "High above the town of Sunnyside, there lives a little cloud named Cumulus who feels everything very deeply. Some days Cumulus is bright and fluffy, spreading sunshine everywhere. Other days, Cumulus turns gray and can't help but rain. Through Cumulus's journey of self-discovery, children learn to identify, name, and embrace their emotions. With the help of wise Wind, cheerful Rainbow, and steady Mountain, Cumulus learns that all feelings are natural — and that even the stormiest days lead to the most beautiful sunsets.",
    sampleExcerpt: "Some days, Cumulus felt like sunshine —\nbright and warm and light.\nHe'd float across the big blue sky\nand everything felt right.\n\nBut other days, a heaviness\nwould fill him to the brim.\nHis fluffy white would turn to gray,\nand rain would fall from him.",
    ageRange: "3-7",
    pages: 36,
    isbn: "978-1-234567-02-7",
    publishDate: "2024-08-01",
    coverColor: "#87CEEB",
    accentColor: "#FF6B6B",
    emoji: "☁️",
    amazonLink: "#",
    barnesNobleLink: "#",
    bookshopLink: "#",
    reviews: [
      { text: "This book has been an incredible tool for helping my son understand his emotions.", author: "Jessica T.", source: "Amazon", stars: 5 },
      { text: "Every preschool classroom needs this book. Beautifully done.", author: "Ms. Rodriguez", source: "Educator Review", stars: 5 },
      { text: "My kids now talk about their 'weather' when they're feeling something big.", author: "David K.", source: "Goodreads", stars: 5 },
    ],
    themes: ["emotions", "social-emotional learning", "self-awareness", "weather"],
  },
  {
    slug: "penelope-and-the-patchwork-dragon",
    title: "Penelope and the Patchwork Dragon",
    subtitle: "A Story About Being Different",
    description: "Penelope finds an egg in her grandmother's sewing room, and what hatches is the most wonderfully unusual dragon anyone has ever seen.",
    longDescription: "Penelope loves visiting her grandmother's cozy sewing room, where scraps of fabric from a lifetime of quilting fill every corner. One day, she discovers a strange, warm egg nestled among the fabric scraps. When it hatches, out tumbles a tiny dragon made entirely of patchwork — with a calico wing, a polka-dot tail, and button eyes. Patches (as Penelope names her) is different from every dragon in every storybook. But as Penelope and Patches go on adventures together, they discover that being different is actually a superpower. A heartwarming story about celebrating uniqueness and the unbreakable bond between a girl and her most unusual friend.",
    sampleExcerpt: "The egg cracked once. The egg cracked twice.\nThen out tumbled something not quite... precise.\nA wing made of calico, a tail of polka dots,\nTwo button eyes and a belly full of knots.\n\n\"You're not like any dragon I've ever seen,\" said Penelope.\n\"I know,\" said the little dragon. \"Isn't it wonderful?\"",
    ageRange: "4-8",
    pages: 40,
    isbn: "978-1-234567-03-4",
    publishDate: "2025-01-20",
    coverColor: "#A78BFA",
    accentColor: "#4ECDC4",
    emoji: "🐉",
    amazonLink: "#",
    barnesNobleLink: "#",
    bookshopLink: "#",
    reviews: [
      { text: "My daughter carries this book everywhere. She loves Patches more than any toy!", author: "Maria L.", source: "Amazon", stars: 5 },
      { text: "A beautiful message about embracing differences. The patchwork art style is genius.", author: "Storytime Reviews", stars: 5 },
      { text: "Amanda Edwards does it again — storytelling at its finest.", author: "KidLit Weekly", stars: 5 },
    ],
    themes: ["uniqueness", "creativity", "friendship", "self-acceptance"],
  },
  {
    slug: "captain-tumbleweed-saves-the-day",
    title: "Captain Tumbleweed Saves the Day",
    subtitle: "A Desert Adventure",
    description: "A tiny tumbleweed with big dreams rolls through the desert on a mission to prove that even the smallest among us can be heroes.",
    longDescription: "In the vast, sun-baked desert of Dusty Gulch, everyone knows that tumbleweeds are just... well, tumbleweeds. They roll around without purpose, bumping into things and getting stuck in fences. But one little tumbleweed named Captain Tumbleweed knows he's meant for more. When a baby roadrunner gets lost in a sandstorm, Captain Tumbleweed bounces, rolls, and tumbles into action. Along the way, he teams up with a sarcastic cactus, a philosophical lizard, and a very dramatic vulture. Full of humor and heart, this rollicking desert adventure teaches kids that heroes come in all shapes and sizes — even round, prickly ones.",
    sampleExcerpt: "\"You're a tumbleweed,\" said the cactus. \"All you do is roll.\"\n\"That's not all I do,\" said Captain Tumbleweed. \"I also bounce.\"\nThe cactus was not impressed.\n\n\"And besides,\" said Captain Tumbleweed, puffing up his prickly chest,\n\"somebody has to save that baby roadrunner.\nAnd that somebody... is me.\"",
    ageRange: "4-8",
    pages: 40,
    isbn: "978-1-234567-04-1",
    publishDate: "2025-06-01",
    coverColor: "#F5D84A",
    accentColor: "#FF6B6B",
    emoji: "🌵",
    amazonLink: "#",
    barnesNobleLink: "#",
    bookshopLink: "#",
    reviews: [
      { text: "The funniest children's book we've read in years. My kids are obsessed!", author: "Tom R.", source: "Amazon", stars: 5 },
      { text: "Captain Tumbleweed is the hero we didn't know we needed.", author: "PB&J Book Club", stars: 5 },
    ],
    themes: ["courage", "humor", "perseverance", "friendship"],
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((book) => book.slug === slug);
}

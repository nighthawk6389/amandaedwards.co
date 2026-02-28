export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  emoji: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-reading-aloud-matters",
    title: "Why Reading Aloud to Your Kids Matters More Than You Think",
    excerpt: "Science shows that reading aloud isn't just about the story — it's building brains, bonds, and a lifelong love of books.",
    content: `
Reading aloud to children is one of the most powerful things a parent or caregiver can do. Research consistently shows that children who are read to from an early age develop stronger vocabularies, better comprehension skills, and a deeper love of learning.

## The Science Behind Storytime

When you read aloud, you're doing so much more than telling a story. You're:

- **Building neural pathways** that support language development
- **Expanding vocabulary** — kids who are read to regularly hear 1.4 million more words by age 5
- **Strengthening emotional bonds** through shared attention and physical closeness
- **Developing empathy** as children learn to see the world through different characters' eyes

## Tips for Making the Most of Read-Aloud Time

1. **Use silly voices.** Kids love it, and it makes the story come alive!
2. **Ask questions.** "What do you think happens next?" builds critical thinking.
3. **Let them choose the book.** Even if it's the same one for the 47th time.
4. **Make it cozy.** Blankets, pillows, and snuggle time make reading feel special.
5. **Don't worry about finishing.** It's okay to stop, discuss, and explore tangents.

## My Personal Reading Ritual

Every night before bed, my family gathers in what we call the "Story Nest" — a pile of pillows and fairy lights in the corner of the living room. It's become the most cherished part of our day.

Reading aloud isn't a chore. It's a gift — one that keeps giving long after the last page is turned.
    `,
    date: "2025-11-15",
    readTime: "4 min read",
    category: "Parenting Tips",
    emoji: "📖",
    tags: ["reading", "parenting", "child-development", "literacy"],
  },
  {
    slug: "behind-the-scenes-patchwork-dragon",
    title: "Behind the Scenes: Creating Penelope and the Patchwork Dragon",
    excerpt: "From a scrap of fabric to a finished book — here's how Patches came to life.",
    content: `
Every book has an origin story, and Penelope and the Patchwork Dragon started in the most unexpected place: my grandmother's sewing room.

## The Spark

I was visiting my grandmother — a quilter for over 60 years — and noticed how her fabric scraps seemed to tell stories of their own. A piece from my mother's childhood dress. A square from a baby blanket. Each scrap held a memory.

That's when I thought: what if something magical could be made from all those memories?

## The Writing Process

The first draft was terrible. I'll be honest! Patches was originally a patchwork bear, and the story was way too long. It took about 15 drafts (and a lot of chocolate) to find the right balance of whimsy and heart.

## The Message

At its core, this is a book about being different. Patches doesn't look like any dragon in any storybook, and that's exactly what makes her special. I wanted every child who feels "different" to see themselves in Patches and know that their uniqueness is their superpower.

## Fun Facts

- Patches' polka-dot tail was inspired by my favorite pair of socks
- The story was originally called "The Quilted Creature"
- I cried writing the ending (in a good way!)

Thank you for all the love you've shown Patches. She's stitched together from scraps, but she's held together by love.
    `,
    date: "2025-09-20",
    readTime: "5 min read",
    category: "Behind the Scenes",
    emoji: "✨",
    tags: ["writing-process", "patchwork-dragon", "behind-the-scenes", "creativity"],
  },
  {
    slug: "5-ways-to-spark-imagination",
    title: "5 Simple Ways to Spark Your Child's Imagination Every Day",
    excerpt: "You don't need fancy toys or screen time. Here are five everyday ways to ignite creativity in your little ones.",
    content: `
Imagination is like a muscle — the more you use it, the stronger it gets. And the best part? You don't need anything special to exercise it.

## 1. The "What If" Game

Turn everyday moments into adventures. "What if that puddle was a portal to another world?" "What if our cat was secretly a wizard?" This simple game teaches kids to think creatively and see wonder in the ordinary.

## 2. Storytelling Walks

On your next walk, take turns adding to a story. "Once upon a time, there was a squirrel who..." Let each person add a sentence. You'll be amazed at where the story goes!

## 3. The Cardboard Box

A cardboard box is the greatest toy ever invented. It's a spaceship, a castle, a submarine, a time machine. Give a kid a box and get out of the way.

## 4. Art Without Rules

Put out paper, crayons, glue, and random craft supplies. No instructions. No "right way." Just let them create. The goal isn't a masterpiece — it's the process.

## 5. Read, Read, Read

Books are imagination fuel. The more stories kids absorb, the more material their imaginations have to work with. Read widely, read wildly, and read together.

## The Magic Ingredient

The secret to all of these? **Your presence.** When you sit on the floor and play pretend, when you add a silly sentence to the story, when you ooh and ahh over their cardboard creation — you're telling your child that their imagination matters.

And that's the most powerful message of all.
    `,
    date: "2025-07-10",
    readTime: "3 min read",
    category: "Parenting Tips",
    emoji: "💡",
    tags: ["imagination", "creativity", "parenting", "activities", "play"],
  },
  {
    slug: "my-journey-to-becoming-an-author",
    title: "My Journey to Becoming a Children's Book Author",
    excerpt: "From scribbling stories on napkins to publishing my first book — it was messy, magical, and absolutely worth it.",
    content: `
People often ask me, "When did you know you wanted to write children's books?" The honest answer? I didn't. Not for a long time.

## The Early Days

I've always been a storyteller. As a kid, I made up elaborate tales for my stuffed animals. In college, I studied English but thought "real" writing meant novels for adults. Children's books? Those were "simple." (Spoiler: they are NOT simple.)

## The Turning Point

It happened when I was reading to my niece. She looked up at me with those enormous eyes and said, "Read it again!" And I realized — the power to make a child feel something with just 500 words and a few pictures? That's not simple. That's extraordinary.

## The Hard Part

Let me be real: getting published as an indie author is tough. There are rejections, self-doubt, and a whole lot of learning. I had to figure out:

- How to write for children (so different from writing for adults!)
- How to find and work with illustrators
- Self-publishing, marketing, distribution
- How to keep going when it felt impossible

## What Keeps Me Going

Every single message from a parent who says "my child loves your book" makes it all worth it. Every drawing a kid sends me of Whiskers or Patches or Captain Tumbleweed. Every time I hear "read it again!"

To anyone out there with a story inside them: write it. The world needs your voice.
    `,
    date: "2025-05-01",
    readTime: "4 min read",
    category: "Author Life",
    emoji: "🌟",
    tags: ["author-journey", "writing", "indie-publishing", "inspiration"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

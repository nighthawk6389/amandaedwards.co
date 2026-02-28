# Children's Book Author Website Design Research Report

> Research conducted to inform the redesign of amandaedwards.co

---

## Current Project State

The site at amandaedwards.co is a fresh Next.js 16 project with Tailwind CSS 4 and Framer Motion already installed. It currently contains only the default Next.js boilerplate. This is a clean slate, which is ideal for implementing the findings below.

---

## Table of Contents

1. [Best Children's Book Author Websites — What Works](#1-best-childrens-book-author-websites--what-works)
2. [Modern Design Trends for Children's Book Author Websites (2025-2026)](#2-modern-design-trends-for-childrens-book-author-websites-2025-2026)
3. [SEO Best Practices for Author Websites (2025-2026)](#3-seo-best-practices-for-author-websites-2025-2026)
4. [Creative Web Design Trends for Children's Content](#4-creative-web-design-trends-for-childrens-content)
5. [Conversion & Sales Optimization](#5-conversion--sales-optimization)
6. [Summary of Actionable Recommendations](#6-summary-of-actionable-recommendations)
7. [Sources](#sources)

---

## 1. Best Children's Book Author Websites — What Works

### Standout Examples and Why They Work

#### Mo Willems (mowillems.com)

- Incorporates his brand identity directly into the UX — his FAQ is phrased "Did you Mo that..." turning navigation into wordplay
- Character-driven design with the Pigeon featured throughout
- Interactive activities section ("Get Busy" menu) with how-to-draw instructionals, games, and downloadable activities
- Video content ("Vid-E-Mos") that keeps kids engaged
- A dedicated "Mo!" page with fun author facts presented in his signature style

#### Oliver Jeffers (oliverjeffers.com)

- Minimalist, gallery-like design that lets artwork take center stage
- Dynamic homepage video that changes based on visitor location and time of day
- Project-specific styling: each project gets its own color palette and layout that echoes its illustrations
- Custom CMS built on Craft CMS for flexible content management
- Creates a genuine sense of discovery and exploration — the site feels like an experience, not a brochure
- Designed by agency Eyekiller with a "flexible theming system" for brand consistency across diverse work

#### Eric Carle (eric-carle.com)

- Uses his trademark watercolor illustration style as the design language for the entire site
- Calming, muted watercolor palette rather than bright primary colors — distinctive and brand-consistent
- Activities section with mazes, coloring pages, and teacher/parent resources
- Easy to navigate without being overwhelming

#### Peter Brown (peterbrownstudio.com)

- Audience-segmented entry: on arrival, visitors choose "Teacher," "Kid," or "Grown-up," tailoring the experience
- "Create and Learn" section with activities and videos
- This audience-routing pattern is especially smart for children's book authors who serve multiple distinct audiences

#### Jarrett Lerner (jarrettlerner.com)

- Sketchbook-inspired design aesthetic — subtle colors that feel hand-drawn
- Heavy focus on free activities: coloring pages, how-to-draw tutorials, book-related activities
- WordPress-based, demonstrating you don't need custom development for a great children's author site

#### Kylie Howarth

- Minimal homepage with just one illustration and simple text
- Proves that less can be more — a single strong illustration can be more impactful than a busy page

### Key Patterns Across Successful Sites

| Pattern | Frequency | Impact |
|---------|-----------|--------|
| Free downloadable activities | Nearly universal | Drives repeat visits, builds goodwill with teachers/parents |
| Author personality in UX copy | Most top sites | Creates emotional connection and brand differentiation |
| Character/illustration-forward design | Universal | Instantly communicates genre and brand |
| School visit booking page | Very common | Critical revenue stream for children's authors |
| Video content (trailers, read-alouds) | Growing rapidly | Multi-sensory engagement, classroom utility |
| Audience-aware navigation | Emerging | Serves multiple visitor types (kids, parents, teachers) |

---

## 2. Modern Design Trends for Children's Book Author Websites (2025-2026)

### Visual Design Trends

#### "Imperfect by Design" / Anti-Perfection Aesthetic

The dominant 2026 trend is a creative rebellion against polished, AI-generated sameness. Hand-drawn elements, organic scribbles, intentionally imperfect patterns, and collage-style compositions are all gaining prominence. This is perfectly aligned with children's book illustration aesthetics and gives independent authors a natural advantage over corporate-feeling sites.

#### Kid Core Aesthetic

This trend embraces childlike joy and nostalgia with bright, saturated colors, playful shapes, and tactile textures. AI tools are making this style faster to create and easier to scale, but the best implementations feel genuinely handmade.

#### Dopamine Design / Bold Saturated Palettes

Bright, saturated color palettes are back. Neon gradients, high-contrast pairings, and playful hues are replacing the muted, minimal tones that dominated earlier years. This is driven by Y2K nostalgia and a desire for visual joy.

#### Organic Shapes and Anti-Grid Layouts

After years of strict grids, design is softening. Flowing lines, rounded corners, soft gradients, and organic shapes make digital experiences feel more natural and approachable — ideal for a children's book brand.

#### Playful Typography

- Oversized sans-serifs and bubbly/puffy letterforms
- Wavy, distorted, bubble-like fonts for display text
- Handwritten scripts and loopy cursives for personality
- **Important:** keep body text readable (sans-serif, 16-18px minimum)

#### Tactile and Sensory Textures

Puffy, soft, squishy textures and hyper-realistic objects with playful distortions are trending. These create a sense of physical presence in a digital space.

### Interactive/UX Trends

#### Micro-Interactions

Small interactive elements that create delight without slowing the page — hover effects that wiggle a character, buttons that bounce on click, subtle parallax on illustrations. These make the site memorable.

#### Scroll-Based Storytelling (Motion Narrative)

Intentional, thoughtful movement that transforms static pages into living experiences. For a children's book author, this could mean illustrations that animate as you scroll through the page, echoing the page-turning experience of a physical book.

#### Playful Cursors

Custom cursor designs that change based on page section or hover state. A small element that creates significant impact on the interactive experience.

#### Card Play Design

Rounded-corner cards that tilt, overlap, and animate. Increasingly interactive and animated, moving beyond static grid layouts.

#### Strategic White Space

Clean design with thoughtful typography creates a peaceful reading experience. The contrast between playful elements and breathing room is what makes modern children's sites feel sophisticated rather than chaotic.

---

## 3. SEO Best Practices for Author Websites (2025-2026)

### Critical Technical SEO

#### Schema Markup (JSON-LD) — Non-Negotiable

Implement these schema types:

- **Person** schema for the author profile (name, image, sameAs links to social profiles, description)
- **Book** schema for each book (name, author, isbn, bookFormat, numberOfPages, datePublished, publisher, image)
- **BookSeries** if applicable
- **Article** schema for blog posts (with author, datePublished, dateModified)
- **Event** schema for school visits and appearances
- **BreadcrumbList** for site navigation
- **WebSite** with SearchAction for sitelinks

JSON-LD is the only format Google recommends. Keep it in `<script type="application/ld+json">` tags, separate from HTML.

#### Core Web Vitals

- **Largest Contentful Paint (LCP):** under 2.5 seconds
- **Interaction to Next Paint (INP):** under 200ms — this replaced First Input Delay in March 2024 and measures ALL interactions, not just the first
- **Cumulative Layout Shift (CLS):** under 0.1

Only 47-54% of websites currently meet all thresholds — meeting them is a competitive advantage. Next.js Image component and font optimization help significantly here.

#### Mobile-First Design

62.5% of global website traffic is mobile. Ensure touch targets are at least 48x48px, fonts are readable without zooming, and images are responsive.

### Content & Authority SEO

#### E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

- Create a detailed author profile page with qualifications, publishing history, awards, and links to external publications
- Include verifiable real-world experience (school visits, speaking engagements, reviews)
- Link author profiles via `sameAs` to LinkedIn, Instagram, Goodreads, Amazon author page
- In 2026, Google penalizes AI-generated content that lacks a real human signature — authentic author voice is a ranking advantage

#### Topical Authority

Build content clusters around your niche. For a children's book author, this might include:

- Blog posts about your creative process
- Reading guides and activity suggestions
- Posts about literacy, reading with children, or your book's themes
- Behind-the-scenes content about illustration or writing

#### Answer Engine Optimization (AEO)

97% of AI Overview citations come from pages already ranking in the top 20. Structure content with clear headings, direct answers to common questions, and FAQ sections to be cited by ChatGPT, Perplexity, Google AI Overviews.

#### Backlinks

Quality over quantity. A few links from reputable sources (publisher websites, school library blogs, literary review sites, .edu domains) are worth more than hundreds of low-quality links.

### Practical SEO Checklist for the Site

- [ ] Unique, descriptive title tags per page (under 60 characters)
- [ ] Meta descriptions with emotional hooks (under 155 characters)
- [ ] Semantic HTML (proper heading hierarchy h1 > h2 > h3)
- [ ] Alt text on all images (descriptive, not keyword-stuffed)
- [ ] Internal linking between related pages
- [ ] XML sitemap submitted to Google Search Console
- [ ] robots.txt properly configured
- [ ] SSL certificate (mandatory in 2026)
- [ ] Open Graph and Twitter Card meta tags for social sharing
- [ ] Canonical URLs to prevent duplicate content

---

## 4. Creative Web Design Trends for Children's Content

### Color Palette Recommendations

#### Warm, Playful Palette (Recommended for Independent Children's Book Author)

| Swatch | Hex | Use |
|--------|-----|-----|
| Sunshine Yellow | `#FFEB3B` | Accent, CTAs, highlights |
| Sky Blue | `#81D4FA` | Headers, backgrounds |
| Bubblegum Pink | `#FF4081` | Accent, hover states |
| Grass Green | `#76FF03` | Success states, nature elements |
| Tangerine Orange | `#FF7043` | Buttons, key CTAs |
| Warm White | `#FFF8F0` | Page backgrounds |
| Soft Charcoal | `#2D2D2D` | Body text |

#### Alternative: Soft/Watercolor Palette (Eric Carle-inspired)

| Swatch | Hex | Use |
|--------|-----|-----|
| Dusty Rose | `#E8A0BF` | Primary accent |
| Sage Green | `#A8D5BA` | Secondary accent |
| Soft Gold | `#F5D491` | Highlights |
| Sky Wash | `#B8D4E3` | Backgrounds |
| Warm Cream | `#FFF5E6` | Page base |
| Deep Navy | `#2C3E50` | Text, headers |

#### Palette Construction Guidelines

- Pick 2-3 primary colors that reflect your personality and story tone
- Add 1-2 neutral/background colors
- Include 1 "secret thread" accent color used consistently (like a bright magenta) to tie the brand together
- For younger audiences (picture books), go bolder; for middle grade, slightly more sophisticated/muted
- Test all color combinations for WCAG contrast ratios (minimum 3:1 for UI elements, 4.5:1 for body text)

### Layout Patterns That Work

#### Homepage Structure (Recommended Order)

1. **Hero Section:** Full-width illustration or animated scene + author name + one-line tagline + primary CTA ("Explore My Books" or "Get the Latest Book")
2. **Featured/Latest Book:** Large book cover (3D rendering or clean flat graphic), 1-3 sentence emotional pitch, age range, buy button
3. **About Snippet:** 2-3 sentences + author photo, warm and personal, link to full About page
4. **Books Grid:** Card layout showing all titles with covers, hover effects revealing brief descriptions
5. **Activities/Free Resources Teaser:** Preview of downloadable content with CTA to activities page
6. **Events/School Visits:** Upcoming appearances, "Book a Visit" CTA
7. **Email Signup:** Lead magnet offer (free coloring pages, bonus story, activity pack)
8. **Social Proof:** Reviews, press mentions, awards badges
9. **Footer:** Social links, contact info, newsletter signup repeat, copyright

#### Navigation (4-6 items maximum)

```
Home | Books | About | Activities | Events | Contact
```

- Use clear, direct labels — not cute/clever ones (teachers and librarians need to find information quickly)
- Consider a prominent "Book a Visit" or "Buy the Book" button in the header

### Interactive Elements Worth Implementing

#### High-Impact, Achievable with Framer Motion (already installed)

- Page transition animations (fade, slide)
- Scroll-triggered illustration reveals
- Book cover hover effects (slight tilt, shadow depth change, scale)
- Animated hero section with floating illustration elements
- Smooth accordion animations for FAQ or book details
- Parallax scrolling on key illustration sections
- Animated counters for social proof ("50,000+ books sold")

#### Medium-Effort, High-Reward

- "Peek inside" book preview with page-flip animation
- Character that follows cursor or reacts to mouse position
- Easter eggs hidden throughout the site (hidden characters, clickable elements with surprises)
- Loading animations featuring book characters

#### For Future Consideration

- Downloadable coloring pages (PDF generation)
- Interactive quiz ("Which character are you?")
- Read-aloud audio player with animated illustrations
- AR features for book covers (emerging trend)

### Accessibility Requirements (WCAG 2.1 AA)

Playful design must not sacrifice accessibility:

- Minimum 4.5:1 contrast ratio for body text, 3:1 for large text and UI elements
- All animations must respect `prefers-reduced-motion` media query
- Decorative fonts only for headlines; body text in readable sans-serif (16px minimum)
- All images need descriptive alt text
- Keyboard navigation must work for all interactive elements
- Moving/auto-playing content needs pause/stop controls
- Color must not be the only way to convey information (use patterns, shapes, or text as well)
- Logical heading structure for screen readers

---

## 5. Conversion & Sales Optimization

### Email List Building (Highest ROI Strategy for Authors)

#### Lead Magnets That Work for Children's Book Authors

- Free coloring pages or activity sheets from the books
- Bonus short story or bonus chapter
- Printable bookmarks featuring book characters
- "Reading Guide" for parents/teachers
- Behind-the-scenes illustration process PDF
- Early access to new book announcements

#### Email Signup Placement

- Exit-intent popup (not aggressive — one-time, dismissible)
- Inline within blog posts
- Dedicated section on homepage (between content blocks, not hidden in footer)
- End of every blog post
- Dedicated landing page for each lead magnet

**Target:** Open rates above 40% are achievable with segmented, personalized lists (vs. generic blast emails).

### Direct Sales Strategy

- Consider Shopify integration or similar for selling signed copies, bundles, and merchandise (up to 90% royalty vs. 70% on Amazon)
- Include Amazon/bookshop.org buy links for standard purchases
- Social commerce integration (Instagram Shops, Facebook Shops)
- Bundle offers (book + activity pack, book + signed bookplate)

### Page-Level Conversion Elements

- Every book page needs a clear, prominent "Buy Now" button above the fold
- Include multiple purchase options (Amazon, Bookshop.org, indie bookstores, signed copies)
- Social proof near purchase buttons (review stars, award badges, "50,000+ copies sold")
- Urgency elements where genuine ("Pre-order now," "Limited signed editions")

---

## 6. Summary of Actionable Recommendations

### Must-Haves (Priority 1)

- Illustration-forward hero section that immediately communicates "children's book author"
- Clean, 4-6 item navigation with direct labels
- Individual book pages with covers, descriptions, age ranges, and buy links
- Author bio page with personality, photos, and credentials
- Email signup with compelling lead magnet (free activity/coloring pages)
- Mobile-responsive design optimized for Core Web Vitals
- JSON-LD schema markup for Person, Book, and WebSite types
- SSL, sitemap, proper meta tags, and Open Graph tags

### Should-Haves (Priority 2)

- Activities/Resources page with downloadable content
- School Visits/Events page with booking CTA
- Blog for topical authority and SEO
- Scroll-triggered animations and micro-interactions (leverage Framer Motion)
- Press/Media Kit page
- Social proof section (reviews, awards, press mentions)

### Nice-to-Haves (Priority 3)

- Audience-segmented entry (like Peter Brown's kid/teacher/grown-up routing)
- Dynamic content that changes by time of day (like Oliver Jeffers)
- Easter eggs and hidden interactive elements
- Book preview with page-flip animation
- Interactive quiz or game
- AR integration for book covers

---

## Sources

- Jin & Co — 10 Tips for a Standout Children's Author Website
- Rocket Expansion — 28 Children's Author and Illustrator Websites That Delight
- Rocket Expansion — Top 20 Author Websites Every Author Must See (2026)
- 99designs — 30+ Best Book Web Design Ideas 2026
- Outbox Online — Children's Book Author Website Design: For Kids, but Not Really
- Site Builder Report — 29 Author Websites That Will Make You Jealous
- Eevi Jones — Best Website Builder For Children's Book Authors
- Meira Media — Homepage Checklist for Children's Book Authors in 2026
- Swoon Worthy Designs — Author Website Design Trends 2025
- Eyekiller — Oliver Jeffers Website Case Study
- Oliver Jeffers Official Website
- Peter Brown Studio
- Jarrett Lerner
- Picture Book Brain — Best Children's Author Websites
- Guided Web Design — Author Website Layout Ideas
- Honey Design Co — Create a Fun Children's Book Author Website
- Printivity — How to Choose the Perfect Children's Book Color Palette
- Hasty Book List — Creating a Color Palette for Your Author Brand
- Tullip Studio — The Power of Author Branding in Children's Literature
- Colorany — 31 Children's Book Color Palettes
- Boston Institute of Analytics — SEO Best Practices 2026
- First Page Sage — SEO Best Practices 2026
- Svitla Systems — SEO Best Practices 2026
- Content Whale — 10 Best SEO Practices 2026
- WeVenture — 5 SEO Trends You Can't Ignore in 2026
- Marketer Milk — 8 Top SEO Trends 2026
- Automateed — How to Add Schema Markup for Authors
- Positional — Author Schema Markup & SEO
- Digital Applied — Structured Data SEO 2026
- Figma — Top Web Design Trends 2026
- Canva — Design Trends 2026: Imperfect by Design
- Kittl — 10 Graphic Design Trends 2026
- Adobe — Design Trends 2026
- UX Pilot — 14 Web Design Trends 2026
- Elementor — Web Design Trends 2026
- Framer — 7 Emerging Web Design Trends
- DGolden Conlin — Marketing Your Book in 2026
- Book Marketing Bestsellers — Top 4 Book Marketing Strategies 2026
- Inkfluence AI — How to Market an Ebook 2026
- Made Live — Prioritizing Accessibility in Children's Book Design
- WCAG.com — Resources for Designers
- accessiBe — Inclusive Design Best Practices

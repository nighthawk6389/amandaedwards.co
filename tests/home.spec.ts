import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("hero section displays with headline, description, and CTAs", async ({
    page,
  }) => {
    // Headline
    await expect(
      page.getByRole("heading", { name: /Magical Stories for Little Dreamers/i })
    ).toBeVisible();

    // Description text
    await expect(
      page.getByText(/I'm Amanda Edwards, and I write children's books/i)
    ).toBeVisible();

    // CTAs
    await expect(
      page.getByRole("link", { name: "Explore My Books" })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Meet Amanda" })
    ).toBeVisible();
  });

  test("Explore My Books button links to /books", async ({ page }) => {
    await page.getByRole("link", { name: "Explore My Books" }).click();
    await page.waitForURL("**/books");
    expect(page.url()).toContain("/books");
  });

  test("Meet Amanda button links to /about", async ({ page }) => {
    await page.getByRole("link", { name: "Meet Amanda" }).click();
    await page.waitForURL("**/about");
    expect(page.url()).toContain("/about");
  });

  test("featured books section shows all 4 book cards", async ({ page }) => {
    // Section heading
    await expect(
      page.getByRole("heading", { name: "Featured Books" })
    ).toBeVisible();

    // All 4 book titles
    const bookTitles = [
      "Whiskers and the Moonlight Garden",
      "The Big Feelings Cloud",
      "Penelope and the Patchwork Dragon",
      "Captain Tumbleweed Saves the Day",
    ];

    for (const title of bookTitles) {
      await expect(page.getByText(title).first()).toBeVisible();
    }
  });

  test("book cards link to their individual detail pages", async ({
    page,
  }) => {
    const bookSlugs = [
      {
        title: "Whiskers and the Moonlight Garden",
        slug: "whiskers-and-the-moonlight-garden",
      },
      { title: "The Big Feelings Cloud", slug: "the-big-feelings-cloud" },
      {
        title: "Penelope and the Patchwork Dragon",
        slug: "penelope-and-the-patchwork-dragon",
      },
      {
        title: "Captain Tumbleweed Saves the Day",
        slug: "captain-tumbleweed-saves-the-day",
      },
    ];

    for (const book of bookSlugs) {
      // Find the link wrapping the book card
      const bookLink = page
        .locator(`a[href="/books/${book.slug}"]`)
        .first();
      await expect(bookLink).toBeVisible();
    }
  });

  test("about preview section renders", async ({ page }) => {
    await expect(
      page.getByText("About the Author")
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Stories Born from Imagination/i })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /Read My Story/i })
    ).toBeVisible();
  });

  test("reviews section shows testimonials", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "What Readers Say" })
    ).toBeVisible();

    // Check for review text
    await expect(
      page.getByText(/Amanda's books have become the highlight/i)
    ).toBeVisible();
    await expect(
      page.getByText(/My students beg me to read these books/i)
    ).toBeVisible();
    await expect(
      page.getByText(/Stories that make kids feel seen/i)
    ).toBeVisible();

    // Check for reviewer names
    await expect(page.getByText("Jessica T.")).toBeVisible();
    await expect(page.getByText("Ms. Rodriguez")).toBeVisible();
    await expect(page.getByText("BookBug Reviews")).toBeVisible();
  });

  test("activities teaser section renders with 4 activity categories", async ({
    page,
  }) => {
    await expect(
      page.getByRole("heading", { name: /Free Fun for Kids/i })
    ).toBeVisible();

    const categories = [
      "Coloring Pages",
      "Drawing Tutorials",
      "Craft Activities",
      "Writing Prompts",
    ];

    for (const category of categories) {
      await expect(page.getByText(category).first()).toBeVisible();
    }
  });

  test("blog preview shows 3 posts", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "From the Blog" })
    ).toBeVisible();

    // The first 3 blog posts should be visible
    const postTitles = [
      "Why Reading Aloud to Your Kids Matters More Than You Think",
      "Behind the Scenes: Creating Penelope and the Patchwork Dragon",
      "5 Simple Ways to Spark Your Child's Imagination Every Day",
    ];

    for (const title of postTitles) {
      await expect(page.getByText(title).first()).toBeVisible();
    }
  });

  test("newsletter signup form is present and submits", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /Join the Story Club/i }).first()
    ).toBeVisible();

    // Find the standalone newsletter form (not footer)
    const newsletterForm = page
      .locator("section")
      .filter({ hasText: "Join the Story Club" })
      .first()
      .locator("form");

    // Fill in email
    await newsletterForm
      .locator('input[type="email"]')
      .fill("test@example.com");

    // Submit form
    await newsletterForm.locator('button[type="submit"]').click();

    // Should show success message
    await expect(
      page.getByText(/You're in! Welcome to the Story Club/i).first()
    ).toBeVisible();
  });
});

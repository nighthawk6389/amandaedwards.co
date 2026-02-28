import { test, expect } from "@playwright/test";

test.describe("Books Page", () => {
  test("books catalog page renders all 4 books", async ({ page }) => {
    await page.goto("/books");

    await expect(
      page.getByRole("heading", { name: "My Books" })
    ).toBeVisible();

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

  test("each book card shows title, description, age range, themes, and star rating", async ({
    page,
  }) => {
    await page.goto("/books");

    // Check the first book card for all expected elements
    const firstBookCard = page.locator('a[href="/books/whiskers-and-the-moonlight-garden"]').first();
    await expect(firstBookCard).toBeVisible();

    // Title
    await expect(
      firstBookCard.getByText("Whiskers and the Moonlight Garden")
    ).toBeVisible();

    // Description
    await expect(
      firstBookCard.getByText(/curious kitten on a magical nighttime/i)
    ).toBeVisible();

    // Age range
    await expect(firstBookCard.getByText("Ages 2-5")).toBeVisible();

    // Themes
    await expect(firstBookCard.getByText("bedtime")).toBeVisible();
    await expect(firstBookCard.getByText("courage")).toBeVisible();

    // Star rating (5 stars shown as filled star characters)
    await expect(firstBookCard.getByText("★★★★★")).toBeVisible();
  });

  test("clicking a book navigates to its detail page", async ({ page }) => {
    await page.goto("/books");

    await page
      .locator('a[href="/books/the-big-feelings-cloud"]')
      .first()
      .click();
    await page.waitForURL("**/books/the-big-feelings-cloud");
    expect(page.url()).toContain("/books/the-big-feelings-cloud");
  });

  test.describe("Book Detail Page", () => {
    test("shows title, description, emoji cover, age range, page count, year, themes, buy buttons, and reviews", async ({
      page,
    }) => {
      await page.goto("/books/whiskers-and-the-moonlight-garden");

      // Title (h1)
      await expect(
        page.getByRole("heading", {
          name: "Whiskers and the Moonlight Garden",
          level: 1,
        })
      ).toBeVisible();

      // Subtitle
      await expect(page.getByText("A Bedtime Adventure")).toBeVisible();

      // Long description
      await expect(
        page.getByText(/When the moon rises over Willow Lane/i)
      ).toBeVisible();

      // Emoji cover
      await expect(page.locator("text=🌙").first()).toBeVisible();

      // Age range
      await expect(page.getByText("Ages 2-5").first()).toBeVisible();

      // Page count
      await expect(page.getByText("32")).toBeVisible();
      await expect(page.getByText("Pages")).toBeVisible();

      // Year (2024)
      await expect(page.getByText("2024")).toBeVisible();

      // Themes
      await expect(page.getByText("bedtime").first()).toBeVisible();
      await expect(page.getByText("courage").first()).toBeVisible();
      await expect(page.getByText("nature").first()).toBeVisible();
      await expect(page.getByText("friendship").first()).toBeVisible();

      // Buy buttons
      await expect(
        page.getByRole("link", { name: /Buy on Amazon/i })
      ).toBeVisible();
      await expect(
        page.getByRole("link", { name: /Barnes & Noble/i })
      ).toBeVisible();
      await expect(
        page.getByRole("link", { name: /Bookshop\.org/i })
      ).toBeVisible();

      // Reviews section
      await expect(
        page.getByRole("heading", { name: "What Readers Say" })
      ).toBeVisible();
      await expect(
        page.getByText(/truly magical bedtime story/i)
      ).toBeVisible();
    });

    test("breadcrumb navigation works on detail pages", async ({ page }) => {
      await page.goto("/books/the-big-feelings-cloud");

      // Breadcrumb should show Books > The Big Feelings Cloud
      const breadcrumb = page.locator("nav").first();
      await expect(breadcrumb.getByText("Books")).toBeVisible();
      await expect(
        breadcrumb.getByText("The Big Feelings Cloud")
      ).toBeVisible();

      // Click Books breadcrumb link
      await breadcrumb.getByRole("link", { name: "Books" }).click();
      await page.waitForURL("**/books");
      expect(page.url()).toContain("/books");
    });
  });

  test("bulk orders CTA links to contact page", async ({ page }) => {
    await page.goto("/books");

    await expect(
      page.getByRole("heading", { name: /Schools, Libraries/i })
    ).toBeVisible();

    await page.getByRole("link", { name: /Get in Touch/i }).click();
    await page.waitForURL("**/contact");
    expect(page.url()).toContain("/contact");
  });
});

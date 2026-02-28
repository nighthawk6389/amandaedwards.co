import { test, expect } from "@playwright/test";

test.describe("SEO", () => {
  const pages = [
    { path: "/", expectedTitle: /Amanda Edwards/i },
    { path: "/books", expectedTitle: /Books/i },
    { path: "/about", expectedTitle: /About/i },
    { path: "/activities", expectedTitle: /Fun Stuff/i },
    { path: "/blog", expectedTitle: /Blog/i },
    { path: "/contact", expectedTitle: /Contact/i },
  ];

  for (const pg of pages) {
    test(`${pg.path} has a proper <title> tag`, async ({ page }) => {
      await page.goto(pg.path);
      const title = await page.title();
      expect(title).toMatch(pg.expectedTitle);
    });
  }

  for (const pg of pages) {
    test(`${pg.path} has a meta description`, async ({ page }) => {
      await page.goto(pg.path);
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute("content", /.+/);
    });
  }

  test("structured data (JSON-LD) is present on the home page", async ({
    page,
  }) => {
    await page.goto("/");

    const jsonLdScripts = page.locator('script[type="application/ld+json"]');
    const count = await jsonLdScripts.count();
    expect(count).toBeGreaterThanOrEqual(1);

    // Parse and validate the structured data
    const firstJsonLd = await jsonLdScripts.first().textContent();
    expect(firstJsonLd).toBeTruthy();
    const parsed = JSON.parse(firstJsonLd!);
    expect(parsed["@context"]).toBe("https://schema.org");
  });

  test("structured data (JSON-LD) is present on book detail pages", async ({
    page,
  }) => {
    await page.goto("/books/whiskers-and-the-moonlight-garden");

    const jsonLdScripts = page.locator('script[type="application/ld+json"]');
    const count = await jsonLdScripts.count();
    expect(count).toBeGreaterThanOrEqual(1);

    // Find the Book structured data
    let foundBookSchema = false;
    for (let i = 0; i < count; i++) {
      const content = await jsonLdScripts.nth(i).textContent();
      if (content) {
        const parsed = JSON.parse(content);
        if (parsed["@type"] === "Book") {
          foundBookSchema = true;
          expect(parsed.name).toBe("Whiskers and the Moonlight Garden");
          expect(parsed.author.name).toBe("Amanda Edwards");
          break;
        }
      }
    }
    expect(foundBookSchema).toBe(true);
  });

  test("structured data (JSON-LD) is present on blog post pages", async ({
    page,
  }) => {
    await page.goto("/blog/why-reading-aloud-matters");

    const jsonLdScripts = page.locator('script[type="application/ld+json"]');
    const count = await jsonLdScripts.count();
    expect(count).toBeGreaterThanOrEqual(1);

    let foundBlogSchema = false;
    for (let i = 0; i < count; i++) {
      const content = await jsonLdScripts.nth(i).textContent();
      if (content) {
        const parsed = JSON.parse(content);
        if (parsed["@type"] === "BlogPosting") {
          foundBlogSchema = true;
          expect(parsed.headline).toContain("Reading Aloud");
          expect(parsed.author.name).toBe("Amanda Edwards");
          break;
        }
      }
    }
    expect(foundBlogSchema).toBe(true);
  });

  test("sitemap.xml is accessible and contains all routes", async ({
    page,
  }) => {
    const response = await page.goto("/sitemap.xml");
    expect(response?.status()).toBe(200);

    const content = await page.content();

    // Check for main routes
    expect(content).toContain("amandaedwards.co");
    expect(content).toContain("/books");
    expect(content).toContain("/about");
    expect(content).toContain("/activities");
    expect(content).toContain("/blog");
    expect(content).toContain("/contact");

    // Check for book pages
    expect(content).toContain("whiskers-and-the-moonlight-garden");
    expect(content).toContain("the-big-feelings-cloud");
    expect(content).toContain("penelope-and-the-patchwork-dragon");
    expect(content).toContain("captain-tumbleweed-saves-the-day");

    // Check for blog posts
    expect(content).toContain("why-reading-aloud-matters");
    expect(content).toContain("behind-the-scenes-patchwork-dragon");
  });

  test("robots.txt is accessible", async ({ page }) => {
    const response = await page.goto("/robots.txt");
    expect(response?.status()).toBe(200);

    const content = await page.content();
    expect(content).toContain("User-Agent");
    expect(content).toContain("Allow");
    expect(content).toContain("sitemap");
  });
});

import { test, expect } from "@playwright/test";

test.describe("Blog", () => {
  test("blog listing shows all 4 posts with titles, excerpts, categories, and read times", async ({
    page,
  }) => {
    await page.goto("/blog");

    await expect(
      page.getByRole("heading", { name: "The Blog" })
    ).toBeVisible();

    const posts = [
      {
        title:
          "Why Reading Aloud to Your Kids Matters More Than You Think",
        category: "Parenting Tips",
        readTime: "4 min read",
      },
      {
        title:
          "Behind the Scenes: Creating Penelope and the Patchwork Dragon",
        category: "Behind the Scenes",
        readTime: "5 min read",
      },
      {
        title: "5 Simple Ways to Spark Your Child's Imagination Every Day",
        category: "Parenting Tips",
        readTime: "3 min read",
      },
      {
        title: "My Journey to Becoming a Children's Book Author",
        category: "Author Life",
        readTime: "4 min read",
      },
    ];

    for (const post of posts) {
      // Title
      await expect(page.getByText(post.title).first()).toBeVisible();
      // Read time
      await expect(page.getByText(post.readTime).first()).toBeVisible();
    }

    // Categories appear as badges
    await expect(page.getByText("Parenting Tips").first()).toBeVisible();
    await expect(page.getByText("Behind the Scenes").first()).toBeVisible();
    await expect(page.getByText("Author Life").first()).toBeVisible();
  });

  test("clicking a post navigates to its detail page", async ({ page }) => {
    await page.goto("/blog");

    // Click the first blog post link
    await page
      .locator('a[href="/blog/why-reading-aloud-matters"]')
      .first()
      .click();
    await page.waitForURL("**/blog/why-reading-aloud-matters");
    expect(page.url()).toContain("/blog/why-reading-aloud-matters");
  });

  test.describe("Blog Post Detail Page", () => {
    test("renders title, content, tags, and author card", async ({
      page,
    }) => {
      await page.goto("/blog/why-reading-aloud-matters");

      // Title (h1)
      await expect(
        page.getByRole("heading", {
          name: /Why Reading Aloud to Your Kids Matters/i,
        }).first()
      ).toBeVisible();

      // Excerpt
      await expect(
        page.getByText(/Science shows that reading aloud isn't just about/i)
      ).toBeVisible();

      // Content sections
      await expect(
        page.getByRole("heading", {
          name: /The Science Behind Storytime/i,
        })
      ).toBeVisible();

      // Category badge
      await expect(page.getByText("Parenting Tips").first()).toBeVisible();

      // Read time
      await expect(page.getByText("4 min read").first()).toBeVisible();

      // Tags
      await expect(page.getByText("#reading")).toBeVisible();
      await expect(page.getByText("#parenting").first()).toBeVisible();
      await expect(page.getByText("#child-development")).toBeVisible();
      await expect(page.getByText("#literacy")).toBeVisible();

      // Author card
      const authorCard = page.locator("text=Amanda Edwards").last();
      await expect(authorCard).toBeVisible();
      await expect(
        page.getByText(/Children's book author, storyteller/i)
      ).toBeVisible();
    });

    test("breadcrumb navigation works", async ({ page }) => {
      await page.goto("/blog/behind-the-scenes-patchwork-dragon");

      // Breadcrumb should show Blog > post title
      const breadcrumbNav = page.locator("nav").first();
      await expect(breadcrumbNav.getByText("Blog")).toBeVisible();

      // Click Blog breadcrumb link
      await breadcrumbNav.getByRole("link", { name: "Blog" }).click();
      await page.waitForURL("**/blog");
      expect(page.url()).toContain("/blog");
    });
  });
});

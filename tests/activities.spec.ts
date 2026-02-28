import { test, expect } from "@playwright/test";

test.describe("Activities Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/activities");
  });

  test("page renders with all 6 activity cards", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Fun Stuff!" })
    ).toBeVisible();

    const activityTitles = [
      "Whiskers Coloring Pages",
      "Draw Your Own Cloud Character",
      "Patchwork Dragon Craft",
      "Desert Adventure Maze",
      "My Feelings Weather Report",
      "Story Starter Cards",
    ];

    for (const title of activityTitles) {
      await expect(
        page.getByRole("heading", { name: title })
      ).toBeVisible();
    }
  });

  test("each activity shows title, description, type badge, and Download Free button", async ({
    page,
  }) => {
    // Check the first activity has all the required elements
    // Whiskers Coloring Pages
    await expect(
      page.getByRole("heading", { name: "Whiskers Coloring Pages" })
    ).toBeVisible();
    await expect(
      page.getByText(/Color in Whiskers the kitten/i)
    ).toBeVisible();

    // Type badge
    await expect(page.getByText("Coloring Pages").first()).toBeVisible();

    // Download Free buttons (one per activity card)
    const downloadButtons = page.getByText("Download Free");
    await expect(downloadButtons).toHaveCount(6);

    // Check type badges for each activity
    const types = [
      "Coloring Pages",
      "Drawing Tutorial",
      "Craft Activity",
      "Puzzle",
      "Social-Emotional",
      "Writing Prompts",
    ];

    for (const type of types) {
      await expect(page.getByText(type).first()).toBeVisible();
    }
  });

  test("category filter buttons render", async ({ page }) => {
    const categories = [
      "All",
      "Coloring Pages",
      "Drawing Tutorial",
      "Craft Activity",
      "Puzzle",
      "Writing Prompts",
    ];

    for (const category of categories) {
      await expect(
        page
          .locator("button")
          .filter({ hasText: category })
          .first()
      ).toBeVisible();
    }
  });

  test("teacher and parent info cards render", async ({ page }) => {
    // For Teachers card
    await expect(
      page.getByRole("heading", { name: "For Teachers" })
    ).toBeVisible();
    await expect(
      page.getByText(/aligned with early learning standards/i)
    ).toBeVisible();
    await expect(
      page.getByText(/Request a classroom kit/i)
    ).toBeVisible();

    // For Parents card
    await expect(
      page.getByRole("heading", { name: "For Parents" })
    ).toBeVisible();
    await expect(
      page.getByText(/perfect for rainy days/i)
    ).toBeVisible();
    await expect(page.getByText(/More activity ideas/i)).toBeVisible();
  });
});

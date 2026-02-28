import { test, expect } from "@playwright/test";

test.describe("About Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/about");
  });

  test("author bio renders with photo placeholder and description", async ({
    page,
  }) => {
    // Heading
    await expect(
      page.getByRole("heading", {
        name: /I'm Amanda, and I write books for little dreamers/i,
      })
    ).toBeVisible();

    // Photo placeholder area
    await expect(page.getByText("Amanda Edwards").first()).toBeVisible();
    await expect(
      page.getByText("Author, Dreamer, Professional Coffee Drinker")
    ).toBeVisible();

    // Bio text
    await expect(
      page.getByText(
        /independent children's book author who believes/i
      )
    ).toBeVisible();
  });

  test("mission section renders", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "My Mission" })
    ).toBeVisible();

    await expect(
      page.getByText(/I write books that help children see themselves/i)
    ).toBeVisible();

    await expect(
      page.getByText(/You belong here, just as you are/i)
    ).toBeVisible();
  });

  test("timeline shows all 4 milestones (2022-2025)", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "The Story So Far" })
    ).toBeVisible();

    const milestones = [
      { year: "2022", title: "The Dream Begins" },
      { year: "2023", title: "First Draft Done!" },
      { year: "2024", title: "Published!" },
      { year: "2025", title: "Growing the Dream" },
    ];

    for (const milestone of milestones) {
      await expect(page.getByText(milestone.year).first()).toBeVisible();
      await expect(
        page.getByRole("heading", { name: milestone.title })
      ).toBeVisible();
    }
  });

  test("fun facts grid shows 6 items", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Fun Facts About Me" })
    ).toBeVisible();

    const facts = [
      "Coffee consumed while writing",
      "Childhood books I still own",
      "Cat named after a literary character",
      "Favorite writing spot",
      "Drafts before a book is",
      "Snack of choice while writing",
    ];

    for (const fact of facts) {
      await expect(page.getByText(new RegExp(fact, "i"))).toBeVisible();
    }
  });

  test("CTA buttons link to /contact and /books", async ({ page }) => {
    // Book a Visit -> /contact
    const contactLink = page.getByRole("link", { name: /Book a Visit/i });
    await expect(contactLink).toBeVisible();
    await expect(contactLink).toHaveAttribute("href", "/contact");

    // See My Books -> /books
    const booksLink = page.getByRole("link", { name: /See My Books/i });
    await expect(booksLink).toBeVisible();
    await expect(booksLink).toHaveAttribute("href", "/books");
  });
});

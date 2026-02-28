import { test, expect } from "@playwright/test";

test.describe("Navigation & Links", () => {
  test.describe("Header", () => {
    test("renders with logo, nav links, and Shop Books CTA", async ({
      page,
    }) => {
      await page.goto("/");

      // Logo with Amanda Edwards text
      const logo = page.locator("header").getByText("Amanda Edwards").first();
      await expect(logo).toBeVisible();

      // Children's Books subtitle
      await expect(
        page.locator("header").getByText("Children's Books")
      ).toBeVisible();

      // Desktop nav links (hidden on mobile, visible on md+)
      const desktopNav = page.locator("header .hidden.md\\:flex");
      await expect(desktopNav.getByText("Home")).toBeVisible();
      await expect(desktopNav.getByText("Books")).toBeVisible();
      await expect(desktopNav.getByText("About")).toBeVisible();
      await expect(desktopNav.getByText("Fun Stuff")).toBeVisible();
      await expect(desktopNav.getByText("Blog")).toBeVisible();
      await expect(desktopNav.getByText("Contact")).toBeVisible();

      // Shop Books CTA button
      await expect(desktopNav.getByText("Shop Books")).toBeVisible();
    });

    test("all nav links navigate to correct pages", async ({ page }) => {
      const navRoutes = [
        { label: "Home", path: "/" },
        { label: "Books", path: "/books" },
        { label: "About", path: "/about" },
        { label: "Fun Stuff", path: "/activities" },
        { label: "Blog", path: "/blog" },
        { label: "Contact", path: "/contact" },
      ];

      for (const route of navRoutes) {
        await page.goto("/");
        const desktopNav = page.locator("header .hidden.md\\:flex");
        // Use exact match to avoid clicking "Shop Books" when looking for "Books"
        await desktopNav
          .getByRole("link", { name: route.label, exact: true })
          .click();
        await page.waitForURL(`**${route.path}`);
        expect(page.url()).toContain(route.path);
      }
    });

    test("mobile hamburger menu opens and closes", async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto("/");

      // Hamburger button should be visible
      const hamburger = page.getByLabel("Toggle menu");
      await expect(hamburger).toBeVisible();

      // Mobile menu should not be visible initially
      await expect(
        page.locator("header .md\\:hidden").locator("text=Home").first()
      ).not.toBeVisible();

      // Click hamburger to open
      await hamburger.click();

      // Mobile menu links should now be visible
      await expect(
        page.locator("header").getByRole("link", { name: "Home" }).last()
      ).toBeVisible();
      await expect(
        page.locator("header").getByRole("link", { name: "Books" }).first()
      ).toBeVisible();
      await expect(
        page.locator("header").getByRole("link", { name: "About" })
      ).toBeVisible();
      await expect(
        page.locator("header").getByRole("link", { name: "Fun Stuff" })
      ).toBeVisible();
      await expect(
        page.locator("header").getByRole("link", { name: "Blog" })
      ).toBeVisible();
      await expect(
        page.locator("header").getByRole("link", { name: "Contact" })
      ).toBeVisible();

      // Click hamburger again to close
      await hamburger.click();

      // Wait for animation to complete and menu to disappear
      await page.waitForTimeout(500);
    });
  });

  test.describe("Footer", () => {
    test("renders with all link sections", async ({ page }) => {
      await page.goto("/");

      const footer = page.locator("footer");

      // Explore section
      await expect(footer.getByText("Explore")).toBeVisible();
      await expect(
        footer.getByRole("link", { name: "Books" }).first()
      ).toBeVisible();
      await expect(
        footer.getByRole("link", { name: "About Amanda" })
      ).toBeVisible();
      await expect(
        footer.getByRole("link", { name: "Fun Stuff" })
      ).toBeVisible();
      await expect(
        footer.getByRole("link", { name: "Blog" }).first()
      ).toBeVisible();

      // Connect section
      await expect(footer.getByText("Connect")).toBeVisible();
      await expect(
        footer.getByRole("link", { name: "Contact" })
      ).toBeVisible();
      await expect(
        footer.getByRole("link", { name: "Instagram" })
      ).toBeVisible();
      await expect(
        footer.getByRole("link", { name: "Facebook" })
      ).toBeVisible();
      await expect(
        footer.getByRole("link", { name: "TikTok" })
      ).toBeVisible();

      // For Parents section
      await expect(footer.getByText("For Parents")).toBeVisible();
      await expect(
        footer.getByRole("link", { name: "Reading Tips" })
      ).toBeVisible();
      await expect(
        footer.getByRole("link", { name: "Activity Downloads" })
      ).toBeVisible();
      await expect(
        footer.getByRole("link", { name: "School Visits" })
      ).toBeVisible();
      await expect(
        footer.getByRole("link", { name: "Bulk Orders" })
      ).toBeVisible();

      // Copyright
      await expect(footer.getByText(/Amanda Edwards/)).toBeTruthy();
    });

    test("footer links navigate correctly", async ({ page }) => {
      await page.goto("/");

      const footer = page.locator("footer");

      // Test internal links
      const internalLinks = [
        { name: "Books", path: "/books" },
        { name: "About Amanda", path: "/about" },
        { name: "Fun Stuff", path: "/activities" },
        { name: "Contact", path: "/contact" },
      ];

      for (const link of internalLinks) {
        await page.goto("/");
        await footer
          .getByRole("link", { name: link.name })
          .first()
          .click();
        await page.waitForURL(`**${link.path}`);
        expect(page.url()).toContain(link.path);
      }
    });
  });
});

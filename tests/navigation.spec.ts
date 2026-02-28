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
      await expect(desktopNav.getByRole("link", { name: "Home", exact: true })).toBeVisible();
      await expect(desktopNav.getByRole("link", { name: "Books", exact: true })).toBeVisible();
      await expect(desktopNav.getByRole("link", { name: "About", exact: true })).toBeVisible();
      await expect(desktopNav.getByRole("link", { name: "Fun Stuff", exact: true })).toBeVisible();
      await expect(desktopNav.getByRole("link", { name: "Blog", exact: true })).toBeVisible();
      await expect(desktopNav.getByRole("link", { name: "Contact", exact: true })).toBeVisible();

      // Shop Books CTA button
      await expect(desktopNav.getByRole("link", { name: "Shop Books" })).toBeVisible();
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
        await desktopNav
          .getByRole("link", { name: route.label, exact: true })
          .click();
        await page.waitForURL(`**${route.path}`);
        expect(page.url()).toContain(route.path);
      }
    });

    test("mobile hamburger menu opens and closes", async ({ page }) => {
      // Navigate with a mobile viewport size
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto("/");
      await page.waitForTimeout(1000);

      // Hamburger button should be visible on mobile
      // The aria-label is "Open menu" when closed, "Close menu" when open
      const hamburger = page.locator('button[aria-label="Open menu"]');
      await expect(hamburger).toBeVisible({ timeout: 10000 });

      // Click hamburger to open
      await hamburger.click();
      await page.waitForTimeout(400);

      // Mobile menu links should now be visible inside the mobile menu
      const mobileMenu = page.locator("#mobile-menu");
      await expect(mobileMenu.getByText("Home")).toBeVisible();
      await expect(mobileMenu.getByText("About")).toBeVisible();
      await expect(mobileMenu.getByText("Fun Stuff")).toBeVisible();
      await expect(mobileMenu.getByText("Blog")).toBeVisible();
      await expect(mobileMenu.getByText("Contact")).toBeVisible();

      // Click the close button (aria-label changes to "Close menu" when open)
      const closeButton = page.locator('button[aria-label="Close menu"]');
      await closeButton.click();
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
        footer.getByRole("link", { name: "Books", exact: true }).first()
      ).toBeVisible();
      await expect(
        footer.getByRole("link", { name: "About Amanda" })
      ).toBeVisible();
      await expect(
        footer.getByRole("link", { name: "Fun Stuff" })
      ).toBeVisible();
      await expect(
        footer.getByRole("link", { name: "Blog", exact: true }).first()
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
      await expect(footer.getByText(/Amanda Edwards/).first()).toBeVisible();
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
          .getByRole("link", { name: link.name, exact: true })
          .first()
          .click();
        await page.waitForURL(`**${link.path}`);
        expect(page.url()).toContain(link.path);
      }
    });
  });
});

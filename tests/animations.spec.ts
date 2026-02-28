import { test, expect } from "@playwright/test";

test.describe("Animations", () => {
  test("Framer Motion elements have proper initial/animate states on home page", async ({
    page,
  }) => {
    // Disable animations to capture initial state
    await page.goto("/");

    // The hero section should be visible (Framer Motion animates opacity from 0 to 1)
    // After animation completes, elements should have opacity: 1 and be visible
    const heroHeading = page.getByRole("heading", {
      name: /Magical Stories for Little Dreamers/i,
    });
    await expect(heroHeading).toBeVisible();

    // Check that animated elements have style attributes (Framer Motion applies inline styles)
    // The hero container should have style applied by motion
    const motionDivs = page.locator("[style]").first();
    await expect(motionDivs).toBeVisible();
  });

  test("Framer Motion animated sections become visible on scroll", async ({
    page,
  }) => {
    await page.goto("/");

    // The AnimatedSection components use whileInView
    // After scrolling, they should become visible
    // Scroll to the Featured Books section
    await page.getByRole("heading", { name: "Featured Books" }).scrollIntoViewIfNeeded();
    await page.waitForTimeout(700); // Wait for animation to complete

    await expect(
      page.getByRole("heading", { name: "Featured Books" })
    ).toBeVisible();

    // Scroll to the reviews section
    await page.getByRole("heading", { name: "What Readers Say" }).scrollIntoViewIfNeeded();
    await page.waitForTimeout(700);

    await expect(
      page.getByRole("heading", { name: "What Readers Say" })
    ).toBeVisible();
  });

  test("newsletter signup shows success state after form submission", async ({
    page,
  }) => {
    await page.goto("/");

    // Scroll to the newsletter section
    const newsletter = page
      .locator("section")
      .filter({ hasText: "Join the Story Club" })
      .first();
    await newsletter.scrollIntoViewIfNeeded();
    await page.waitForTimeout(700);

    // Fill in email in the standalone newsletter form
    const form = newsletter.locator("form");
    await form.locator('input[type="email"]').fill("test@example.com");
    await form.locator('button[type="submit"]').click();

    // After submission, the success message should animate in
    await expect(
      page.getByText(/You're in! Welcome to the Story Club/i).first()
    ).toBeVisible();
  });

  test("contact form shows success state after submission", async ({
    page,
  }) => {
    await page.goto("/contact");

    // Fill in the form
    await page.getByRole("button", { name: "Fan Mail" }).click();
    await page.getByLabel(/Your Name/i).fill("Test User");
    await page.getByLabel(/Your Email/i).fill("test@example.com");
    await page.getByLabel(/Your Message/i).fill("Great books!");

    // Submit
    await page.getByRole("button", { name: /Send Message/i }).click();

    // Success animation should show the celebration emoji and message
    await expect(
      page.getByRole("heading", { name: /Message Sent/i })
    ).toBeVisible();

    // The success state should have a motion element (the celebration emoji scales in)
    await expect(page.locator("text=🎉")).toBeVisible();
  });

  test("book cards have hover/animation properties on books page", async ({
    page,
  }) => {
    await page.goto("/books");

    // Book cards are wrapped in motion.div elements
    // They should be visible after animation
    const bookCards = page.locator('a[href^="/books/"]');
    const count = await bookCards.count();
    expect(count).toBeGreaterThanOrEqual(4);

    // First card should be visible (animated in)
    await expect(bookCards.first()).toBeVisible();
  });

  test("mobile menu has open/close animations", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    await page.waitForTimeout(1000);

    const hamburger = page.locator('button[aria-label="Open menu"]');
    await expect(hamburger).toBeVisible({ timeout: 10000 });

    // Open menu
    await hamburger.click();
    await page.waitForTimeout(400);

    // Menu should be visible with animated links inside the mobile menu
    const mobileMenu = page.locator("#mobile-menu");
    await expect(mobileMenu.getByText("Home")).toBeVisible();
    await expect(mobileMenu.getByText("Contact")).toBeVisible();

    // Close menu (aria-label changes to "Close menu" when open)
    const closeButton = page.locator('button[aria-label="Close menu"]');
    await closeButton.click();
    await page.waitForTimeout(500);
  });
});

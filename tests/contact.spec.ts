import { test, expect } from "@playwright/test";

test.describe("Contact Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("contact form renders with all fields (name, email, message)", async ({
    page,
  }) => {
    await expect(
      page.getByRole("heading", { name: /Let's Chat/i })
    ).toBeVisible();

    // Name field
    await expect(page.getByLabel(/Your Name/i)).toBeVisible();

    // Email field
    await expect(page.getByLabel(/Your Email/i)).toBeVisible();

    // Message field
    await expect(page.getByLabel(/Your Message/i)).toBeVisible();

    // Submit button
    await expect(
      page.getByRole("button", { name: /Send Message/i })
    ).toBeVisible();
  });

  test("6 reason selection buttons render and are clickable", async ({
    page,
  }) => {
    const reasons = [
      "School Visit",
      "Bulk Order",
      "Press / Media",
      "Fan Mail",
      "Collaboration",
      "Other",
    ];

    for (const reason of reasons) {
      // Button text includes emoji prefix, so use regex
      const button = page.getByRole("button", { name: new RegExp(reason) });
      await expect(button).toBeVisible();
    }

    // Click one reason and verify it gets selected (changes style)
    const schoolVisitBtn = page.getByRole("button", { name: /School Visit/ });
    await schoolVisitBtn.click();
    // After clicking, the button should have the selected border class
    await expect(schoolVisitBtn).toHaveClass(/border-coral/);
  });

  test("form submits and shows success message", async ({ page }) => {
    // Select a reason (button text includes emoji prefix)
    await page.getByRole("button", { name: /Fan Mail/ }).click();

    // Fill in the form
    await page.getByLabel(/Your Name/i).fill("Test User");
    await page.getByLabel(/Your Email/i).fill("test@example.com");
    await page.getByLabel(/Your Message/i).fill("I love your books!");

    // Submit
    await page.getByRole("button", { name: /Send Message/i }).click();

    // Success state
    await expect(
      page.getByRole("heading", { name: /Message Sent/i })
    ).toBeVisible();
    await expect(
      page.getByText(/Thanks for reaching out/i)
    ).toBeVisible();
  });

  test("social links section shows Instagram, Facebook, TikTok", async ({
    page,
  }) => {
    // Scope to the main content area to avoid matching footer social links
    const main = page.locator("main");

    await expect(
      main.getByRole("heading", { name: /Find Me Online/i })
    ).toBeVisible();

    // Instagram
    const instagramLink = main.getByRole("link", { name: /Instagram/i });
    await expect(instagramLink).toBeVisible();
    await expect(instagramLink).toHaveAttribute(
      "href",
      "https://instagram.com/amandaedwardsbooks"
    );

    // Facebook
    const facebookLink = main.getByRole("link", { name: /Facebook/i });
    await expect(facebookLink).toBeVisible();
    await expect(facebookLink).toHaveAttribute(
      "href",
      "https://facebook.com/amandaedwardsbooks"
    );

    // TikTok
    const tiktokLink = main.getByRole("link", { name: /TikTok/i });
    await expect(tiktokLink).toBeVisible();
    await expect(tiktokLink).toHaveAttribute(
      "href",
      "https://tiktok.com/@amandaedwardsbooks"
    );
  });

  test("school visits info card renders", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "School Visits" })
    ).toBeVisible();
    await expect(
      page.getByText(/I love visiting schools and libraries/i)
    ).toBeVisible();
    await expect(
      page.getByText(/interactive read-alouds/i)
    ).toBeVisible();
  });

  test("quick answers FAQ renders", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Quick Answers" })
    ).toBeVisible();

    await expect(page.getByText("Response time?")).toBeVisible();
    await expect(
      page.getByText(/Usually within 2-3 business days/i)
    ).toBeVisible();

    await expect(page.getByText("Signed copies?")).toBeVisible();
    await expect(
      page.getByText(/Yes! Just mention it in your message/i)
    ).toBeVisible();

    await expect(page.getByText("Virtual visits?")).toBeVisible();
    await expect(
      page.getByText(/Absolutely! I do Zoom visits/i)
    ).toBeVisible();
  });
});

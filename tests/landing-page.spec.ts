import { test, expect } from "@playwright/test";

test.describe("Under Construction Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page loads successfully with correct title", async ({ page }) => {
    await expect(page).toHaveTitle("EngineeriT — Coming Soon");
  });

  test("company name is visible", async ({ page }) => {
    await expect(page.getByText("EngineeriT").first()).toBeVisible();
  });

  test("coming soon badge is visible", async ({ page }) => {
    await expect(page.getByText("COMING SOON")).toBeVisible();
  });

  test("main heading is visible", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /something great is being built/i })
    ).toBeVisible();
  });

  test("countdown timer renders all four units", async ({ page }) => {
    for (const unit of ["days", "hours", "minutes", "seconds"]) {
      await expect(page.getByText(unit)).toBeVisible();
    }
  });

  test("email form is functional", async ({ page }) => {
    const input = page.getByPlaceholder("Enter your email");
    const button = page.getByRole("button", { name: "Notify Me" });

    await expect(input).toBeVisible();
    await expect(button).toBeVisible();

    await input.fill("qa@engineerit.com");
    await expect(input).toHaveValue("qa@engineerit.com");
  });

  test("page has no console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });

    await page.reload();
    await page.waitForTimeout(1000);

    expect(errors).toHaveLength(0);
  });

  test("footer contains copyright and company name", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toContainText("EngineeriT");
    await expect(footer).toContainText("All rights reserved");
  });
});

import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/NPM Website/);

  await expect(page.getByText('NPM Library')).toBeVisible();
  await expect(page.getByText('Internal Import')).toBeVisible();
});

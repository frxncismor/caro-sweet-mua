import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
});

test('full page', async ({ page }) => {
  await expect(page).toHaveScreenshot('full-page.png', { fullPage: true });
});

test('section: hero', async ({ page }) => {
  await expect(page.locator('section').first()).toHaveScreenshot('hero.png');
});

test('section: servicios', async ({ page }) => {
  await expect(page.locator('#servicios')).toHaveScreenshot('servicios.png');
});

test('section: galeria', async ({ page }) => {
  await expect(page.locator('#galeria')).toHaveScreenshot('galeria.png');
});

test('section: testimonios', async ({ page }) => {
  await expect(page.locator('#testimonios')).toHaveScreenshot('testimonios.png');
});

test('section: contacto', async ({ page }) => {
  await expect(page.locator('#contacto')).toHaveScreenshot('contacto.png');
});

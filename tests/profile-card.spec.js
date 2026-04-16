const { test, expect } = require('@playwright/test');

test.describe('Profile Card - Stage 1B Acceptance Criteria', () => {

    test.beforeEach(async ({ page }) => {
        // Open the local HTML file
        await page.goto('file:///' + process.cwd() + '/index.html');
    });

    test('should have all required data-testid elements', async ({ page }) => {
        // Root
        await expect(page.locator('[data-testid="test-profile-card"]')).toBeVisible();

        // Core info
        await expect(page.locator('[data-testid="test-user-name"]')).toBeVisible();
        await expect(page.locator('[data-testid="test-user-bio"]')).toBeVisible();
        await expect(page.locator('[data-testid="test-user-time"]')).toBeVisible();
        await expect(page.locator('[data-testid="test-user-avatar"]')).toBeVisible();

        // Social
        await expect(page.locator('[data-testid="test-user-social-links"]')).toBeVisible();
        await expect(page.locator('[data-testid="test-user-social-twitter"]')).toBeVisible();
        await expect(page.locator('[data-testid="test-user-social-github"]')).toBeVisible();
        await expect(page.locator('[data-testid="test-user-social-linkedin"]')).toBeVisible();

        // Lists
        await expect(page.locator('[data-testid="test-user-hobbies"]')).toBeVisible();
        await expect(page.locator('[data-testid="test-user-dislikes"]')).toBeVisible();
    });

    test('time should show milliseconds and update live', async ({ page }) => {
        const timeLocator = page.locator('[data-testid="test-user-time"]');
        
        // First value
        const time1 = await timeLocator.textContent();
        expect(time1).toMatch(/^\d{13}$/);   // should be 13-digit number

        // Wait 1 second and check it changed
        await page.waitForTimeout(1200);
        const time2 = await timeLocator.textContent();
        
        expect(time2).toMatch(/^\d{13}$/);
        expect(time2).not.toBe(time1);   // must be updating
    });

    test('avatar should have meaningful alt text', async ({ page }) => {
        const avatar = page.locator('[data-testid="test-user-avatar"]');
        const altText = await avatar.getAttribute('alt');
        expect(altText).toBeTruthy();           // must exist
        expect(altText.length).toBeGreaterThan(10); // should be meaningful
    });
});
import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
    // Start from the home page and go to index page 
    await page.goto('/login')
    // Find an element with the id 'username-field' and fill it
    await page.locator('#username-field').fill('testApporto');
    // Find an element with the id 'password-field' and fill it
    await page.locator('#password-field').fill('apporto');
    // Find an element with the id 'submit' and click it
    await page.locator('#submit').click();
    // Find an element with the id 'updated-value' and check if the text entered in Id input box exists in it
    await page.locator('#updated-value', { hasText:"testApporto"});
    // Find an element with the id 'updated-value' and check if the text entered in Password input box exists in it
    await page.locator('#updated-value', { hasText: "apporto" });
})
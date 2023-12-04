const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

//parallel execution
test.describe.configure({ mode: 'parallel' });
// test.describe.configure({ mode: 'serial' });

//1 
test("@Web Browser Context Playwright Test", async () => {
    const browser = await chromium.launch({ channel: 'chrome', headless: false })
    // const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title())

    const username = page.locator("#username");
    const password = page.locator("[type='password']");
    const loginButton = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");

    await username.fill("rahulshetty");
    await password.fill("learning");
    await loginButton.click();

    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await username.fill("");
    await username.fill("rahulshettyacademy");
    await loginButton.click();

    // console.log(await cardTitles.first().textContent());
    // console.log(await cardTitles.last().textContent());
    // console.log(await cardTitles.nth(1).textContent());
    // console.log(await cardTitles.nth(2).textContent());
    // await page.waitForLoadState('networkidle');
    await cardTitles.last().waitFor();
    console.log(await cardTitles.allTextContents());
})

//2
test("Page Playwright Test", async ({ page }) => {
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto("https://google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});
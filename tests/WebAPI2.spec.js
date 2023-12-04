const { test, expect, request } = require('@playwright/test');
const { APIutils } = require('../utils/APIutils');

let webContext;

test("@API Storage State",async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("input[id='login']").click();
    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'state.json' });
    webContext = await browser.newContext({ storageState: 'state.json' });
    console.log("Hello")

})

test("@API Client Login & Place Order", async () => {


    // //injecting the retrieved token in the browser localstorage
    // await page.addInitScript((value) => {
    //     window.localStorage.setItem('token', value);
    // }, response.token);

    // // console.log(response.token);
    // // console.log(response.orderId);

    const email = "";
    const productName = 'Zara Coat 4';
    const page = await webContext.newPage();
    await page.goto('https://rahulshettyacademy.com/client/');

    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");

    for (let i = 0; i < rows.count(); i++) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if (response.orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button[class='btn']").nth(i).click();
            break;
        }
    }

    console.log("TC1")
    // const orderIdDetails = await page.locator(".col-text").textContent();
    // await page.pause();
    // expect(orderIds.includes(orderIdDetails)).toBeTruthy();

})
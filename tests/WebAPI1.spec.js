const { test, expect, request } = require('@playwright/test');
const { APIutils } = require('../utils/APIutils');

const requestBody = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" }
const orderPayload = {
    orders: [
        {
            country: "India",
            productOrderedId: "6262e95ae26b7e1a10e89bf0"
        },
        {
            country: "India",
            productOrderedId: "6262e990e26b7e1a10e89bfa"
        }
    ]
}
let response;
test.beforeAll("@API Test",async () => {

    const apiContext = await request.newContext();
    const apiUtils = new APIutils(apiContext, requestBody);
    response = await apiUtils.createOrder(orderPayload);
    console.log(response)

})

test("@API Client Login & Place Order", async ({ page }) => {


    //injecting the retrieved token in the browser localstorage
    await page.addInitScript((value) => {
        window.localStorage.setItem('token', value);
    }, response.token);

    // console.log(response.token);
    // console.log(response.orderId);

    const email = "";
    const productName = 'Zara Coat 4';
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

    const orderIdDetails = await page.locator(".col-text").textContent();
    await page.pause();
    // expect(orderIds.includes(orderIdDetails)).toBeTruthy();

})
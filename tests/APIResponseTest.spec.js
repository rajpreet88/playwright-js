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
const fakePayloadOrders = { data: [], message: "No Orders" }
let response;

test.beforeAll("Initial Login", async () => {

    const apiContext = await request.newContext();
    const apiUtils = new APIutils(apiContext, requestBody);
    response = await apiUtils.createOrder(orderPayload);
    // console.log(response)

})

test("Client Login & Place Order", async ({ page }) => {


    //injecting the retrieved token in the browser localstorage
    await page.addInitScript((value) => {
        window.localStorage.setItem('token', value);
    }, response.token);


    await page.goto('https://rahulshettyacademy.com/client/');

    //intercepting the API response to render user defined test in the UI
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*", async (route) => {
        const routeResponse = await page.request.fetch(route.request());
        let body = JSON.stringify(fakePayloadOrders);
        route.fulfill({
            routeResponse, body
        })

    });

    await page.locator("button[routerlink*='myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
    console.log(await page.locator(".mt-4").textContent());
    // console.log("No orders");

})
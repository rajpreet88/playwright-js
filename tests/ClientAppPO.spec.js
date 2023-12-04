const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const { customTest } = require('../utils/CustomBaseTestData');
const testData = JSON.parse(JSON.stringify(require('../utils/ClientAppPOTestData.json')));



test("@Web Client App Login", async ({ page }) => {

    //po
    const poManager = new POManager(page);
    const loginPage = await poManager.getLoginPage();

    // await page.goto("https://rahulshettyacademy.com/client");
    await loginPage.goTo();
    await loginPage.validLogin(testData.userName, testData.password);


    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProduct(testData.productName);
    await dashboardPage.navigateToCart();


    const cartPage = poManager.getCartPage();
    await cartPage.verifyProductIsDisplayed(testData.productName);
    await cartPage.checkOut();
    // await page.pause();

    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    // console.log("hello")
    const orderId = await ordersReviewPage.submitAndGetOrderId();
    console.log(orderId.trim());

    await dashboardPage.navigateToOrders();
    const orderHistoryPage = poManager.getOrdersHistoryPage();
    await orderHistoryPage.searchOrderAndSelect(orderId);
    expect(orderId.includes(await orderHistoryPage.getOrderId())).toBeTruthy();

})

customTest("@Custom Custom Client App Login", async ({ page, testDataForOrder }) => {

    //po
    const poManager = new POManager(page);
    const loginPage = await poManager.getLoginPage();

    // await page.goto("https://rahulshettyacademy.com/client");
    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.userName, testDataForOrder.password);


    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProduct(testDataForOrder.productName);
    await dashboardPage.navigateToCart();


    const cartPage = poManager.getCartPage();
    await cartPage.verifyProductIsDisplayed(testDataForOrder.productName);
    await cartPage.checkOut();
    // await page.pause();
})
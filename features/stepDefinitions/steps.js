const { When, Then, Given } = require('@cucumber/cucumber');
const { POManager } = require('../../pageobjects/POManager');
const { test, expect } = require('@playwright/test');
const playwright = require('@playwright/test');

Given('a login to the Ecommerce application with {string} and {string}', { timeout: 10 * 1000 }, async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    const loginPage = await this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);
});

When('Add {string} to Cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.searchProduct(productName);
    await this.dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed in the Cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    const cartPage = this.poManager.getCartPage();
    await cartPage.verifyProductIsDisplayed(productName);
    await cartPage.checkOut();
});

When('enter valid details and place the order', async function () {
    // Write code here that turns the phrase above into concrete actions
    const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    // console.log("hello")
    this.orderId = await ordersReviewPage.submitAndGetOrderId();
    console.log(this.orderId.trim());
});

Then('Verify order is present in the order history page', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.dashboardPage.navigateToOrders();
    const orderHistoryPage = this.poManager.getOrdersHistoryPage();
    await orderHistoryPage.searchOrderAndSelect(this.orderId);
    expect(this.orderId.includes(await orderHistoryPage.getOrderId())).toBeTruthy();
});

Given('a login to the Ecommerce2 application with {string} and {string}', { timeout: 10 * 1000 }, async function (userName, passWord) {
    // Write code here that turns the phrase above into concrete actions
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await this.page.title())

    const username = this.page.locator("#username");
    const password = this.page.locator("[type='password']");
    const loginButton = this.page.locator("#signInBtn");
    const cardTitles = this.page.locator(".card-body a");

    await username.fill(userName);
    await password.fill(passWord);
    await loginButton.click();
});

Then('Verify Error Message is displayed', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log(await this.page.locator("[style*='block']").textContent());
    await expect(this.page.locator("[style*='block']")).toContainText('Incorrect');
});
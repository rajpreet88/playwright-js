const { POManager } = require('../../pageobjects/POManager');
const playwright = require('@playwright/test');
const { Before, After, BeforeStep, AfterStep, BeforeAll, AfterAll, Status } = require('@cucumber/cucumber')

Before( async function () {
    const browser = await playwright.chromium.launch({ headless: false, channel: "chrome" });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
})

BeforeStep(async function () {

})

AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: 'screenshot1.png' })
    }
})

After(async function () {
    console.log("I am the last to execute")
})
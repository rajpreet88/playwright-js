const base  = require('@playwright/test');

const customTest = base.test.extend({
    testDataForOrder: {
        userName: "anshika@gmail.com",
        password: "Iamking@000",
        productName: "zara coat 3"
    }
})

module.exports = { customTest };

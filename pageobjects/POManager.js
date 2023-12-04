const { LoginPage } = require('./LoginPage')
const { DashboardPage } = require('./DashboardPage')
const { CartPage } = require('./CartPage')
const { OrdersHistoryPage } = require('./OrdersHistoryPage')
const { OrdersReviewPage } = require('./OrdersReviewPage')

class POManager {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.ordersReviewPage = new OrdersReviewPage(this.page)
        this.ordersHistoryPage = new OrdersHistoryPage(this.page)
        this.cartPage = new CartPage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getDashboardPage() {
        return this.dashboardPage;
    }

    getOrdersReviewPage() {
        return this.ordersReviewPage;
    }
    getOrdersHistoryPage() {
        return this.ordersHistoryPage;
    }
    getCartPage() {
        return this.cartPage;
    }

}

module.exports = { POManager }
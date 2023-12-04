const { test, expect } = require('@playwright/test');

class APIutils {

    constructor(apiContext, requestBody) {
        this.apiContext = apiContext;
        this.requestBody = requestBody;
    }

    async getToken() {
        const responseBody = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", { data: this.requestBody })
        expect(responseBody.ok()).toBeTruthy();
        const responseBodyJson = await responseBody.json();
        const token = responseBodyJson.token;
        return token;
    }

    async createOrder(orderPayload) {

        const response = {};

        response.token = await this.getToken();
        // console.log(response.token);

        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
            data: orderPayload,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': response.token
            }
        })
        const orderResponseJson = await orderResponse.json();
        expect(orderResponse.ok()).toBeTruthy();
        const orderIds = orderResponseJson.orders[0];
        response.orderId = orderIds;
        // console.log(response);
        return response;
    }
}
module.exports = { APIutils }
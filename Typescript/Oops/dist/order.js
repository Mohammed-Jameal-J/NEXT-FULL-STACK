"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FoodOrder {
    orderId;
    customerName;
    totalAmount;
    constructor(orderId, customerName) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.totalAmount = 0;
    }
    addItem(price) {
        this.totalAmount += price;
    }
    placeOrder() {
        console.log(`Order placed for ${this.customerName} with total amount: $${this.totalAmount}`);
    }
}
const order1 = new FoodOrder(101, "Alice");
order1.addItem(25);
order1.addItem(15);
order1.placeOrder();
//# sourceMappingURL=order.js.map
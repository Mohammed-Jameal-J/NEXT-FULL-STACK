class FoodOrder {
    orderId: number;
    customerName: string;
    totalAmount: number;

    constructor(orderId: number, customerName: string) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.totalAmount = 0;
    }
    addItem(price: number): void {
        this.totalAmount += price;
    }
    placeOrder(): void {
        console.log(`Order placed for ${this.customerName} with total amount: $${this.totalAmount}`);
    }
}
const order1 = new FoodOrder(101, "Alice");
order1.addItem(25);
order1.addItem(15);
order1.placeOrder();
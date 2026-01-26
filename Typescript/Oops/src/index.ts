class Account {
    //properties
    id: number;
    name: string;
    balance: number;
    //constructor
    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    //method to deposite amount
    deposit(amount: number): void {
        this.balance += amount;
    }
}

//object creation
const acc = new Account(1, "John Doe", 1000);
const acc1 = new Account(2, "Jane Smith", 2000);

//using deposit method
acc.deposit(500);
console.log(`Account Balance: ${acc.balance}`);
acc1.deposit(1000);
console.log(`Account Balance: ${acc1.balance}`);

console.log(typeof acc);
console.log(acc instanceof Account);

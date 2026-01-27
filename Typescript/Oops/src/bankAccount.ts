// access modifiers: public, private, protected
// this oops known as encapsulation
//because it wont misuse the balance property directly
//getter and setter method to access private property
//parameter properties shorthand to reduce boilerplate code

class BankAccount {
    //properties
    // owner: string;
    // private _balance: number;
    // accountType: string;

    //constructor
    // constructor(owner: string, accountType: string) {
    //     this.owner = owner;
    //     this.accountType = accountType;
    //     this._balance = 0;
    // }
    //parameter properties shorthand
    constructor(
        public owner: string,
        private _balance: number,
        public accountType: string
    ) {
    }
    // getBalance(): number {
    //     return this._balance;
    // }
    //getter method
    get balance(): number {
        return this._balance;
    }

    // deposit(amount: number): void {
    //     if (amount > 0) {
    //         this._balance += amount;
    //     } else {
    //         console.log("Deposit amount must be positive.");
    //     }
    // }
    //setter method
    set balance(amount: number) {
        if (amount >= 0) {
            this._balance = amount;
        } else {
            console.log("Balance cannot be negative.");
        }
}
}
//object creation
const myAccount = new BankAccount("Alice", 0, "Savings");
myAccount.balance = 300; // Using setter to set balance    

console.log(`Account Owner: ${myAccount.owner}`);
console.log(`Account AccountType: ${myAccount.accountType}`);
console.log(`Account Balance: $${myAccount.balance}`);
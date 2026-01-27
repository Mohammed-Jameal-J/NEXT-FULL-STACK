"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    _accNumber;
    balance;
    accHolderName;
    constructor(_accNumber, balance, accHolderName) {
        this._accNumber = _accNumber;
        this.balance = balance;
        this.accHolderName = accHolderName;
    }
    _validateAccountNumber() {
        // Simple validation: account number must be 10 digits
        const accNumPattern = /^\d{10}$/;
        return accNumPattern.test(this._accNumber);
    }
    _updateBalance(amount) {
        if (!this._validateAccountNumber()) {
            throw new Error("Invalid account number.");
        }
        this.balance += amount;
    }
    getAccountInfo() {
        console.log(`Account Number: ${this._accNumber}, Balance: ${this.balance}, Account Holder: ${this.accHolderName}`);
    }
}
class SavingsAccount extends BankAccount {
    addInterest(rate) {
        const interest = this.balance * (rate / 100);
        this._updateBalance(interest);
        console.log(`Interest of ${interest} added. New balance is ${this.balance}`);
    }
}
const mySavings = new SavingsAccount("1234567890", 1000, "John Doe");
mySavings.getAccountInfo();
mySavings.addInterest(5);
mySavings.getAccountInfo();
//# sourceMappingURL=bank.js.map
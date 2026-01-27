abstract class BankAccount {
    constructor(
        private _accNumber: string,
        protected balance: number,
        public accHolderName: string,
    ){

    }

    private _validateAccountNumber(): boolean {
        // Simple validation: account number must be 10 digits
        const accNumPattern = /^\d{10}$/;
        return accNumPattern.test(this._accNumber);
    }
    protected _updateBalance(amount: number): void {
        if (!this._validateAccountNumber()) {
            throw new Error("Invalid account number.");
        }
        this.balance += amount;
    }
    public getAccountInfo(): void {
        console.log(`Account Number: ${this._accNumber}, Balance: ${this.balance}, Account Holder: ${this.accHolderName}`);
    }
    abstract getType(): void;
}
class SavingsAccount extends BankAccount {
    override getType(): void {
        throw new Error("Method not implemented.");
    }
    addInterest(rate: number): void {
        const interest = this.balance * (rate / 100);
        this._updateBalance(interest);
        console.log(`Interest of ${interest} added. New balance is ${this.balance}`);
    }
}

const mySavings = new SavingsAccount("1234567890", 1000, "John Doe");
mySavings.getAccountInfo();
mySavings.addInterest(5);
mySavings.getAccountInfo();
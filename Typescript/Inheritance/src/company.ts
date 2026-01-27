class Employee {
    constructor(
        public name: string,
        private _salary: number,
    ){}
    get Role(): string {
        return "Employee";
    }
    salary(): void {
        console.log(`${this.name} earns ${this._salary}`);
    }
}

class Developer extends Employee {
    override get Role(): string {
        return "Developer";
    }
}

class Manager extends Employee {
    override get Role(): string {
        return "Manager";
    }
}

function printRole(emp: Employee): void {
    console.log(`${emp.name} is a ${emp.Role}`);
}

const d1 = new Developer("Alice", 80000);
d1.salary();
const m1 = new Manager("Bob", 95000);
m1.salary();
printRole(m1);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    _salary;
    constructor(name, _salary) {
        this.name = name;
        this._salary = _salary;
    }
    get Role() {
        return "Employee";
    }
    salary() {
        console.log(`${this.name} earns ${this._salary}`);
    }
}
class Developer extends Employee {
    get Role() {
        return "Developer";
    }
}
class Manager extends Employee {
    get Role() {
        return "Manager";
    }
}
function printRole(emp) {
    console.log(`${emp.name} is a ${emp.Role}`);
}
const d1 = new Developer("Alice", 80000);
d1.salary();
const m1 = new Manager("Bob", 95000);
m1.salary();
printRole(m1);
//# sourceMappingURL=company.js.map
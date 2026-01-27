"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//overriding a method from parent class
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log(`${this.getFullName()} is walking.`);
    }
}
class Teacher extends Person {
    teacherId;
    constructor(teacherId, firstName, lastName) {
        super(firstName, lastName);
        this.teacherId = teacherId;
    }
    getFullName() {
        return "Tr. " + super.getFullName();
    }
    teach() {
        console.log(`${super.getFullName()} is teaching.`);
    }
}
const teacher = new Teacher("2", "Jameal", "Mohammed");
teacher.walk();
teacher.teach();
console.log(teacher.getFullName());
//# sourceMappingURL=methodOverriding.js.map
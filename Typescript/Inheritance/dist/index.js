"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//inheritance
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
    teach() {
        console.log(`${this.getFullName()} is teaching.`);
    }
}
const teacher = new Teacher("2", "Jameal", "Mohammed");
teacher.teach();
//# sourceMappingURL=index.js.map
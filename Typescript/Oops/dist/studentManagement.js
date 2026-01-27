"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    studentId;
    name;
    _marks;
    email;
    static schoolName = "ABC High School"; // static property
    static totalStudents = 0; // static property to keep track of total students
    constructor(studentId, name, _marks, email) {
        this.studentId = studentId;
        this.name = name;
        this._marks = _marks;
        this.email = email;
        Student.totalStudents += 1; // increment total students on each new student creation
    }
    // getter for marks
    get marks() {
        return this._marks;
    }
    // setter for marks
    set marks(value) {
        if (value >= 0 && value <= 100) {
            this._marks = value;
        }
        else {
            console.log("Marks should be between 0 and 100.");
        }
    }
    displayInfo() {
        console.log(`Student ID: ${this.studentId}, Name: ${this.name}, Marks: ${this._marks}, School: ${Student.schoolName}`);
    }
    static showSchoolInfo() {
        console.log(`School Name: ${Student.schoolName}, Total Students: ${Student.totalStudents}`);
    }
}
const student1 = new Student(1, "John Doe", 85, "john.doe@example.com");
student1.displayInfo();
student1.marks = 90;
student1.displayInfo();
const student2 = new Student(2, "Jane Smith", 92);
student2.displayInfo();
//# sourceMappingURL=studentManagement.js.map
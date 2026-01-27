class Student {
    static schoolName: string = "ABC High School"; // static property
    static totalStudents: number = 0; // static property to keep track of total students

    constructor(
        public readonly studentId: number,
        public name: string,
        private _marks: number,
        public email?: string
    ){
        Student.totalStudents += 1; // increment total students on each new student creation
    }
    // getter for marks
    get marks(): number {
        return this._marks;
    }
    // setter for marks
    set marks(value: number) {
        if (value >= 0 && value <= 100) {
            this._marks = value;
        } else {
            console.log("Marks should be between 0 and 100.");
        }
    }
    displayInfo(): void {
        console.log(`Student ID: ${this.studentId}, Name: ${this.name}, Marks: ${this._marks}, School: ${Student.schoolName}`);
    }
    static showSchoolInfo(): void {
        console.log(`School Name: ${Student.schoolName}, Total Students: ${Student.totalStudents}`);
    }
}

const student1 = new Student(1, "John Doe", 85, "john.doe@example.com");
student1.displayInfo();
student1.marks = 90;
student1.displayInfo();

const student2 = new Student(2, "Jane Smith", 92);
student2.displayInfo();
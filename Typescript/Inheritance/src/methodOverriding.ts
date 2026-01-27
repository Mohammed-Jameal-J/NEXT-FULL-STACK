//overriding a method from parent class
class Person{
    constructor(
        public firstName: string,
        public lastName: string,
    ){}
    getFullName(): string{
        return this.firstName + " " + this.lastName;
    }
    walk(): void{
        console.log(`${this.getFullName()} is walking.`);
    }
}

class Teacher extends Person{
    constructor(
        public teacherId: string,
        firstName: string,
        lastName: string,
    ){
        super(firstName, lastName);
    }

    override getFullName(): string{
        return "Tr. " + super.getFullName();
    }


    teach(): void{
        console.log(`${super.getFullName()} is teaching.`);
    }
}
const teacher = new Teacher("2", "Jameal", "Mohammed");
teacher.walk()
teacher.teach();
console.log(teacher.getFullName());

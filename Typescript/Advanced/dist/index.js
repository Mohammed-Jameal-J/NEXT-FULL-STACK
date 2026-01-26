"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user1 = {
    id: 1,
    name: "John Doe"
};
console.log(user1);
//union type => |
let pid;
pid = 22;
pid = "22A";
console.log(pid);
//type narrowing => checking the type at runtime
function printId(id) {
    if (typeof id === "string") {
        console.log("ID as string: " + id.toUpperCase());
    }
    else {
        console.log("ID as number: " + id);
    }
}
printId(101);
printId("202B");
let manager1 = {
    id: 2,
    name: "Jane Smith",
    employeeId: 1001,
    department: "Sales"
};
console.log(manager1);
//optional chaining => ?. to safely access nested properties
let userInfo = {
    profile: {
        email: "jane@example.com"
    }
};
//option property chainig
console.log(userInfo?.profile?.email);
//option element chainig
let member = [
    { name: "Alice" },
    { name: "Jack" }
];
console.log(member[1]?.name);
//nullish coalescing => ?? keeps the value if it is not null or undefined
let count = 0;
console.log(count ?? 10); // Output: 0 because count is not null or undefined
//type assertions => telling the compiler about a more specific type
let element = document.getElementById("myInput");
element.value = "Hello TypeScript";
console.log(element.value);
//unknown type => safer alternative to any type
// let userInput: unknown;
// userInput = "Hello World";
//never type => represents values that never occur
// function throwError(message: string): never {
//     throw new Error(message);
// }
// throwError("This is a critical error");
// console.log("Hello");
//# sourceMappingURL=index.js.map
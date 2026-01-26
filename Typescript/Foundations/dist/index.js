"use strict";
//buildin types
Object.defineProperty(exports, "__esModule", { value: true });
//number
let num = 42;
console.log("number", num);
//string
let str = "Hello, TypeScript!";
console.log("string", str);
//boolean
let isloggedIn = true;
console.log("boolean", isloggedIn);
//any = avoid using this type
let randomValue = 10;
console.log("any before", randomValue);
randomValue = "Now I'm a string";
console.log("any after", randomValue);
//array
let numArray = [1, 2, 3, 4, 5];
console.log("array", numArray);
//tuple
let tuple = [1, "Tuple", true];
console.log("tuple", tuple);
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log("enum", c);
//function
function greetUser(name) {
    return `Hello, ${name}!`;
}
console.log("function", greetUser("Alice"));
//if not return anything use void
function logMessage(message) {
    console.log("function", message);
}
logMessage("This is a log message.");
function multiply(a, b) {
    return a * b;
}
console.log("function", multiply(5, 3));
//object
let user = { name: "Bob", age: 25 };
user.phoneNumber = "123-456-7890"; // Error: Property 'phoneNumber' does not exist on type '{ name: string; age: number; }'.
console.log("object", user);
//null and undefined
// let u: undefined = undefined;
// let n: null = null;
// console.log("null and undefined", u, n);
//# sourceMappingURL=index.js.map
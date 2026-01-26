//buildin types

//number
let num: number = 42;
console.log("number", num);
//string
let str: string = "Hello, TypeScript!";
console.log("string", str);
//boolean
let isloggedIn: boolean = true;
console.log("boolean", isloggedIn);

//any = avoid using this type
let randomValue: any = 10;
console.log("any before", randomValue);
randomValue = "Now I'm a string";
console.log("any after", randomValue);

//array
let numArray: number[] = [1, 2, 3, 4, 5];
console.log("array", numArray);

//tuple
let tuple: [number, string, boolean] = [1, "Tuple", true];
console.log("tuple", tuple);

//enum
enum Color {
  Red, 
    Green,
    Blue
}
let c: Color = Color.Green;
console.log("enum", c);

//function
function greetUser(name: string): string {
  return `Hello, ${name}!`;
}
console.log("function", greetUser("Alice"));
//if not return anything use void
function logMessage(message: string): void {
  console.log("function", message);
}
logMessage("This is a log message.");


function multiply(a: number, b: number): number {
  return a * b;
}
console.log("function", multiply(5, 3));

//object
let user: { readonly name: string; age: number; phoneNumber?: string } = { name: "Bob", age: 25};
user.phoneNumber = "123-456-7890"; // Error: Property 'phoneNumber' does not exist on type '{ name: string; age: number; }'.
console.log("object", user);

//null and undefined
// let u: undefined = undefined;
// let n: null = null;
// console.log("null and undefined", u, n);
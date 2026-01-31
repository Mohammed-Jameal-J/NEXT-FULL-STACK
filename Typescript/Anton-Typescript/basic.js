var food = "Dosa";
var age = 34;
var isCompleted = true;
var emptyValue = null; //variable is there but value is null
var notDefined = undefined; // variable has no value assigned
console.log("Food: ".concat(food, ", Age: ").concat(age, ", Completed: ").concat(isCompleted));
//array
var travel = ["India", "USA", "UK"];
var marks = [34, 56, 78, 90];
//tuple
var college = ["abc", 1, true];
//any has no type checking and unknown is type safe
//any 
var random = 45;
random = "Hello";
random = true;
//unknown
var value = 10;
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
value = "Hi";
value = false;
//void
function greet() {
    console.log("working");
}
function addEventListener(num1, num2) {
    return num1 * num2;
}
console.log(addEventListener(4, 5));
//never uses in functions that never return a value
function error(message) {
    throw new Error(message);
}
//union and intersection
//union
var bustype = "bus";
bustype = 45;
//intersection
// let empDetails: {name:string} & {age:number};
var empDetails;
// both logic is same 
empDetails = { name: "John", age: 30 };
var person1 = { name: "John", age: 30 };
var emp1 = { name: "Doe", age: 25 };
var degree = {
    name: "mohammed",
    age: 2
};
var future = {
    name: "jameal",
    model: 6
};
//enum
var programming;
(function (programming) {
    programming[programming["python"] = 0] = "python";
    programming[programming["css"] = 1] = "css";
    programming[programming["javascript"] = 2] = "javascript";
})(programming || (programming = {}));
var node = programming.javascript;
console.log(node);

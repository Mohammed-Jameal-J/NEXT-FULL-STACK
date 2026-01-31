let food:string="Dosa";
let age:number=34;
let isCompleted: boolean=true;
let emptyValue: null=null; //variable is there but value is null
let notDefined: undefined=undefined; // variable has no value assigned
console.log(`Food: ${food}, Age: ${age}, Completed: ${isCompleted}`);

//array

let travel:string[]=["India","USA","UK"];
let marks:number[]=[34,56,78,90];

//tuple
let college:[string,number,boolean]=["abc",1,true];

//any has no type checking and unknown is type safe
//any 
let random: any=45;
random="Hello";
random=true;
//unknown
let value: unknown=10;
if(typeof value==="string"){
    console.log(value.toUpperCase());
}
value="Hi";
value=false;
//void
function greet():void{
    console.log("working");   
}
function addEventListener(num1: number,num2:number): number{
    return num1*num2
}
console.log(addEventListener(4,5));
//never uses in functions that never return a value
function error(message:string): never{
    throw new Error(message);
}

//union and intersection
//union
let bustype: number|string="bus";
bustype=45;
//intersection
// let empDetails: {name:string} & {age:number};
let empDetails: {name:string , age:number};
// both logic is same 
empDetails={name:"John",age:30};


//type & interface is for objects
//both are used to define custom types and same functionality
//type need = , interface no need =
//type can use union and intersection but interface cannot
//interface can be merged but type cannot
type person={
    readonly name:string, //readonly cannot be changed
    age:number,
    tocomplete?: boolean //optional property
}
const person1: person={name:"John",age:30};
interface Employee{
    name:string,
    age:number
}
const emp1: Employee={name:"Doe",age:25};


// extends

interface scholl{
    name:String
}
interface collage extends scholl{
    age:number
}
const degree:collage ={
    name:"mohammed",
    age:2
}

// type 

type mobile={
    name: string
}
type laptop= mobile &{
    model:number
}
const future:laptop ={
    name: "jameal",
    model:6
}

//enum

enum programming{
    python,
    css,
    javascript
}

const node: programming = programming.javascript
console.log(node);

//generic => function we not use in varaible 

function userName<T>(value:T):T{
    return value
}
console.log(userName<string>("jameal"));




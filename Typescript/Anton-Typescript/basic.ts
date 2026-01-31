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


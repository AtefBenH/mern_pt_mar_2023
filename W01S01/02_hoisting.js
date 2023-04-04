
// var y
// console.log("y == ",y);
// --- --------- Hoisting.------------

// console.log("Dog : ", dog); //this will log the value of the variable dog

console.log(sayHi()); // this will log the return of the function sayHi
// Note  instead of "var" We will use" const" & "let" to avoid the hoisting problem
const dog = "Rex"; 
console.log("Dog After assigning value = " , dog);
function sayHi(){
    return "Hello 👋"
}

// * How the Interpreter Works 

// var & function
// var declare an empty variable with name == dog (declare a variable without any value == undefined)
// store the function definition

// --var dog
// - function sayHi(){
// -    return "Hello 👋"
// -}
// -  console.log("Dog : ", dog); --> undefined
// -  console.log(sayHi()); ----> "Hello👋"
// - dog = "Rex"
// -console.log("Dog After assigning value = " , dog); ----> Dog After assigning value =  Rex

// 1- Create namespaces 
// 2- Hoisting
// 3- Interpretations & Calculations
// 4- convert everything to String
// 5- run it

// * JIT = Just in Time 
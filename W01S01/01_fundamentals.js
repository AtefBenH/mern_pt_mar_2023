//  JavaScript ??
// Programming Language 
// non-blocking single threaded scripting Language
// ----                     Scope                       ---------

var x  = "hello" // Global Variable === GlobalLY Scoped 

function sayHi () {
    x = "Hi" // Reassigning the global variable x from "Hello" -> "Hi"
    return x
}


function sayHi () {
    var x = "Hi" // creating a local variable x and this variable is Locally Scoped (block Scoped)
    return x
}

console.log(x); // hi
console.log(sayHi()); // hello
console.log(x); // hi
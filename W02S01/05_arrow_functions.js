// --------------------------------------------ARROW FUNCTIONS-----------------------------------------
// console.log("Hoisting",myFunction());

// * Named function
function pow(e) {
    return e**3
}
// console.log("Named function",pow(5))

// * Named function with solution of hoisting
// const myFunction = function pow(e){
//     return e**3
// }
// console.log("My Function",myFunction(5));

// * Anonymous(No Name ii+n it) Function with solution of hoisting
const pow2 = function(e){
    return e**3
}
// console.log("POW2",pow2(5))

// * Arrow Anonymous Function 
// const powArrow = (e) => e**3  //  Implicit Return (one line arrow functions)

// const powArrow = (e) => {return e**3} //  Explicit return must have {}

// console.log("Arrow Pow", powArrow(5));

// ------This keyword ------------*


// * Named function with solution of hoisting
const myFunction = function pow(e){
    console.log(this);
    return e**3
}
// myFunction(5)

const powArrow = (e) => {
    console.log("Arrow !!!!!!",this);
    return e**3
}
powArrow(5)
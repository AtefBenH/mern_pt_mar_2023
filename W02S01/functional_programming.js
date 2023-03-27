// *                                                CALLBACK FUNCTION                                       *\\
// Callback function is a function that's passed as an attribute to another function

// const onlyInt = (f)=>{
//     return integer
// }

// const pow = (e,onlyInt)=>{

// }

// setTimeout(()=>{
//     console.log("Hello from Arrow 👋 After 3 second")
// }, 2000)

// setTimeout( function() { 
//     console.log("start") 
//   }, 3000 );
      
//   console.log("end");

// *                                                MAP                                                             *\\

const array1 = [1,4,6,13];
//  Conventional For Loop
// for (let i =0;i<array1.length; i++){
//     console.log(array1[i]);
// }

//  Fancy For Loop
// array1.map((element, index)=>{
//     console.log("Index == ",index, "Element ==", element);
// })

const doubleArray = array1.map(element=> {return element**2})
// console.log(doubleArray);

// **                                               FILTER                                                          *\\

const animals  = ["leopard 🐆", "giraffe 🦒","zebra 🦓", "elephant 🐘", "monkey 🐵", "lion 🦁"];


const filteredAnimals = animals.filter(element => {
    if(element.length>8){
        return element
    }
})
// console.log(filteredAnimals);

// *                       Combine MAP & FILTER                                 

const animalsWithO = animals.filter(animal => {
    if(animal.includes("o")){
        return animal
    }
}).map(animal => `${animal} ---- contains O 😎`) //String interpolation

const animalsWithOTwo = animals.filter(animal => animal.includes("o")).map(animal => `${animal} ---()-- contains O 😎`) //String interpolation
// console.log(animalsWithOTwo);

const people =[
    {name:"Alex", age:23},
    {name:"Sarah", age:17},
    {name:"Max", age:28},
    {name:"Amelia", age:18},
    {name:"Bob", age:30},
    {name:"Mary", age:16},
    {name:"Sue", age:28},
    {name:"George", age:38},
];

const peopleOver25 = people.filter(person=>person.age>=25)
console.log(peopleOver25);
const a = [10,20,3]
const b = a
// * Arrays & Objects are Complex Data Types -> They are passed by reference not by value

const c = [...a]

a.push(9000)
b.push(2000)
a.push(100000)
console.log("a = ",a); // ? -> a = 10,20,3,9000, 100000
console.log("b = ",b); // ? -> b = 10 20 3 2000, 100000
console.log("c = ",c); // ? -> c = 10 20 3 

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };
  const person2 = {...person}
// const person2 = person
  person["updatedAt"] = "03-22-2023"
  console.log("person == ",person);
  console.log("person2== ",person2);
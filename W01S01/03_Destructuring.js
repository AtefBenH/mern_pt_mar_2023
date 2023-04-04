const favoriteSinger = {
    firstName :"Michael",
    lastName :"Jackson",
    email:"m@j.com",
    bestSong : "Bellie Jean"
};

const xFirstName = favoriteSinger.firstName;
const xLastName = favoriteSinger["lastName"];
// console.log("Standard way to get values from an Object ", xFirstName, xLastName);

// const {firstName,lastName} = favoriteSinger;

//      value    variableName
const {firstName:coolName,lastName} = favoriteSinger;
// console.log("ES6 (DESTRUCTURING) way to get values from an Object ",coolName,lastName);

const singers = ["Michael Jackson","Frank Sinatra", "Lionel Richie","Beth Hart"]

const secondSinger = singers[1]
const thirdSinger = singers[2]

const [,second,third,] = singers
// console.log("Standard = ", secondSinger,thirdSinger ,"***********");
// console.log("DESTRUCTURING = ", second,third, "--------");


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


const {addresses:[,{city}]} = person

console.log("-----",city,"-------");
// import logo from './logo.svg';
import './App.css';

function App() {
  const message = "Hello from App.js **** " // string
  const x = 5; //Number 
  const animals  = ["leopard 🐆", "giraffe 🦒","zebra 🦓", "elephant 🐘", "monkey 🐵", "lion 🦁"]; // Array
  const person = {
    name:"John",
    age:39,     //Object
    favFood:"🍕"
  }
  console.log(animals);
  return (
    <div className="App">
      <h1>Message : {message}</h1>
      <h4>X is equal to {x}</h4>
      <p>{animals}</p>
      <h4>
        {JSON.stringify(person)}
        {/* {JSON.stringify(animals)} */}
      </h4>
      {/* <h4>{person}</h4> */}
      <ul>
        {animals.map((animal,index) =>{return <div key={index}>
          <li>{animal}</li>
          <br />
        </div>
        }
          )}
      </ul>
    </div>
  );
}

export default App;

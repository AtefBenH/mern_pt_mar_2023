import './App.css';
import FunctionalComponent from './components/FunctionalComponent'
import SecondComponent from './components/SecondComponent.jsx'
function App() {
  const message = "Hello from App.js **** " // string
  const x = 5; //Number 
  const animals  = ["leopard 🐆", "giraffe 🦒","zebra 🦓", "elephant 🐘", "monkey 🐵", "lion 🦁"]; // Array
  const person = {
    name:"John",
    age:39,     //Object
    favFood:"🍕"
  }
  // console.log(animals);
  return (
    <fieldset>
      <legend>☸☸ App.js ☸☸</legend>
      <h2>Message : {message}</h2>
      <hr />
      <FunctionalComponent x = {x} pi={3.14} john={person}/>
      <SecondComponent animals={animals}/>
    </fieldset>
  );
}

export default App;

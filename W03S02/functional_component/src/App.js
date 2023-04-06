import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

function App() {
  const favNumber = 7;
  const animals  = ["leopard 🐆", "giraffe 🦒","zebra 🦓", "elephant 🐘", "monkey 🐵", "lion 🦁"]; // Array
  const person = {
    name:"John",
    age:39,     //Object
    favFood:"🍕"
  }
  return (
    <fieldset>
      <legend>App.js</legend>
      <FirstComponent x = {favNumber} john = {person}/>
      <hr />
      <SecondComponent animals={animals}/>
    </fieldset>
  );
}

export default App;

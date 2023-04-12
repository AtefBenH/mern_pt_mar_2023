import './App.css';
import { useState } from 'react';
import Display from './components/Display';
import Form from './components/Form';

function App() {
  const [animals,setAnimals] = useState(["🐵","🐹","🦁"])
  const [people, setPeople] = useState([
    {
      name:"bob",
      age:35,
      favColor:"red"
    },
    {
      name:"john",
      age:39,
      favColor:"blue"
    },
    {
      name:"sarah",
      age:22,
      favColor:"purple"
    }
  ])
  const addPerson = (newPerson) => {
    setPeople([...people,newPerson])
  }
  return (
    <fieldset>
      <legend>App.js</legend>
      <h4>Animals from App.js{JSON.stringify(animals)}</h4>
      <hr />
      <Form animals = {animals} setAnimals = {setAnimals} addPerson={addPerson}/>
      <hr />
      <Display animals={animals} people ={people} />
    </fieldset>
  );
}

export default App;

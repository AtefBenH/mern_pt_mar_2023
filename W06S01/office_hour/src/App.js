import './App.css';
import Display from './components/Display';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  // const [boxes, setBoxes] = useState([
  // "red", //box 1 
  //  "blue", //box 2
  //  "purple"
  // ])
  const [boxes, setBoxes] = useState([
    {color:"red",status:true, content:"Drink Water every 2 hours"}, //box 1 
    {color:"blue", status:false , content:"Go to the gym"}, //box 2
    {color:"purple",status:true , content:"Listen to some music"}
  ])
  //  - Create
  const addBox = (box) =>{
    console.log(box);
    setBoxes([...boxes,box])
  }
  //  - Update
  const updateBox = (index)=>{
    console.log("Update Box number : ", index);
    // ! We cannot mutate state directly (setter function to change the state variable)
    // boxes[index].status = !boxes[index].status
    const copy = [...boxes]
    console.log("Before",copy[index]);
    copy[index].status = !copy[index].status
    console.log("After",copy[index]);
    setBoxes(copy)
  }
  //  - Delete
  const deleteBox = (index)=>{
    console.log("Box to Delete = ", index);
    const filteredBoxes = boxes.filter((box,idx)=>{
      // if(index === idx){
      //   return false
      // }else {return true}
      return index !== idx
    })
    setBoxes(filteredBoxes)
  }
  return (
    <div className="App">
      <Form addBox={addBox}/>
      {/* - Read */}
      <Display boxes = {boxes} updateBox = {updateBox} deleteBox={deleteBox}/>
    </div>
  );
}

export default App;

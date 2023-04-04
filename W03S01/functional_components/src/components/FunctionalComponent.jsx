import React, {useState} from "react";

const FunctionalComponent = (props)=>{
    // const x = props.x
    // const {x} = props
    // ! PROPS is readonly Object cannot be changed
    // -   x  is the state variable 
    // ! State is not mutable
    // - setX is setter function to change the state variable(x)
    // - useState(default value of the state variable x)
    const [x,setX] = useState(props.x)
    // console.log("***** Props from My Parent App.js",props,"*****");
    const y = 22
    const incrementX = () =>{
        // console.log('button Clicked !!!', x);
        setX(x+1)
        // console.log('X Changed!!!', x);
    }
    return (
        <fieldset>
            <legend>🎈🎈 FunctionalComponent.jsx 🎈🎈</legend>
            <h2>PROPS : {JSON.stringify(props)}</h2>
            <h2> X from my Parent App.js (PROPS) = {props.x}</h2>
            <h2> X from my State  = {x}</h2>
            <h3>John's Info : {JSON.stringify(props.john)}</h3>
            <button onClick={()=>{incrementX()}}>Click Me 🧨</button>
            <br />
            <br />
            <button onClick={incrementX}>Click Me 🧨🧨</button>
        </fieldset>
    )
}
export default FunctionalComponent
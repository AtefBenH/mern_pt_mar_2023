import React,{useState} from 'react'

const FirstComponent = (props) => {
    // console.log("PROPS From App.js",props);
    // const [state variable, function to change the state variable] = useState(default value of the state variable)
    const [xState,setXState] = useState(props.x)
    //- 1  Create State for John (object)
    const [john ,setJohn]  = useState(props.john)
    //- 2  Display the state variable
    // -3 Create and test the button 
    // -4 Increment 
    const incrementAge = ()=>{
        //- Use the setter Function setJohn
        // setJohn({age:john.age})
       setJohn({...john,age:john.age+1})
    //    setJohn({name:john.name, favFood:john.favFood,age:john.age+1})
    }
    const incrementX = ()=>{
        // console.log("Pervious X = ",xState);
        setXState(xState + 1) //-  Asynchronous Function : Take some time to be executed
        // console.log("New X = ",xState);
    }
  return (
    <fieldset>
        <legend>FirstComponent</legend>
        <h2>PROPS : {JSON.stringify(props)}</h2>
        <hr />
        <p>X from State : {xState}</p>
        <hr />
        
        <p>John From State :  {JSON.stringify(john)}</p>
        <button onClick={incrementX}>Click Me 🎈</button>
        
        <button onClick={incrementAge}>HappyBirthDay 🎉🎉</button>
        {/* <button onClick={()=>incrementX()}>Click Me 🎈</button> */}
    </fieldset>
    
  )
}

export default FirstComponent
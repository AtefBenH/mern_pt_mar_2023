import React,{useState} from 'react'

const SecondComponent = (props) => {
    console.log("Props second",props);
    const [animals, setAnimals] = useState(props.animals)
    const addRaccoon = ()=>{
        setAnimals([...animals,"Raccoon 🦝"])
    }
  return (
    <fieldset>
        <legend>SecondComponent</legend>
        <h2>PROPS : {JSON.stringify(props)}</h2>
        <ul>
            {animals.map((animal,index)=>{
                return(
                    <div key={index}>
                       <li>{animal}</li> 
                       <br />
                    </div>
                )
            })}
        </ul>
        <button onClick={addRaccoon}>A Raccoon 🦝</button>
    </fieldset>
  )
}

export default SecondComponent
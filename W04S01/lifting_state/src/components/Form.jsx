import React,{useState} from 'react'

const Form = (props) => {
    // console.log(props);
    const [newAnimal, setNewAnimal] = useState("")
    const formHandler = (e)=>{
        e.preventDefault()
        console.log(newAnimal);
        // const newAnimals = [...props.animals]
        // newAnimals.push(newAnimal)
        // console.log();
        // props.setAnimals(newAnimals)
        props.setAnimals([...props.animals,newAnimal])
        setNewAnimal("")
    }
    // !--------------------------------------------
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [favColor, setFavColor] = useState("")
    const personFormHandler = (e)=>{
        e.preventDefault()
        const newPerson = {
            name :name,
            age:age,
            favColor:favColor
        }
        console.log(`New Person = ${newPerson.favColor}`);
        props.addPerson(newPerson)
        setName("")
        setAge(0)
        setFavColor("")
    }
  return (
    <fieldset>
        <legend>Form</legend>
        <p>{JSON.stringify(props)}</p>
        <hr />
        <p>New Animal : {JSON.stringify(newAnimal)}</p>
        <form onSubmit={formHandler}>
            Add Animal <input onChange={(e)=>setNewAnimal(e.target.value)}
            value={newAnimal} //! Double binding
            /> 
            <button>Add</button>
        </form>
        <hr />
        <form onSubmit={personFormHandler}>
            <p>
                name : {JSON.stringify(name)} <br />
                age :  {JSON.stringify(age)} <br />
                favColor :  {JSON.stringify(favColor)}
            </p>
            Name : <input onChange={(e)=>setName(e.target.value)}
            value={name}
            /> <br />
            Age : <input type='Number' onChange={(e)=>setAge(e.target.value)}
            value={age}/> <br />
            Favorite Color : <input type="color" onChange={(e)=>setFavColor(e.target.value)}
            value={favColor}
            /> <br />
            <button>Create User</button>
        </form>
    </fieldset>
  )
}

export default Form
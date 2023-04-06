import React , {useState}from 'react'
import Display from './Display'



const Form = () => {
    // ! Every input must have State variable
    const [username,setUsername] = useState("")
    const [usernameError, setUsernameError] = useState(false)
    const [age,setAge] = useState(0)
    const [favFood,setFavFood] = useState("")
    const createUser = (e)=>{
        e.preventDefault();
    }
    const handleUserName = (e)=>{
        console.log(e.target.value);
        if(e.target.value.length<3){
            setUsernameError(true)
        }else {
            setUsernameError(false)
            setUsername(e.target.value)
        }
    }
  return (
    <fieldset>
        <legend>Form</legend>
        <p>
            UserName = {JSON.stringify(username)} <br />
            Age = {JSON.stringify(age)} <br />
            favFood = {JSON.stringify(favFood)} <br />
        </p>
        <hr />
        <form onSubmit={createUser}>
            {/* <p>Username : <input onChange={(e)=>setUsername(e.target.value)}/></p>  */}
            {usernameError?<p style={{color:"red"}}>Username must be more than 3 </p>:""}
            <p>Username : <input onChange={(e)=>handleUserName(e)}/></p> 
            <p>Age : <input type="number" onChange={(e)=>setAge(e.target.value)} /></p>
            <p>Favorite Food : <input onChange={(e)=>setFavFood(e.target.value)} /></p>
            <button>Create</button>
        </form>
        {/* <Display/> */}
    </fieldset>
  )
}

export default Form
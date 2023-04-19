import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {
    const navigate = useNavigate()
    const [heroID,setHeroId] = useState(1)
    const handleForm = (e)=>{
        e.preventDefault()
        console.log("Hero ID = ", heroID);
        // setHeroId(1)
        navigate(`/hero/${heroID}`)
    }
  return (
    <fieldset>
        <legend>Form</legend>
        <form onSubmit={handleForm}>
            <label >Hero ID : </label>
            <input onChange={(e)=>setHeroId(e.target.value)} value={heroID} />
            <button>Search</button>
        </form>
    </fieldset>
  )
}

export default Form
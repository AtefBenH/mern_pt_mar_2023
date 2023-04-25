import React,{useState} from 'react'

const Form = (props) => {
    // const [box,setBox] = useState("")
    const [box,setBox] = useState({color:"",status:false, content:""})
    const formHandler = (e)=>{
        e.preventDefault()
        props.addBox(box)
        setBox({color:"",status:false,  content:""})
    }
  return (
    <fieldset>
        <legend>Form</legend>
        <form onSubmit={formHandler}>
            Color : <input onChange={(e)=>setBox({...box,color:e.target.value})} value={box.color}/> <br />
            Content : <input onChange={(e)=>setBox({...box,content:e.target.value})} value={box.content}/>
            <button>Add</button>
        </form>
    </fieldset>
  )
}

export default Form
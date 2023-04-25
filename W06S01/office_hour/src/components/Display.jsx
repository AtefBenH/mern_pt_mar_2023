import React from 'react'

const Display = (props) => {
    const {boxes} = props
    return (
        <fieldset>
            <legend>Display</legend>
            <h4>Boxes : {JSON.stringify(boxes)}</h4>
            {
                boxes.map((box,index)=>
                <div key={index}
                style={{
                    backgroundColor:box.color,
                    width:"200px",
                    height:"200px",
                    display:"inline-block",
                    margin:"5px",
                    textDecoration:box.status?"line-through":"None"
                }} 
                >
                    {box.color}
                    <input type="checkbox" checked = {box.status} onChange={()=>props.updateBox(index)}/>
                    <button onClick={()=>{
                        props.deleteBox(index)
                    }}
                    >Delete</button>
                    <h4>{box.content}</h4>
                </div>
                )
            }
        </fieldset>
    )
}

export default Display
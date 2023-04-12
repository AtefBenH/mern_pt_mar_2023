import React from 'react'

const Display = ({animals,people}) => {
  return (
    <fieldset>
      <legend>Display.jsx</legend>
      {/* {
        animals.map((animal, Index)=>
        <li key={Index}> {Index}-- {animal}</li>
        )
      } */}
      {
        people.map((person,index)=>{
          return(
          <div key={index} style={{backgroundColor :person.favColor}} >
            <h4>Name : {person.name}</h4>
            <h4>Age : {person.age}</h4>
            <hr />
          </div>)
        })
      }
    </fieldset>
    
  )
}

export default Display
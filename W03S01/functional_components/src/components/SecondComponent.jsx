import React from 'react'

const SecondComponent = (props) => {
  return (
    <fieldset>
      <h2>PROPS FROM APP.JS : {JSON.stringify(props)}</h2>
        <legend>🎆🎆 SecondComponent.jsx 🎆🎆</legend>
        {props.animals.map((animal, index)=>{return(
          <h4 key={index}>* {index} --- {animal}</h4>
        )})}
    </fieldset>
  )
}

export default SecondComponent
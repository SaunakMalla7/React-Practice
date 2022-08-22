import React from 'react'
import './Person.css'
const Person = (props) => {
  return (
    <div className="Person">
        <p onClick={props.click}>I'm {props.name} and i am {props.age} years old!</p>
       {/* Children Property of props */}
        <p>{props.children}</p>
        {/* two way binding for only menu */}
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default Person
import React from 'react'


export default function Overview(props) {
  return (
    <div>

        <div><i className={props.icon}></i></div>
    
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

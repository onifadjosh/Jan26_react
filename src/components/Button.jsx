import React from 'react'

const Button = ({title, color, func}) => {

  

    const shout=(name)=>{
        alert(`hello ${name}`)
    }
  return (
    <button className={`btn ${color}`} onClick={func}>
       {title}
       
    </button>
   
  )
}

export default Button
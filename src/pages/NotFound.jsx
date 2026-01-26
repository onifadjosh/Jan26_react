import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    const getBack=()=>{
        navigate('/about', {replace:true})
    }
  return (
    <div>
        <h1>Sorry we couldn't find what you are looking for</h1>

        <button onClick={()=>getBack()} className='btn btn-dark'>Go Home</button>
    </div>
  )
}

export default NotFound
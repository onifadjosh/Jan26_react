import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseNum, increaseNumBySome } from '../redux/appSlice'

const Contact = () => {
  const username= useSelector((state)=>state.appSlice.userName)
  const count = useSelector((state)=>state.appSlice.number)

  let dispatch = useDispatch()
  return (
    <div>This is contact page {username} with count

    <h1> {count}</h1>
    
    
    
    
    <button className='btn btn-dark' onClick={()=>dispatch(increaseNum())}>Increase Number</button>


    <button className='btn btn-dark' onClick={()=>dispatch(increaseNumBySome(10))}>Increase Number by some</button>
    
    
    </div>
  )
}

export default Contact
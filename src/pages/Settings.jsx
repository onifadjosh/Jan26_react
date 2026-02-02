import React from 'react'
import { useParams } from 'react-router-dom'

const Settings = () => {
    let params = useParams()
   const {username}= params
    
  return (
    <div>Settings for {username}</div>
  )
}

export default Settings
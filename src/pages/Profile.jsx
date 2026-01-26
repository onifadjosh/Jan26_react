import React from 'react'
import { useParams } from 'react-router-dom';

const Profile = () => {
    const params = useParams()
    // console.log(params);
    const{username}= params
  return (
    <div>This is profile page for:{username}</div>
  )
}

export default Profile
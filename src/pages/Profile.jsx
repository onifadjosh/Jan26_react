import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Profile = () => {
  const [User, setUser] = useState('')
  const cookies= new Cookies()


  const login=(token)=>{
    const decoded = jwtDecode(token)
    console.log(decoded);
    

    setUser(decoded)


    cookies.set('jwt_token', token, {
      expires: new Date(decoded.exp *1000)
    })
  
  }
    const params = useParams()
    // console.log(params);
    const{username}= params
  return (
    <div>This is profile page for:{username}</div>
  )
}

export default Profile

//on login
//->decode token , set user state to decoded -> set cookie



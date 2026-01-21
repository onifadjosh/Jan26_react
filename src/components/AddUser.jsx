import React, { useState } from 'react'

const AddUser = ({ submitUser}) => {
    const [firstName, setfirstName] = useState("");
      const [lastName, setlastName] = useState("");
      const [Email, setEmail] = useState("");
      const [picture, setpicture] = useState("");
  

      
  return (
    <div>
        <input
        type="text"
        placeholder="Firstname"
        onChange={(e) => setfirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Lastname"
        onChange={(e) => setlastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="picture"
        onChange={(e) => setpicture(e.target.value)}
      />

      <button onClick={()=>submitUser({firstName, lastName, Email, picture})}>Submit</button>
    </div>
  )
}

export default AddUser
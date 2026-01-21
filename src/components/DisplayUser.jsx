import React, { useState } from 'react'

const DisplayUser = ({allUsers, deleteUser, editUser}) => {
      const [firstName, setfirstName] = useState("");
      const [lastName, setlastName] = useState("");
      const [Email, setEmail] = useState("");
      const [picture, setpicture] = useState("");
    const [currentIndex, setcurrentIndex] = useState(null)

    
  return (
    <div>

<div className="d-flex flex-wrap gap-2">
        {allUsers.map((user, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img src={user.picture} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{user.firstName}</h5>
              <p className="card-text">{user.Email}</p>
              <button onClick={()=>setcurrentIndex(index)} className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                edit
              </button>

              <button
                onClick={() => deleteUser(index)}
                className="btn btn-danger"
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
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
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={()=>editUser(currentIndex, {firstName, lastName, Email, picture})} data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}

export default DisplayUser
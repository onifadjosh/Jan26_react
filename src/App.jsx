// import React, { useState } from "react";
// import Button from "./components/Button";

// const App = () => {

//   //add user, display user

//   //call modal->collect current index->
// const [firstName, setfirstName] = useState("");
// const [lastName, setlastName] = useState("");
// const [Email, setEmail] = useState("");
// const [picture, setpicture] = useState("");
// const [allUsers, setallUsers] = useState([]);
//   const [currentIndex, setcurrentIndex] = useState(null)

//   // const watchInput=(event)=>{
//   //   console.log(event.target.value);
//   //   setfirstName(event.target.value)

//   // }

//   const submitUser = () => {
//     let user = {
//       firstName,
//       lastName,
//       Email,
//       picture,
//     };

//     console.log(user);
//     // setallUsers(user)
//     setallUsers([...allUsers, user]);
//     // let fruits = ["mango", 'apple', "orange"]
//     // let newFruits = [...fruits, 'cashew']
//   };

// const deleteUser = (index) => {
//   console.log(index);
//   let newAllUsers = [...allUsers];
//   newAllUsers.splice(index, 1);

//   setallUsers(newAllUsers);
// };

// const editUser=(index)=>{
//   let newAllUsers=[...allUsers];
//   let user = {
//     firstName,
//     lastName,
//     Email,
//     picture,
//   };
//   console.log(index)
//   console.log(user);

//   newAllUsers.splice(index, 1, user)
//   setallUsers(newAllUsers)
// }

//   const shouthello=()=>{
//     console.log('hello');

//   }

//   return (
//     <>

//     <Button title="click" color="btn-primary" func={shouthello}/>
//     <Button title="press" color="btn-warning" />
//     <Button title="save" color="btn-dark"/>

//       <input
//         type="text"
//         placeholder="Firstname"
//         onChange={(e) => setfirstName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Lastname"
//         onChange={(e) => setlastName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="picture"
//         onChange={(e) => setpicture(e.target.value)}
//       />

//       <button onClick={submitUser}>Submit</button>

//       <hr />

// <div className="d-flex flex-wrap gap-2">
//   {allUsers.map((user, index) => (
//     <div className="card" style={{ width: "18rem" }} key={index}>
//       <img src={user.picture} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{user.firstName}</h5>
//         <p className="card-text">{user.Email}</p>
//         <button onClick={()=>setcurrentIndex(index)} className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">
//           edit
//         </button>

//         <button
//           onClick={() => deleteUser(index)}
//           className="btn btn-danger"
//         >
//           delete
//         </button>
//       </div>
//     </div>
//   ))}
// </div>

// <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div className="modal-dialog">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div className="modal-body">
//       <input
//         type="text"
//         placeholder="Firstname"
//         onChange={(e) => setfirstName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Lastname"
//         onChange={(e) => setlastName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="picture"
//         onChange={(e) => setpicture(e.target.value)}
//       />
//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" className="btn btn-primary" onClick={()=>editUser(currentIndex)} data-bs-dismiss="modal">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import AddUser from "./components/AddUser";
// import DisplayUser from "./components/DisplayUser";

// const App = () => {
//   const [allUsers, setallUsers] = useState([]);

//   const deleteUser = (index) => {
//     console.log(index);
//     let newAllUsers = [...allUsers];
//     newAllUsers.splice(index, 1);

//     setallUsers(newAllUsers);
//   };
//   const submitUser = (userData) => {
//     // console.log(user);
//     // setallUsers(user)
//     setallUsers([...allUsers, userData]);
//     // let fruits = ["mango", 'apple', "orange"]
//     // let newFruits = [...fruits, 'cashew']
//   };
//   const editUser=(index, userData)=>{
//     let newAllUsers=[...allUsers];
    
//     console.log(index)
//     // console.log(user);
    
//     newAllUsers.splice(index, 1, userData)
//     setallUsers(newAllUsers)
//   }


//   return (
//     <div>
//       <AddUser allUsers={allUsers} submitUser={submitUser} />
//       <DisplayUser allUsers={allUsers} deleteUser={deleteUser} editUser={editUser}/>
//     </div>
//   );
// };

// export default App;


import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Layout from './pages/Layout'
import Settings from './pages/Settings'
import Formikk from './pages/Formikk'
import ListProduct from './pages/ListProduct'
import Login from './pages/Login'

const App = () => {
  return (
    <>
    {/* <Navbar/> */}
      <Routes>
          <Route path='/about' element={<About/>}/>

          
          <Route path='/news' element={<Navigate to={"/about"}/>}/>
          <Route path='/formik' element={<Formikk/>}/>
          <Route path='/list-prod' element={<ListProduct/>}/>
          <Route path='/login' element={<Login/>}/>

          <Route path='/profile/:username' element={<Profile/>}/>


          <Route path="/admin" element={<Layout/>}>
          <Route path='contact' element={<Contact/>}/>
          <Route path='settings/:username' element={<Settings/>}/>

          </Route>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App

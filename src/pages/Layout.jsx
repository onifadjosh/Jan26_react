import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {

    let name = "pampam"
  return (
    <div className='d-flex '>
        <div className='sidebar bg-dark text-light d-flex flex-column ' style={{width:"20%", height:"100vh"}}>


        <Link to={'contact'} className='text-light text-center'>Contact</Link> <br />
        <Link to={`/admin/settings/${name}`} className='text-light text-center'>Settings</Link>

        </div>

        <div className='main_content' style={{width:'80%'}}>
        <Outlet/>
        </div>
    </div>
  )
}

export default Layout
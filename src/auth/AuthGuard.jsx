import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'

const AuthGuard = ({isAuth, children, redirect='/login'}) => {
    // const navigate = useNavigate()
  if(!isAuth){
    return <Navigate to={redirect}/>
    
  }

  return children?children:<Outlet/>
}

export default AuthGuard
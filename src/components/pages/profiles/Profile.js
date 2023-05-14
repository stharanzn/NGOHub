import React from 'react'
import '../../../stylesheets/profile.css'
import { useAuth } from '../../utils/auth'
import { useNavigate } from 'react-router-dom'

export default function Profile() {

  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () =>{
    auth.logout();
    navigate('/');

  }

  return (
    <>  
        <div className='cover'>
        <div>welcome {auth.user}</div>
          

          <button onClick={handleLogout}>Logout</button>
        </div>
          

    </>
  )
}

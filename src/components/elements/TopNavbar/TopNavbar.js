import React from 'react'
import { NavLink } from 'react-router-dom'
import './topnavbar.scss'
import { useAuth } from '../../utils/auth'


export default function TopNavbar() {

  const auth = useAuth();
  

  return (

    <>
    <header>
        <h2><NavLink to="/" ><i class="ion-plane "></i> NGOhub</NavLink></h2>
        <nav>
          <ul>            
            <li>
              {auth.userRole == null &&(
                <NavLink to="/findNgos">Find NGO's</NavLink>
              )}
              {auth.userRole != null && auth.userRole === "volunteer" &&(
                  <NavLink to="/findNgos" >Find NGO's</NavLink>
              )}
              {auth.userRole != null && auth.userRole === "ngo" && (
                <NavLink to="/findVolunteers">Find Volunteers</NavLink>
              )} 
              
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              {!auth.user && (
              <NavLink to="/volunteer_auth">Join as Volunteer</NavLink>
              )}

              {auth.user && auth.userRole === "volunteer" && (
                <NavLink to={`/volProfile/${auth.user}`}>{auth.user}</NavLink>
              )}
              
            </li>
            <li>
              {!auth.user && (
              <NavLink to="/ngo_auth">Join as NGO</NavLink>
              )}
              {auth.user && auth.userRole === "ngo" && (
                <NavLink to={`/ngoProfile/${auth.user}`}>{auth.user}</NavLink>
              )}
              
            </li>
            
          </ul>
        </nav>


      </header>
      {console.log(window.location.pathname)}

      </>

      


  )
}

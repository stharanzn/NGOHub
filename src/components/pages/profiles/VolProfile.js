import React from 'react'
import './profile.scss'
import { useAuth } from '../../utils/auth'
import { useNavigate } from 'react-router-dom'
import EditButton from './EditButton'



export default function VolProfile() {

  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = () =>{
    auth.logout();
    navigate('/');

  }

  return (
    <>  
	<div className='profileBody'>
	<div class="topHead">
      <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="John Doe" class="profile-image"/>
      <h1 class="tag name">Hello, I’m John.</h1>
      <p class="tag location">My home is New York, California.</p>
    </div>
         <main class="flex">
      <div class="card">
        <h2>Background</h2>
        <p>I’m an aspiring web developer who loves everything about the web. I've lived in lots of different places and have worked in lots of different jobs. I’m excited to bring my life experience to the process of building fantastic looking websites.</p>
        <p>I'm a life-long learner who's always interested in expanding my skills.</p>
      </div> 

      <div class="card">
        <h2>Goals</h2>
        <p>I want to master the process of building web sites and increase my knowledge, skills and abilities in:</p>
        <ul class="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ExpressJS</li>
          <li>ReactJS</li>
        </ul>
        <p>I’d like to work for a web development firm helping clients create an impressive online presence.</p>
      </div> 

    </main>
  
	   <button onClick={handleLogout}>logout</button>
	   </div>

    </>
  )
}

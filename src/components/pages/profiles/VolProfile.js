import React from 'react'
import './profile.scss'
import { useAuth } from '../../utils/auth'
import { useNavigate } from 'react-router-dom'




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
      <h1 class="tag name">{auth.user}</h1>
      <p class="tag location">Fostering a stronger and more inclusive community for all.</p>
    </div>
         <main class="flex">
      <div class="card">
        <h2>Background</h2>
        <p>I'm a dedicated volunteer with a passion for making a difference. With a heart for service and a desire to help others, I actively contributes to various community initiatives. My commitment to creating positive change shines through my work.</p>
        <p>I bring a positive attitude and a willingness to lend a hand wherever needed. I believe in the power of collective action and strive to inspire others to join me in making a meaningful impact. My enthusiasm and dedication make me a valuable asset to any project or organization.</p>
      </div> 

      <div class="card">
        <h2>Goals</h2>
        <ol>
          <li>Contribute to the mission and objectives of the NGO by actively participating in volunteer activities and projects.</li>
          <li>Support and advocate for the cause or social issue that the NGO focuses on.</li>
          <li>Help create a positive impact on the lives of individuals or communities served by the NGO.</li>
          <li>Collaborate with fellow volunteers, staff, and community members to achieve common goals and objectives.</li>

          </ol>
        <ul class="skills">
          <li>Helpful</li>
          <li>Positive</li>
          <li>Contributor</li>
        </ul>
        {/* <p>I’d like to work for a web development firm helping clients create an impressive online presence.</p> */}
      </div> 

    </main>
  
	   <button onClick={handleLogout}>logout</button>
	   </div>

    </>
  )
}

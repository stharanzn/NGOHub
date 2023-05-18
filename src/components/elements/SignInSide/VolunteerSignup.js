import React from 'react'
import "./signIn_up.scss"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../utils/auth';
import User from "../../../assets/models/User"


export default function VolunteerSignup() {
    const navigate = useNavigate();
    const auth = useAuth();

    function isValidEmail(email) {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      return emailRegex.test(email);
    }

    // function validateUser(username, pass){
    //   if(username === "test" && pass === "test"){
    //     return true
    //   }else{
    //     return false
    //   }
    // }

    const login = async () =>{
      const email = document.getElementById('email-login').value
      const pass = document.getElementById('password-login').value

      if(isValidEmail(email)){
        const user = {"email": email,"password": pass, "role": "volunteer"}
        await auth.login(user)         

      }else{
        alert("invalid email")
      }

    }

    const signup = () =>{
      const email = document.getElementById('email').value
      const username = document.getElementById('username-signup').value
      const mobNo = document.getElementById('mob-number-signup').value
      const password = document.getElementById('password-signup').value
      const repass = document.getElementById('re-password-signup').value
      const tnc = document.getElementById('confirm-terms').checked

      console.log(isValidEmail(email))



      if(tnc && email != null  && username != null && mobNo != null && password !== null && repass !== null){
        if(isValidEmail(email)){
            if(password === repass){
              // const newVolunteer = new User(username, password, email, mobNo, null, null, "volunteer", null)
              const user = {"username": username, "password": password, "email": email, "role": "volunteer", "mobNo":mobNo, "uid":null, "profilePic": false}
              auth.create(user)
              // navigate('/', {replace:true})
            }else{
              alert("passwords do not match")
            }
          
        }
            
      }else{
          if(!tnc){
            alert("Please accept the terms and conditions.")
          }
      }
    }

    const goRight = () =>{
        
        document.getElementById('slideBox').style.marginLeft = "0"
        document.querySelector('.topLayer').style.marginLeft = "100%"
    }

    const goLeft = () =>{
        
        document.getElementById('slideBox').style.marginLeft = "50%"
        document.querySelector('.topLayer').style.marginLeft = "0"
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform any necessary logic or submit the form data
      };

  return (
    <>
        <div id="back">
  <canvas id="canvas" class="canvas-back"></canvas>
  <div class="backRight">    
  </div>
  <div class="backLeft">
  </div>
</div>

<div id="slideBox">
  <div class="topLayer">
    <div class="left">
      <div class="content">
        <h2>Sign Up as Volunteer</h2>
        <form id="form-signup" method="post" onSubmit={handleSubmit} onsubmit="return false;">
        <div class="form-element form-stack">
            <label for="username-signup" class="form-label">Username</label>
            <input id="username-signup" type="text" name="username" />
          </div>
          <div class="form-element form-stack">
            <label for="email" class="form-label">Email</label>
            <input id="email" type="email" name="email" />
          </div>


          <div class="form-element form-stack">
            <label for="password-signup" class="form-label">Password</label>
            <input id="password-signup" type="password" name="password" />
          </div>
          <div class="form-element form-stack">
            <label for="re-password-signup" class="form-label">Re-Enter password</label>
            <input id="re-password-signup" type="password" name="password" />
          </div>
          <div class="form-element form-stack">
            <label for="mob-number" class="form-label">Mobile No.</label>
            <input id="mob-number-signup" type="text" name="mob_no" />
          </div>

          <div class="form-element form-checkbox">
            <input id="confirm-terms" type="checkbox" name="confirm" value="yes" class="checkbox"/>
            <label for="confirm-terms">I agree to the <a href="/terms_of_service">Terms of Service</a> and <a href="/privacy_policy">Privacy Policy</a></label>
          </div>
          <div class="form-element form-submit">
            <button onClick={signup} id="signUp" class="signup" type="submit" name="signup">Sign up</button>
            <button onClick={goLeft} id="goLeft" class="signup off">Log In</button> 
          </div>
        </form>
      </div>
    </div>
    <div class="right">
      <div class="content">
        <h2>Login as Volunteer</h2>
        <form id="form-login" method="post" onSubmit={handleSubmit} onsubmit="return false;">
          <div class="form-element form-stack">
            <label for="email-login" class="form-label">Email</label>
            <input id="email-login" type="email" name="email"/>
          </div>
          <div class="form-element form-stack">
            <label for="password-login" class="form-label">Password</label>
            <input id="password-login" type="password" name="password"/>
          </div>
          <div class="form-element form-submit">
            <button onClick={login} id="logIn" class="login" type="submit" name="login">Log In</button>
            <button onClick={goRight} id="goRight" class="login off" name="signup">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
{/* <script src='./signin_upjs.js'></script> */}

    </>
  )
}

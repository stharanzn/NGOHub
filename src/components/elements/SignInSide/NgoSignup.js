import React from 'react'
import "./signIn_up.scss"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../utils/auth';


export default function NgoSignup() {
    const navigate = useNavigate();
    const auth = useAuth();

    function isValidEmail(email) {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      return emailRegex.test(email);
    }

    const login = () =>{
      const email = document.getElementById('email-login').value
      const pass = document.getElementById('password-login').value
      console.log(email + " " + pass)

      if(isValidEmail(email, pass)){
        const data = {"email":email, "password":pass, "role": "ngo"}
        auth.login(data)
        
      }

    }


    const signup = () =>{
      const orgName = document.getElementById('org-name').value
      const orgBio = document.getElementById('org-bio').value
      const orgEmail = document.getElementById('org-email').value
      const orgMob = document.getElementById('mob-number-signup').value
      const password = document.getElementById('password-signup').value
      const repass = document.getElementById('re-password-signup').value
      const mission = document.getElementById('org-mission').value
      const regNo = document.getElementById('org-reg-no').value
      const loc = document.getElementById('org-loc').value
      const tnc = document.getElementById('confirm-terms').checked
      const ngoSignup = {
        uid: "",
        role: "ngo",
        orgName: orgName,
        orgBio: orgBio,
        orgEmail, orgEmail,
        orgMob: orgMob,
        pass : password,
        mission: mission,
        regNo: regNo,
        loc: loc,
        orgPic: "https://images.pexels.com/photos/753267/pexels-photo-753267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        isProfileComplete: true
      }

      console.log(isValidEmail(orgEmail))    

      if(tnc && orgBio != null && mission != null && regNo != null && loc != null && orgEmail != null  && orgName != null && orgMob != null && password != null && password === repass){
        if(isValidEmail(orgEmail)){
          // console.log(ngoSignup )
          auth.create(ngoSignup)
          // navigate(`/ngoProfile/${orgName}`, {replace:true})
        }

            
      }else{
          if(password !== repass){
            alert("Passwords do not match.")
          }

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
        <h2>Sign Up as NGO</h2>
        <form id="form-signup" method="post" onSubmit={handleSubmit} onsubmit="return false;">

<div class="form-element form-stack">
    <label for="org-name" class="form-label">Organization Name</label>
    <input id="org-name" type="text" name="orgname"/>
</div>

<div class="form-element form-stack">
    <label for="org-bio" class="form-label">Organization Bio:- </label>
    <input placeholder='short bio of your NGO' id="org-bio" type="text" name="orgBio"/>
</div>

<div class="form-element form-stack">
  <label for="org-email" class="form-label">Email</label>
  <input id="org-email" type="email" name="email"/>
</div>

<div class="form-element form-stack">
  <label for="password-signup" class="form-label">Password</label>
  <input id="password-signup" type="password" name="password"/>
</div>
<div class="form-element form-stack">
  <label for="re-password-signup" class="form-label">Re-Enter password</label>
  <input id="re-password-signup" type="password" name="password"/>
</div>

<div class="form-element form-stack">
  <label for="mob-number" class="form-label">Mobile No.</label>
  <input id="mob-number-signup" type="text" name="mob_no"/>
</div>
<div class="form-element form-stack">
  <label for="mission" class="form-label">Mission</label>
  <input placeholder='No child will sleep hungry.' id="org-mission" type="text" name="mission"/>
</div>
<div class="form-element form-stack">
  <label for="regNo" class="form-label">Registraion No.</label>
  <input placeholder='Ex: ABC123456' id="org-reg-no" type="text" name="tegNo"/>
</div>
<div class="form-element form-stack">
  <label for="loc" class="form-label">Location</label>
  <input placeholder='City, state' id="org-loc" type="text" name="loc"/>
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
        <h2>Login as NGO</h2>
        <form id="form-login" method="post" onSubmit={handleSubmit} onsubmit="return false;">
          <div class="form-element form-stack">
            <label for="email-login" class="form-label">Email</label>
            <input id="email-login" type="text" name="username"/>
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




import React from 'react'

import '../../stylesheets/contact.scss'

export default function contact() {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary logic or submit the form data
  };

  return (
    <>
  <div className='contactBody'>
    <div class="wrapper">
    <div class="container">
      <div class="address">
        <p>Block 1 Old Boys Hostel<br/>VIT Bhopal</p>
      </div>
      <div class="address">
        <p>Group234<br/>@vitbhopal.ac.in</p>
      </div>
      <h1>Contact Us</h1>
      <div class="thanks"><p>We'll be in touch soon,</p> </div>
        <div class="pen"></div>
    <form id="contact_form" action="#" method="POST" onSubmit={handleSubmit} enctype="multipart/form-data">
      <div class="row">
        <label for="name">Your name:</label><br />
        
          <div class="inputwrap"><input id="name" class="input" name="name" type="text"  size="30"></input><div class="bar"></div></div><br />
        
      </div>
      <div class="row">
        <label for="email">Your email:</label><br /><div class="inputwrap">
        <input id="email" class="input" name="email" type="text"  size="30" />
        <div class="bar"></div></div>
        <br />
      </div>
      <div class="row">
        <label for="message">Your message:</label><br />
        <div class="inputwrap"><input type="textarea" /><div class="bar"></div></div><br />
      </div>
      <div class="btnwrap"><input id="submit_button" type="submit" value="Do a thing!" /></div>
    </form>			
    </div>
    </div>
    </div>

    </>
  )
}

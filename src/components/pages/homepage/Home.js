import React, {useState} from 'react'
import "./homepage.scss"



export default function Home() {

  const[testVar, setTestVar] = useState(false);

  if(testVar){
    console.log("noice")
    setTestVar(false);
  }
  
  return (
    <>


        <div className='cover transparentBg' style={{color:"black"}}>
          <span className='line1'>Create an impact: </span>
          <br/>
          <span className='line2'>Find NGOs where even small contributions can make a big difference.</span>
        
        </div>
        <div className='cover page2' style={{color:"black"}}>

          Home Page
          
          </div>
        <div className='cover page3' style={{color:"black"}}>Home Page</div>
        
    </>

  )
}

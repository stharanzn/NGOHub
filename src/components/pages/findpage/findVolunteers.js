import React, {useState} from 'react'
import DisplayCard from '../../elements/displayCard/DisplayCard'

export default function FindVolunteers() {

  const [query, setQuery] = useState("local%20nogs%20near%20me")

  const testNgoList = [{name: "Somejyoti Mukherjee", url: 'https://www.slazzer.com/downloads/a46034a2-f5fd-11ed-b181-42010a800009/volunteer-story-2%5B2%5D_prev_ui.png?compress=1&resize=800x900',
desc: "For Human Rights ", loc: "Kolkata"
}, {name: "Gargi Mishra", url: "https://www.slazzer.com/downloads/68f40a56-f5fd-11ed-b114-42010a80000a/volunteer-story-4%5B1%5D_prev_ui.png?compress=1&resize=600x600",
desc: "Awareness campaign", loc: "Chennai"},
{name: "Arpna Joshi", url: "https://indiastaging.cry.in/wp-content/themes/cry/images/volunteer-testimonial-2.jpg?compress=1&resize=600x600",
desc: "NGos which provide food to people", loc: "Bengluru"
},{name: "Mohd Zeeshan ", url: "https://indiastaging.cry.in/wp-content/uploads/2020/07/volunteer-story-1.jpg?compress=1&resize=800x800",
desc: "Help children for their future", loc: "Rajsthan"
}]


  return (
    <>
    
    <div className='findVolunteerWrapper'>    
   
      
   {
     
     testNgoList.map((item, index)=>{
       return <DisplayCard prop={testNgoList[index]}/>
     })

   }
</div>
    </>
  )
}

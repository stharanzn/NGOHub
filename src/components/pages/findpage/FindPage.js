import React, {useState, useEffect} from 'react'
import "./findpage.scss"
import DisplayCard from '../../elements/displayCard/DisplayCard';

export default function FindPage() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("local%20nogs%20near%20me")
  const [ngoList, setNgoList] = useState([])

//   const testNgoList = [{name: "test1", url: "https://images.pexels.com/photos/753267/pexels-photo-753267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       desc: "test description for the test1 ngo"
// }, {name: "test2", url: "https://images.pexels.com/photos/726478/pexels-photo-726478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// desc: "test description for the test2 ngo"},
// {name: "test1", url: "https://images.pexels.com/photos/753267/pexels-photo-753267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       desc: "test description for the test1 ngo"
// },{name: "test1", url: "https://images.pexels.com/photos/753267/pexels-photo-753267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// desc: "test description for the test1 ngo"
// },{name: "test1", url: "https://images.pexels.com/photos/753267/pexels-photo-753267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// desc: "test description for the test1 ngo"
// },{name: "test1", url: "https://images.pexels.com/photos/753267/pexels-photo-753267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// desc: "test description for the test1 ngo"
// },{name: "test1", url: "https://images.pexels.com/photos/753267/pexels-photo-753267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// desc: "test description for the test1 ngo"
// },{name: "test1", url: "https://images.pexels.com/photos/753267/pexels-photo-753267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// desc: "test description for the test1 ngo"
// }]
const testNgoList = [{name: "GridHelpers", url: 'https://cdn.dribbble.com/users/3480894/screenshots/18024558/media/013ff772998d82d04ad3e9b0642770d2.png?compress=1&resize=840x630&vertical=top',
desc: "Responding to natural disasters and providing relief and recovery efforts", loc: "Mumbai"
}, {name: "Priolo NGO", url: "https://cdn.dribbble.com/userupload/5093267/file/original-82f9b71a88227e64f930f0dd83158a0f.jpg?compress=1&resize=1200x900",
desc: "Promoting mental health awareness and providing support.", loc: "Pune"},
{name: "Pond Foundation", url: "https://cdn.dribbble.com/userupload/5012257/file/original-679f95a8ab7447c7f1b2af6d0fa5e84e.png?compress=1&resize=1200x900",
desc: "Empowering communities through education and skill development.", loc: "Indore"
},{name: "Marnin", url: "https://cdn.dribbble.com/userupload/6065314/file/original-437a0b8dfe08a0f1655ec925beb8ba90.jpg?compress=1&resize=1200x900",
desc: "Promoting sustainable farming practices for a greener future.", loc: "Bhopal"
},{name: "Relif NGO", url: "https://cdn.dribbble.com/users/327561/screenshots/6276759/artboard_3_copy_3_2x-100_4x.jpg?compress=1&resize=840x630&vertical=top",
desc: "Offering medical assistance to those in remote and underserved areas.", loc: "Satara"
},{name: "Laurissilva", url: "https://cdn.dribbble.com/users/1306592/screenshots/14330334/media/3e1b70d15ac2268c477e4d4a56f78b8f.jpg?compress=1&resize=840x630&vertical=top",
desc: "Supporting orphaned and vulnerable children with love and care.", loc: "Nagpur"
},{name: "HHF Ngo", url: "https://cdn.dribbble.com/users/1951971/screenshots/19637790/media/16c3d01830918ad5bab5bafccf5ec931.jpg?compress=1&resize=840x630&vertical=top",
desc: "Hands that are never tired of helping others.", loc: "Uttrakhand"
},{name: "Different Way", url: "https://cdn.dribbble.com/userupload/4089139/file/original-8c561d85d72f86b17c32877e659c51cb.png?compress=1&resize=1200x900",
desc: "Helping people in a different way", loc: "Pune"
},{name: "Rites For Girls", url: "https://cdn.dribbble.com/users/1306592/screenshots/19534786/media/da82f0d0a6585938e8f6d22c4a7f54c5.jpg?compress=1&resize=840x630&vertical=top",
desc: "Advocating for gender equality and women's empowerment.", loc: "Uttrakhand"
}]

  
  return (
    <>

    <div className='wrapper'>    
   
      
      {
        
        testNgoList.map((item, index)=>{
          return <DisplayCard prop={testNgoList[index]}/>
        })

      }
      <div class="cover findpage1">
        
        <iframe title='nearbyNGOs' id="googleframe" width="90%" height="80%" frameborder="0" src={`https://www.google.com/maps/embed/v1/search?q=${query}&key=${process.env.GOOGLE_API_KEY}`}>
 	      </iframe>  
      </div>
    </div>  

      
      
    

    </>

  )
}

//https://search.google.com/local/reviews?placeid=ChIJ-fKaXABpfDkRD0o0gXvGWFo&q=Jan+aalay+ngo&hl=en&gl=IN
//https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ-fKaXABpfDkRD0o0gXvGWFo&fields=reviews&key=API_KEY

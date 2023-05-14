import React, {useState, useEffect} from 'react'
import "./findpage.scss"

export default function FindPage() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("local%20nogs%20near%20me")

  const handleQuery = () =>{
    const newQuery = "local hotels near me"
    const nQuery = newQuery.replace(/ /g, "%20")
    setQuery(nQuery)
  }

  useEffect(() => {
    // Fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?q=local%20ngos%20near%20me&radius=1000&key=API_KEY');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    console.log(data);
  });



  return (
    <>

      <div>
        {data.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <div class="cover findpage1">
        
        <iframe title='nearbyNGOs' id="googleframe" width="90%" height="80%" frameborder="0" src={`https://www.google.com/maps/embed/v1/search?q=${query}&key=${process.env.GOOGLE_API_KEY}`}>
 	      </iframe>  
      </div>
    
    </>

  )
}

//https://search.google.com/local/reviews?placeid=ChIJ-fKaXABpfDkRD0o0gXvGWFo&q=Jan+aalay+ngo&hl=en&gl=IN
//https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ-fKaXABpfDkRD0o0gXvGWFo&fields=reviews&key=API_KEY

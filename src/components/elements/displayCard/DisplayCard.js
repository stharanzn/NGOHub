import React, {useState, useEffect} from 'react'
import "./displayCard.css"

export default function DisplayCard(prop) {    
  return (
    <>
                                           
        <div class="display-card card-design2" style={{background:`url(${prop["prop"]["url"]}) center center no-repeat`, backgroundSize: "cover"}}>
            <div class="card-description">
                <div class="description-layers">
                    <div class="always-visible">
                        <h3>{prop["prop"]["name"]}</h3>
                        <small>{prop["prop"]["desc"]}</small>
                        <div class="location">📌 {prop["prop"]["loc"]}</div>
                    </div>
                    <div class="hover-visible">
                        {/* <div class="button button-white">Buy tickets</div> */}
                        <div class="button button-white">📞</div>
                    </div>
                    
                </div>
                
            </div>                       
                
    </div>
    </>
  )
}

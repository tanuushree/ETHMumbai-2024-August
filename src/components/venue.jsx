import React from "react";
import "../stylesheets/DirectionsButton.css";
import FullVenue from "../assets/full venue.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";

function Venue() {
    return(<div style={{marginBottom:'10vh'}} className="venue-specifications text-color-purple">

<img className="venue-image" src={FullVenue} alt="Location Image"></img>

<div style={{paddingLeft:'2vw',paddingTop:'4vh'}}className="p-2 flex-col">
        <p className="venue-heading">Venue</p>
        <div className="venue-location flex flex-row">
        <FaMapMarkerAlt style={{transform:'scale(1.25)',marginTop:'2vh',marginRight:"0.5vw"}}/> 
        <p style={{paddingLeft:'0',fontSize:'large'}} className="flex-1 p-2 ml-1 text-sm font-Herokid text-color-black">Pioneer Hall, Bandra West</p>
        </div>
        
        <a href='https://maps.app.goo.gl/ur44axfaYf3s8G6K7'style={{transform:'scale(0.75)'}} class="btn cta bg">Get Directions</a>
            
        </div>
   
    
    {/* {isScheduleVisible && <ScheduleContents />} */}
    </div>)
    
}

export default Venue;
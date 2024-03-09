import React from "react";
import "../stylesheets/DirectionsButton.css";
import FullVenue from "../assets/full venue.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";

function Venue() {
    return(<div style={{marginBottom:'10vh'}} className="venue-specifications text-color-purple">
<p className="venue-heading">Venue</p>
<img className="venue-image h-full w-full" src={FullVenue} alt="Location Image"></img>

<div style={{paddingLeft:'2vw',paddingTop:'4vh'}}className="p-2 flex-col">
        
        <div className="venue-location flex flex-row">
        
        <p style={{paddingLeft:'0',fontSize:'x-large'}} className="flex-1 p-2 ml-1 text-sm font-Herokid text-color-black">📍Pioneer Hall, Bandra West</p>
        </div>
        
        <a href='https://maps.app.goo.gl/ur44axfaYf3s8G6K7'style={{transform:'scale(0.75)'}} class="btn cta bg" 
        target="_blank"  // This attribute opens the link in a new window/tab
        rel="noopener noreferrer"  // Recommended for security to avoid potential vulnerabilities
        >Get Directions</a>
            
        </div>
   
    
    {/* {isScheduleVisible && <ScheduleContents />} */}
    </div>)
    
}

export default Venue;
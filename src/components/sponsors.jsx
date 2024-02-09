import React from "react";
import logo1 from "../assets/Partners/4.png";
import logo2 from "../assets/Partners/deform.png";
import logo3 from "../assets/Partners/polygon.png";
import logo4 from "../assets/Partners/streameth.png";
import logo5 from "../assets/Partners/EF-ESP-logo-white-text.png";
import logo6 from "../assets/Partners/Moongate.png";
import logo7 from "../assets/Partners/avail-white.png";

import Partners from "../assets/partners.png";


function Sponsors() {

    const handleButtonClick = () => {
        const linkToOpen = 'https://app.deform.cc/form/8eb56bad-1bd4-43e4-9599-cf1946803c45';
        window.open(linkToOpen, '_blank');
      };

    return(
        <div className="mt-20 mb-20 p-8 
        self-center w-full 
        flex flex-col 
        color-moldy rounded-3xl">
        <img className="pl-2 pt-2 h-20 w-60
        place-self-center" 
        alt="Partners" src={Partners} />
        <div className="justify-center flex flex-row m-4">
            <img src={logo1} alt="name" className="place-self-center p-2 mr-2 h-2/5 w-1/5" />
            <img src={logo2} alt="name" className="place-self-center p-2 mr-2 h-1/5 w-1/5"  />
            <img src={logo3} alt="name" className="place-self-center p-2 mr-2 h-1/5 w-1/5" />
            <img src={logo4} alt="name" className="place-self-center p-2 mr-2 h-1/5 w-1/5" />
        </div>
        <div className="justify-center flex flex-row  m-4">
            <img src={logo5} alt="name" className="place-self-center p-2  mr-2 h-1/5 w-1/5" />
            <img src={logo6} alt="name" className="place-self-center p-2  mr-2 h-1/5 w-1/5" />
            <img src={logo7} alt="name" className="place-self-center p-2  mr-2 h-1/5 w-1/5" />
        </div>
        <button className="color-peachy p-2 rounded-full shadow-md text-color-moldy
         text-2xl m-4 pr-40 pl-40 mb-8 font-bold" onClick={handleButtonClick}> Become a Sponsor </button>
        </div>
    )
}

export default Sponsors;
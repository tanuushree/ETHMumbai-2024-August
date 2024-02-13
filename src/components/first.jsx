import React from "react";
import Car from "../assets/logo_11.png";
import LogoTop from "../assets/buildfrom.png";
import LogoBottom from "../assets/mumbai.png";

function First() {

    return(
        <div className="mt-4 sm:mt-12 justify-center text-center color-peachy
        ">
           <div className="
           flex flex-col sm:flex sm:flex-row sm:justify-between">
            <div className="flex flex-col sm:text-left ">
            <img src={LogoTop} alt="Build from" className="w-1/2 self-center sm:w-full sm:pt-8 sm:pt-32 "/>
            <img src={LogoBottom} alt="mumbai" className="w-3/4 self-center sm:w-full"/>
           
            <p id="heading" className="sm:text-xl">for the world.</p>
            <p id="sub-heading" className="pt-0">29th — 31st March 2024</p>
            </div>
            <img src={Car} alt="a vintage taxy" className="self-center h-60 w-fit 
            sm:h-4/5 sm:w-fit" />
           </div>
        </div>
    )
    
}

export default First;
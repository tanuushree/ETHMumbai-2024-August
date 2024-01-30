import React from "react";
import NavigationBar from "./NavigationBar";
import Car from "../assets/logo_11.png";
import MainLogo from "../assets/main-logo.png";
import LogoTop from "../assets/buildfrom.png";
import LogoBottom from "../assets/mumbai.png";

function First() {

    return(
        <div className="mt-12 justify-center text-center color-peachy">
           <div className="flex flex-row justify-between">
            <div className="flex flex-col text-left ">
            <img src={LogoTop} alt="Bild from" className="pt-32  w-full"/>
            <img src={LogoBottom} alt="mumbai" className="w-full"/>
           
            <p id="heading" className="text-xl">for the world.</p>
            <p id="sub-heading" className="pt-0">29th — 31st March 2024</p>
            </div>
            <img src={Car} alt="a vintage taxy" className="justify-end" />
           </div>
            {/* <div className="meow" style={{width:'88vw',height:'80vh'}}>
                <div className="moving-millions" style={{width:'33.33%',height:'inherit',display:'flex',flexDirection:'column',justifyContent:'center',paddingLeft:'2vw'}}>
                <img src={MainLogo} alt="Logo" />
                <p id="heading">for the world.</p>
                </div>
                <div className="taxi-image" style={{width:'33.33%',height:'inherit',alignSelf:'center',alignItems:'center',justifyContent:"center",display:'flex',flexDirection:'column'}}>
                    <img src={Car} alt="Logo" />
                </div>
                <div className="build-from-mumbai" style={{height:'inherit',display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'left',paddingLeft:'4vw'}}>
                    <p id="heading">Build from Mumbai, for the World.</p>

                    <p id="sub-heading" style={{marginTop:'-2vw'}}>29th — 31st March 2024</p>
                </div>

            </div> */}
        </div>
    )
    
}

export default First;
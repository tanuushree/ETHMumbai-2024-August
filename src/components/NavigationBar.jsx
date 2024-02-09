import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../stylesheets/NavStyle.css";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import ETHMumbaiLogo from "../assets/Logo.png";
import Socials from "./socials";

function NavigationBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };


    return (
    <div className="navigation-menu">
            
    <div className="web-view" style={{width:'100%'}}>
        <div style={{width:'60%',height:'100%',textAlign:'center',display:'flex',flexDirection:'row'}}>
            <img src={ETHMumbaiLogo} alt="ETHMumbai Logo" style={{ maxWidth: '100%', maxHeight: '100%',alignSelf:'flex-start' }} />
        </div>
  <div className="flex flex-row 
items-center justify-center
  w-full mr-4
  ">
  <div className="flex flex-row h-full">
  <button
      onClick={() => {
        window.open('https://app.deform.cc/form/8eb56bad-1bd4-43e4-9599-cf1946803c45', '_blank');
      }}
      style={{ cursor: 'pointer' }}
      className="web-view-links  color-mustard text-black
      p-6 font-bold place-content-center m-4 pt-4 pb-4 rounded-full shadow-md hover:shadow-xl self-center text-xl"
    >
      Become a Speaker
    </button>
    <button
      onClick={() => {
        window.open('https://app.deform.cc/form/8eb56bad-1bd4-43e4-9599-cf1946803c45', '_blank');
      }}
      style={{ cursor: 'pointer' }}
      className="web-view-links 
      bg-black text-color-mustard p-6 
      font-bold place-content-center m-4 pt-4 pb-4 rounded-full shadow-md hover:shadow-xl self-center text-xl"
    >
      Become a Sponsor
    </button>
  </div>
  {/* <div className="flex-1 h-full">
    <button
      onClick={() => {
        window.open('https://app.deform.cc/form/8eb56bad-1bd4-43e4-9599-cf1946803c45', '_blank');
      }}
      style={{ cursor: 'pointer' }}
      className="web-view-links  color-mustard text-black
      p-6 font-bold place-content-center m-4 pt-4 pb-4 rounded-full shadow-md hover:shadow-xl self-center text-xl"
    >
      Become a Speaker
    </button>
  </div> */}
  <div className="flex items-center">
    <div className="ml-2"> 
      <Socials />
    </div>
  </div>
</div>

            </div>

            <div className="middle-logo" style={{width:'100%',height:"100%",justifyContent:'center'}}>
                <img  src={ETHMumbaiLogo} alt="ETHMumbai Logo" style={{ maxWidth: '120%', maxHeight: '100%',alignSelf:'flex-start' }} />
            </div>
            

            <div className="mobile-view" style={{backgroundColor:!isMenuOpen?'transparent':''}}>
                <div style={{height:'10%',width:'100%',paddingTop:'6px'}}>
                    {isMenuOpen ? (
                        <IoCloseSharp style={{ transform: 'scale(2)',color:'white' }} onClick={toggleMenu} />
                    ) : (
                        <IoIosMenu style={{ transform: 'scale(2)',color:'brown' }} onClick={toggleMenu} />
                    )}
                </div>
                <div style={{height:'70%',width:"100%",display:"flex",flexDirection:'column'}}>
                {isMenuOpen && (
                    <>
                        <button
                            onClick={() => {
                                window.location.assign('mailto:sponsor@ethmumbai.in');
                              }}
                            style={{cursor:'pointer'}}
                        
                        className="mobile-navbar-button">SPONSOR IT {'>>'} </button>
                        {/* <hr style={{width:"100%",height:'10px'}}></hr> */}
                        <button 
                        style={{cursor:'pointer'}}
                        onClick={() => {
                            window.location.assign('https://app.deform.cc/form/136a7409-6df6-4a66-bc91-e4f2d884b0da/');
                          }}
                        className="mobile-navbar-button">APPLY TO MENTOR {'>>'}</button>
                        {/* <hr style={{width:"100%",height:'10px'}}></hr> */}
                    </>
                )}

                </div>
                
                
            </div>
        </div>
    );
}

export default NavigationBar;

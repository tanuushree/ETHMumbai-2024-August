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
    <div className="navigation-menu sm:border-0 sm:border-black sm:rounded-full">
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
        window.open('https://app.deform.cc/form/76e18a7a-5e75-4244-b44a-16880353b552', '_blank');
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
      color-mustard text-black p-6 
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

<div className="middle-logo" style={{height:"100%",justifyContent:'center'}}>
    <img  src={ETHMumbaiLogo} alt="ETHMumbai Logo" style={{ maxWidth: '120%', maxHeight: '100%',alignSelf:'flex-start' }} />
</div>
            

  <div className="mobile-view" style={{backgroundColor:!isMenuOpen?'transparent':''}}>
      <div style={{height:'10%',width:'100%'}}>
          {isMenuOpen ? (
              <IoCloseSharp style={{ transform: 'scale(2)',color:'white' }} onClick={toggleMenu} 
              className="ml-4" />
          ) : (
              <IoIosMenu style={{ transform: 'scale(2)',color:'brown' }} onClick={toggleMenu}
              className="ml-4 " />
          )}
      </div>
      <div style={{height:'70%',width:"100%",display:"flex",flexDirection:'column'}}>
      {isMenuOpen && (
          <>
              <button
               className="mobile-navbar-button hover:bg-black text-white p-6"
               onClick={() => {
                window.open('https://app.deform.cc/form/8eb56bad-1bd4-43e4-9599-cf1946803c45', '_blank');
              }}
                  style={{cursor:'pointer'}}
             >Become a Sponsor {'>>'} </button>
              {/* <hr style={{width:"100%",height:'10px'}}></hr> */}
              <button 
              style={{cursor:'pointer'}}
              className="mobile-navbar-button hover:bg-black text-white p-6"
              onClick={() => {
                window.open('https://app.deform.cc/form/76e18a7a-5e75-4244-b44a-16880353b552', '_blank');
              }}
             >Become a Speaker
              {'>>'}</button>
              {/* <hr style={{width:"100%",height:'10px'}}></hr> */}
              <div className="p-4
              ">
              <Socials />
              </div>
          </>
      )}

      </div>
      
      
  </div>
        </div>
    );
}

export default NavigationBar;

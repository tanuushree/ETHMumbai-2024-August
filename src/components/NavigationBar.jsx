import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../stylesheets/NavStyle.css";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import ETHMumbaiLogo from "../assets/Logo.png";

function NavigationBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    // const navigate = useNavigate();

    return (
        <div className="navigation-menu">
            
            <div className="web-view" style={{width:'100%'}}>
                <div style={{width:'50%',height:'100%',textAlign:'center',display:'flex',flexDirection:'row'}}>
                <img src={ETHMumbaiLogo} alt="ETHMumbai Logo" style={{ maxWidth: '100%', maxHeight: '100%',alignSelf:'flex-start' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center',alignSelf:'center',paddingLeft:'1vw',alignItems:'center' }}>
                    <button
                    onClick={() => {
                        window.location.assign('mailto:sponsor@ethmumbai.in');
                      }}  style={{marginRight:'1vw',cursor:'pointer'}} className="web-view-links nav-button sponsor-button">Sponsor It</button>
                    <button 
                    style={{cursor:'pointer'}}
                    onClick={() => {
                        window.location.assign('https://app.deform.cc/form/136a7409-6df6-4a66-bc91-e4f2d884b0da/');
                      }}
                    className="web-view-links nav-button mentor-button">Apply to Mentor</button>
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

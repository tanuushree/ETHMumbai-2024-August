import React from "react";
import FooterBackground from "../assets/Footer.png";
import logo from "../assets/logoT.png";
import Socials from "./socials";


function BottomBox() {

    const containerStyle = {
        backgroundImage: `url(${FooterBackground})`,
        height: '80rem', 
        width: '100%',  
      };

    const handleSignUp = () => {
        let email_id = document.getElementById("enterEmail");
        
        const newsletter = "https://ethmumbai.substack.com/embed";

        if(email_id){
            window.open(newsletter, '_blank');
            email_id = "";
        }else{
            window.alert("Enter an email");
        }
    }

    return(
       <div className="bg-cover bg-center bg-no-repeat
       " style={containerStyle}>

        <div className="p-8 mt-20 flex flex-row
        justify-between">
            <div className="flex-1 w-1/6 flex-col 
            "> 
                <img src={logo} alt="ETH-Mumbai" className="h-2/3"/>
                <div className="pl-20
                "> 
                <Socials />
                </div>
            </div>

            <div className="p-8  mr-6
            flex-1 flex-col opacity-85  w-full
            color-light-vibe
            rounded-xl
            ">
            <input type="text" className="flex-1 
            h-1/3 w-full mb-6 
            text-black color-light-fill
            rounded-lg text-bold pl-2 text-3xl" 
            id="enterEmail"
            placeholder="Enter your email"/>

            <div className="flex flex-row justify-between pt-2 pl-4 pr-4">
            <p className="text-left font-Herokid font-light">Sign up for our newsletter and join 
            <br /> aamchi ETHMumbai</p>
            <button className="bg-black text-white font-bold 
            rounded-full p-5 shadow:md hover:shadow-lg
            "
            onClick={handleSignUp}>Sign Up </button>
            </div>
            {/* <iframe src="https://ethmumbai.substack.com/embed" width="480" 
            height="320" 
            className="text-black color-light-fill
            rounded-lg text-bold pl-2 text-3xl"
            style={{ border: '1px solid #EEE', backgroundColor: 'red',
             color: 'blue' }}
            frameborder="0" scrolling="no">
            </iframe> */}
            </div>
        </div>
       </div>
    )
}

export default BottomBox;
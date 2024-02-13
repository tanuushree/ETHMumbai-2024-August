import React from "react";
import FooterBackground from "../assets/Footer.png";
import logo from "../assets/logoT.png";
import Socials from "./socials";

function Mobilefooter() {

  const handleSignUp = () => {
    let email_id = document.getElementById("enterEmail");

    const newsletter = "https://ethmumbai.substack.com/embed";

    if (email_id) {
      window.open(newsletter, "_blank");
      email_id = "";
    } else {
      window.alert("Enter an email");
    }
  };

  return (
    <div
      className="sm:hidden"
    >
      <div className="p-8 mt-20 flex flex-col sm:flex sm:flex-row justify-between">
       
        <div
          className="p-4 sm:p-8 mr-6
            flex-1 flex-col opacity-85  w-full
            color-light-vibe
            rounded-xl
            "
        >
          <input
            type="text"
            className="flex-1 
            h-1/3 w-full mb-6 
            text-black color-light-fill
            rounded-lg text-bold pl-2 text-3xl"
            id="enterEmail"
            placeholder="Enter your email"
          />

          <div className="flex flex-row justify-between pt-2 px-4">
            <p className="text-left font-Herokid font-light">
              Sign up for our newsletter and join
              <br /> aamchi ETHMumbai
            </p>
            <button
              className="bg-black text-white font-bold 
            p-2 rounded-md
            sm:rounded-full sm:p-5 shadow:md hover:shadow-lg
            "
              onClick={handleSignUp}
            >
              Sign Up{" "}
            </button>
          </div>
          <div className="sm:flex-1 sm:w-1/6 flex-col pb-4 sm:pb-0">
          <img src={logo} alt="ETH-Mumbai" className="h-2/3" />
          <div className="sm:pl-20 text-center sm:text-left"></div>
          <Socials />
        </div>

        </div>
      </div>
    </div>
  );
}

export default Mobilefooter;

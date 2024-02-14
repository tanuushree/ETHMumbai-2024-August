import React from "react";
import FooterBackground from "../assets/Footer.png";
import logo from "../assets/Logo.png";
import train from "../assets/train2.png";
import Socials from "./socials";

function BottomBox() {
  const containerStyle = {
    backgroundImage: `url(${FooterBackground})`,
    // height: "80rem",
    width: "100%",
  };

  const desktopContainerStyle = {
    ...containerStyle, // Spread the containerStyle object to inherit its properties
    "@media (maxWidth: 768px)": {
      // Define a media query for screens smaller than or equal to the tablet size (768px)
      display: "none", // Hide the container on screens smaller than or equal to the tablet size
    },
  };

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
      className="bg-[length:0px_0px] sm:bg-cover sm:bg-center 
      bg-no-repeat h-0 sm:h-fit flex-col"
    >
      <div className=" sm:mt-20 sm:mb-10 sm:flex sm:flex-row justify-between mx-60">
        <div className="sm:flex-1 flex-col pb-4 sm:pb-0">
          <div className="w-5/6 lg:w-2/3">
            <img src={logo} alt="ETH-Mumbai" />
          </div>
        </div>

        <div className="flex items-center">
          <div
            className="p-6
            flex-1 flex-col opacity-85
            color-light-vibe
            rounded-xl size-fit
            "
          >
            <input
              type="text"
              className="
            h-1/3 w-full mb-3 
            text-black color-light-fill
            rounded-lg text-bold p-4 text-2xl"
              id="enterEmail"
              placeholder="Enter your email"
            />

            <div className="flex flex-row gap-3">
              <p className="text-left font-Herokid font-light">
                Sign up for our newsletter and join
                <br /> aamchi ETHMumbai
              </p>
              <button
                className="bg-black text-white font-bold 
            p-2 rounded-md
            sm:rounded-2xl sm:p-5 shadow:md hover:shadow-lg order-last
            "
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center flex flew-row justify-center items-center">
            <div className="z-10 absolute">
            <Socials />
            </div>
            <img src={train} alt="ETH-Mumbai" className="w-full"/>
      </div>

      
    </div>
  );
}

export default BottomBox;

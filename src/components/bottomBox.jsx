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

  var mobile = "flex flex-col-reverse ";

  return (
    <div className="sm:h-fit flex-col">
      <div
        className={
          mobile +
          "sm:mt-20 sm:mb-10 sm:flex sm:flex-row justify-between sm:mx-60"
        }
      >
        <div className="flex-1 flex flex-col sm:flex-row items-center justify-center sm:justify-start mb-2">
          <div className="w-2/3 lg:w-2/3 mx-10 sm:mx-0">
            <img src={logo} alt="ETH-Mumbai" className="block" />
          </div>
          <div className="sm:self-center">
            <Socials />
          </div>
        </div>



        {/* <div className="flex flex-row items-center mx-10 sm:mx-0">
          <div
            className="p-4 sm:p-6
            flex-1 flex-col opacity-85
            color-light-vibe
            rounded-xl 
            "
          >
            <input
              type="text"
              className="w-full h-1 sm:h-4/5 mb-3 
            text-black color-light-fill
            rounded-lg text-bold p-4 text-lg sm:text-2xl"
              id="enterEmail"
              placeholder="Enter your email"
            />

            <div className="flex flex-row gap-3 justify-between">
              <p className="text-left font-Herokid font-light text-xs sm:text-sm size-fit">
                Sign up for our newsletter and join
                <br /> aamchi ETHMumbai
              </p>
              <button
                className="bg-black text-white text-xs sm:text-lg sm:font-bold rounded-md
                    sm:rounded-full px-1 sm:px-5 shadow:md hover:shadow-lg order-last
                    "
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div> */}
      </div>

      <div className="text-center flex flew-row justify-center items-center">
        {/* <div className="z-10 absolute">
          <Socials />
        </div> */}
        <img src={train} alt="ETH-Mumbai" className="w-full" />
      </div>
    </div>
  );
}

export default BottomBox;

import React from "react";
import MumbaiLocal from "../assets/mumbaifooter.png";
import logo from "../assets/logoT.png";
import Socials from "./socials";
import BottomBox from "./bottomBox";

function WebFooter() {
  const desktopContainerStyle = {
    "@media (maxWidth: 768px)": {
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
    <div className="flex flex-col" style={desktopContainerStyle}>
      <div className="text-center mb-4">
        {/* newsletter and logo
         */}
         <Socials />
        </div>
      
    </div>
  );
}

export default WebFooter;

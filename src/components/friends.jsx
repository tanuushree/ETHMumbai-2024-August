import React from "react";
import logo1 from "../assets/friends/ETHBarcelona.png";
import logo2 from "../assets/friends/ETHBelgrade.png";
import logo3 from "../assets/friends/ethchicago.png";
import logo4 from "../assets/friends/ethrome_logo.png";

import FriendsText from "../assets/friends.png";

function Friends() {

  return (
    <div className="mt-20 mb-20 p-8 self-center w-full flex flex-col color-best rounded-3xl">
      <img className="pl-2 pt-2 h-full place-self-center" alt="Partners" src={FriendsText} />
      <div className="justify-center flex flex-row m-4">
        <a href=" https://www.ethbarcelona.com" target="_blank" rel="noopener noreferrer" className="place-self-center p-2 mr-4 h-2/5 w-1/5">
          <img src={logo1} alt="name" />
        </a>
        <a href="https://ethbelgrade.rs/" target="_blank" rel="noopener noreferrer" className="place-self-center p-2 mr-4 h-1/5 w-1/5">
          <img src={logo2} alt="name" />
        </a>
        <a href="https://www.ethchicago.xyz" target="_blank" rel="noopener noreferrer" className="place-self-center p-2 mr-4 h-1/5 w-1/5">
          <img src={logo3} alt="name" />
        </a>
        <a href="https://ethrome.org/" target="_blank" rel="noopener noreferrer" className="place-self-center p-2 mr-4 h-1/5 w-1/5">
          <img src={logo4} alt="name" />
        </a>
      </div>
    </div>
  );
}

export default Friends;

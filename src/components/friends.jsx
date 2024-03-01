import React from "react";
import logo1 from "../assets/friends/ETHBarcelonawhite.png";
import logo2 from "../assets/friends/ETHBelgrade.png";
import logo3 from "../assets/friends/ETHCHI-White-horizontal.png";
import logo4 from "../assets/friends/ETHrome.png";

import FriendsText from "../assets/friends.png";

function Friends() {

  return (
    <div className="p-4
    sm:p-8 self-center w-full flex flex-col color-best 
    rounded-3xl sm:rounded-3xl">
      <img className="sm:w-4/5 place-self-center mb-2" alt="Partners" src={FriendsText} />
      <div className="justify-between sm:justify-center
      flex flex-row sm:flex sm:flex-row m-4 gap-8 flex-wrap">
        <a href=" https://www.ethbarcelona.com" target="_blank" rel="noopener noreferrer" 
        className="place-self-center w-2/5 sm:w-1/5">
          <img src={logo1} alt="name" />
        </a>
        <a href="https://ethbelgrade.rs/" target="_blank" rel="noopener noreferrer" 
          className="place-self-center w-2/5 sm:w-1/5">
          <img src={logo2} alt="name" />
        </a>
        <a href="https://ethrome.org/" target="_blank" rel="noopener noreferrer" 
          className="place-self-center w-2/5 sm:w-1/5">
          <img src={logo4} alt="name" />
        </a>
        <a href="https://www.ethchicago.xyz" target="_blank" rel="noopener noreferrer" 
          className="place-self-center w-2/5 sm:w-1/5">
          <img src={logo3} alt="name" />
        </a>
      </div>
    </div>
  );
}

export default Friends;

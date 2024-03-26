import React from "react";
import logo1 from "../assets/Partners/deform.png";
import logo2 from "../assets/Partners/streameth.png";
import logo3 from "../assets/Partners/moongate_logo.png";
import logo4 from '../assets/Partners/solidityscan.png';
import logo5 from '../assets/Partners/dabl club.png';

import PartnersLogo from "../assets/partners.png";

function Partners() {

  return (
    <div
      className="p-4 sm:p-6 my-10 sm:my-20 sm:p-8 opacity-95 hover:shadow-xl
    self-center w-full flex flex-col color-moldy rounded-3xl sm:rounded-3xl"
    >
      <img
        className="m-2 sm:m-2 w-2/5 sm:w-1/5 place-self-center"
        alt="Partners"
        src={PartnersLogo}
      />
      <div
        className="justify-center flex flex-row flex-wrap
      sm:flex sm:flex-row m-2 sm:mt-4 gap-4 sm:gap-8"
      >
        <a
          href="https://www.deform.cc/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-2/5
           sm:w-1/5"
        >
          <img src={logo1} alt="name" />
        </a>
        <a
          href="https://streameth.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-2/5
          sm:w-1/5"
        >
          <img src={logo2} alt="name" />
        </a>
        <a
          href="https://www.moongate.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-2/5
          sm:w-1/5"
        >
          <img src={logo3} alt="name" />
        </a>
        <a
          href="https://solidityscan.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-2/5
          sm:w-1/5"
        >
          <img src={logo4} alt="name" />
        </a>
        <a
          href="https://www.dabl.club/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-2/5
          sm:w-1/5"
        >
          <img src={logo5} alt="name" />
      </div>
    </div>
  );
}

export default Partners;

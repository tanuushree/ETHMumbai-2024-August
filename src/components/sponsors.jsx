import React from "react";
import logo1 from "../assets/sponsors/Arweave India.png";
import logo2 from "../assets/Partners/avail-white.png";
import logo3 from "../assets/sponsors/Core1.png";
import logo4 from "../assets/Partners/EF-ESP-logo-white-text.png";
import logo5 from "../assets/sponsors/Lumio.png";
import logo6 from "../assets/Partners/4.png";
import logo7 from "../assets/sponsors/Vara.png";
import logo8 from "../assets/sponsors/The Graph.png";

import SponsorText from "../assets/sponsors.png";

function Sponsors() {
  const handleButtonClick = () => {
    const linkToOpen =
      "https://app.deform.cc/form/8eb56bad-1bd4-43e4-9599-cf1946803c45";
    window.open(linkToOpen, "_blank");
  };

  return (
    <div
      className="p-4 sm:p-6 my-10 sm:my-20 sm:p-8 opacity-95 hover:shadow-xl
    self-center w-full flex flex-col color-moldy rounded-3xl sm:rounded-3xl"
    >
      <img
        className="m-2 sm:m-2 w-2/5 sm:w-1/5 place-self-center"
        alt="Partners"
        src={SponsorText}
      />
      <div
        className="justify-center flex flex-row flex-wrap
      sm:flex sm:flex-row m-2 sm:mt-4 gap-4 sm:gap-8"
      >
        <a
          href="https://arweavehub.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-2/5
           sm:w-1/5"
        >
          <img src={logo1} alt="name" />
        </a>
        <a
          href="https://www.availproject.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-2/5
          sm:w-1/5"
        >
          <img src={logo2} alt="name" />
        </a>
        <a
          href="https://coredao.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-2/5
          sm:w-1/5"
        >
          <img src={logo3} alt="name" />
        </a>
        <a
          href="https://esp.ethereum.foundation/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-2/5
          sm:w-1/5"
        >
          <img src={logo4} alt="name" />
        </a>

        <a
          href="https://lumio.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden place-self-center w-2/5"
        >
          <img src={logo5} alt="name" />
        </a>
        <a
          href="https://purple.construction/"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden place-self-center w-2/5"
        >
          <img src={logo6} alt="name" />
        </a>
      </div>
      <div
        className="invisible sm:visible sm:justify-center 
      flex flex-row flex-wrap
      justify-between h-0 sm:h-full
       sm:flex sm:flex-row sm:m-2 gap-8"
      >
        <a
          href="https://lumio.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-2/5 sm:w-1/5"
        >
          <img src={logo5} alt="name" />
        </a>
        <a
          href="https://purple.construction/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-2/5 sm:w-1/5"
        >
          <img src={logo6} alt="name" />
        </a>
        <a
          href="https://vara.network/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-2/5
          sm:w-1/5"
        >
          <img src={logo7} alt="name" />
        </a>
        <a
          href="https://thegraph.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-2/5
          sm:w-1/5"
        >
          <img src={logo8} alt="name" />
        </a>
      </div>
      <button
        className="color-peachy p-2 sm:px-4
      text-xs sm:text-md sm:mt-4 sm:text-xl
      rounded-full shadow-md text-color-moldy 
      font-bold self-center"
        onClick={handleButtonClick}
      >
        Become a Sponsor
      </button>
    </div>
  );
}

export default Sponsors;

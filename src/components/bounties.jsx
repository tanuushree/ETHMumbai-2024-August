import React from "react";
import logo1 from "../assets/bounties/Arweave India - $2K.png";
import logo2 from "../assets/bounties/Avail - $3K.png";
import logo3 from "../assets/sponsors/Core1.png"
import logo4 from "../assets/bounties/Lumio - $2K.png";
import logo5 from "../assets/bounties/Purple DAO - $3K.png";
import logo6 from "../assets/bounties/PSE - $3K.png";
import logo7 from "../assets/bounties/Anon Aadhar - $3K.png";

import Partners from "../assets/bounties.png";

function Bounties() {

  return (
    <div
      className="p-4 sm:p-6 my-10 sm:my-20 sm:p-8 opacity-95 hover:shadow-xl
    self-center w-full flex flex-col color-moldy rounded-3xl sm:rounded-3xl"
    >
      <img
        className="m-2 sm:m-2 w-2/5 sm:w-1/5 place-self-center"
        alt="Partners"
        src={Partners}
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
          <p className="text-white font-Herokid">$2K</p>
        </a>
        <a
          href="https://www.availproject.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-2/5
          sm:w-1/5"
        >
          <img src={logo2} alt="name" />
          <p className="text-white font-Herokid">$2K</p>
          
        </a>
        <a
          href="https://coredao.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-2/5
          sm:w-1/5"
        >
          <img src={logo3} alt="name" />
          <p className="text-white font-Herokid">$2K</p>
        </a>
        <a
          href="https://purple.construction/"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden place-self-center w-2/5"
        >
          <img src={logo5} alt="name" />
          <p className="text-white font-Herokid">$3K</p>

        </a>
        <a
          href="https://lumio.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden place-self-center w-2/5"
        >
          <img src={logo4} alt="name" />
          <p className="text-white font-Herokid">$2K</p>

        </a>
        <a
          href="https://pse.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden place-self-center w-2/5"
        >
          <img src={logo6} alt="name" />
          <p className="text-white font-Herokid">$3K</p>

        </a>
        <a
          href="https://anon-aadhaar-documentation.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hidden place-self-center w-2/5"
        >
          <img src={logo7} alt="name" />
          <p className="text-white font-Herokid mt-3">$3K</p>

        </a>
      </div>
      <div
        className="invisible sm:visible sm:justify-center 
      flex flex-row flex-wrap
      justify-between h-0 sm:h-full
       sm:flex sm:flex-row sm:m-2 gap-8"
      >
        <a
          href="https://purple.construction/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-2/5 sm:w-1/5"
        >
          <img src={logo5} alt="name" />
          <p className="text-white font-Herokid">$3K</p>

        </a>
        <a
          href="https://lumio.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-2/5 sm:w-1/5"
        >
          <img src={logo4} alt="name" />
          <p className="text-white font-Herokid">$2K</p>

        </a>
        <a
          href="https://pse.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-1/5"
        >
          <img src={logo6} alt="name" />
          <p className="text-white font-Herokid">$3K</p>

        </a>
        <a
          href="https://anon-aadhaar-documentation.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="place-self-center w-1/5"
        >
          <img src={logo7} alt="name" />
          <p className="text-white font-Herokid mt-3">$3K</p>

        </a>
      </div>
  
    </div>
  );
}

export default Bounties;

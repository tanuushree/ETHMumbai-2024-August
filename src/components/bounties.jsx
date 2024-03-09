import React from "react";
import ArweaveIndiaLogo from "../assets/bounties/Arweave India - $2K.png";
import AvailLogo from "../assets/bounties/Avail - $3K.png";
import CoreLogo from "../assets/sponsors/Core1.png"
import LumioLogo from "../assets/bounties/Lumio - $2K.png";
import PurpleDAOLogo from "../assets/bounties/Purple DAO - $3K.png";
import PSELogo from "../assets/bounties/PSE - $3K.png";
import AnonAadharLogo from "../assets/bounties/Anon Aadhar - $3K.png";
import TheGraphLogo from '../assets/bounties/The Graph - $2K.png';

import BountiesLogo from "../assets/bounties.png";

// function Bounties() {

//   return (
//     <div
//       className="p-4 sm:p-6 my-10 sm:my-20 sm:p-8 opacity-95 hover:shadow-xl
//     self-center w-full flex flex-col color-moldy rounded-3xl sm:rounded-3xl"
//     >
//       <img
//         className="m-2 sm:m-2 w-2/5 sm:w-1/5 place-self-center"
//         alt="BountiesLogo"
//         src={BountiesLogo}
//       />
//       <div
//         className="justify-center flex flex-row flex-wrap
//       sm:flex sm:flex-row m-2 sm:mt-4 gap-4 sm:gap-8"
//       >
//         <a
//           href="https://arweavehub.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="place-self-center w-2/5
//            sm:w-1/5"
//         >
//           <img src={logo1} alt="name" />
//           <p className="text-white font-Herokid mt-4">$2K</p>
//         </a>
//         <a
//           href="https://www.availproject.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="place-self-center w-2/5
//           sm:w-1/5"
//         >
//           <img src={logo2} alt="name" />
//           <p className="text-white font-Herokid">$2K</p>
          
//         </a>
//         <a
//           href="https://coredao.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="place-self-center w-2/5
//           sm:w-1/5"
//         >
//           <img src={logo3} alt="name" />
//           <p className="text-white font-Herokid -mt-2">$2K</p>
//         </a>
//         <a
//           href="https://purple.construction/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="sm:hidden place-self-center w-2/5"
//         >
//           <img src={logo5} alt="name" />
//           <p className="text-white font-Herokid">$3K</p>

//         </a>
//         <a
//           href="https://lumio.io/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="sm:hidden place-self-center w-2/5"
//         >
//           <img src={logo4} alt="name" />
//           <p className="text-white font-Herokid">$2K</p>

//         </a>
//         <a
//           href="https://pse.dev/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="sm:hidden place-self-center w-2/5"
//         >
//           <img src={logo6} alt="name" />
//           <p className="text-white font-Herokid">$3K</p>

//         </a>
//         <a
//           href="https://anon-aadhaar-documentation.vercel.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="sm:hidden place-self-center w-2/5"
//         >
//           <img src={logo7} alt="name" />
//           <p className="text-white font-Herokid">$3K</p>

//         </a>
//       </div>
//       <div
//         className="invisible sm:visible sm:justify-center 
//       flex flex-row flex-wrap
//       justify-between h-0 sm:h-full
//        sm:flex sm:flex-row sm:m-2 gap-8"
//       >
//         <a
//           href="https://purple.construction/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="place-self-center w-2/5 sm:w-1/5"
//         >
//           <img src={logo5} alt="name" />
//           <p className="text-white font-Herokid">$3K</p>

//         </a>
//         <a
//           href="https://lumio.io/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="place-self-center w-2/5 sm:w-1/5"
//         >
//           <img src={logo4} alt="name" />
//           <p className="text-white font-Herokid">$2K</p>

//         </a>
//         <a
//           href="https://pse.dev/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="place-self-center w-1/5"
//         >
//           <img src={logo6} alt="name" />
//           <p className="text-white font-Herokid">$3K</p>

//         </a>
//         <a
//           href="https://anon-aadhaar-documentation.vercel.app/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="place-self-center w-[100px]"
//         >
//           <img src={logo7} alt="name" />
//           <p className="text-white font-Herokid">$3K</p>

//         </a>
//       </div>
  
//     </div>
//   );
// }

// export default Bounties;

const BountiesData = [
  {
    name: "ArweaveIndia",
    logo: ArweaveIndiaLogo,
    amount: "$2K",
    url: "https://arweavehub.com/"
  },
  {
    name: "Avail",
    logo: AvailLogo,
    amount: "$2K",
    url: "https://www.availproject.org/"
  },
  {
    name: "Core",
    logo: CoreLogo,
    amount: "$2k",
    url: "https://coredao.org/"
  },
  {
    name: "Lumio",
    logo: LumioLogo,
    amount: "$2K",
    url: "https://lumio.io/"
  },
  {
    name: "PurpleDAO",
    logo: PurpleDAOLogo,
    amount: "$3K",
    url: "https://purple.construction/"
  },
  {
    name: "PSELogo",
    logo: PSELogo,
    amount: "$3K",
    url: "https://pse.dev/"
  },
  {
    name: "AnonAadharLogo",
    logo: AnonAadharLogo,
    amount: "$3K",
    url: "https://anon-aadhaar-documentation.vercel.app/"
  },
  {
    name: "TheGraph",
    logo: TheGraphLogo,
    amount: "$2K",
    url: "https://thegraph.com/"
  }
]

export default function Bounties() {
  return <div className="bounties-section p-4 my-10 sm:my-20 sm:p-8 opacity-95 hover:shadow-xl  w-full color-moldy rounded-3xl sm:rounded-3xl grid gap-6">
      <img
        className="m-2 sm:m-2 w-2/5 sm:w-1/5 place-self-center"
        alt="BountiesLogo"
        src={BountiesLogo}
      />
    <div className="bounties-list-wrapper justify-center flex flex-row flex-wrap sm:flex sm:flex-row m-2 sm:mt-4 gap-6 sm:gap-8">
      {BountiesData.map((bounty, index) => {
        return <div className="flex flex-col items-center gap-6" key={index}>
          <img
            src={bounty.logo}
            alt={bounty.name}
            name={bounty.name}
            className="h-[60px] w-auto"
          />
          <p className="font-medium text-lg text-white">{bounty.amount}</p>
        </div>
      })}
    </div>
  </div>
}
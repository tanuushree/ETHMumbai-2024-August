import React from "react";
import ArweaveIndiaLogo from "../assets/bounties/Arweave India - $2K.png";
import AvailLogo from "../assets/bounties/Avail - $3K.png";
import CoreLogo from "../assets/sponsors/Core1.png"
import LumioLogo from "../assets/bounties/Lumio - $2K.png";
import PurpleDAOLogo from "../assets/bounties/Purple DAO - $3K.png";
import Scaffold from "../assets/bounties/Scaffold-ETH 2 - $3K.png";
import AnonAadharLogo from "../assets/bounties/Anon Aadhar - $3K.png";
import TheGraphLogo from '../assets/bounties/The Graph - $2K.png';
import VaraNetwork from '../assets/bounties/Vara - $2K.png';
import Polygon from '../assets/bounties/Polygon - $2.5K.png';
import Fuel from '../assets/bounties/Fuel - 4Kv2.png';

import BountiesLogo from "../assets/bounties.png";

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
    name: "Sacffold",
    logo: Scaffold,
    amount: "$3K",
    url: "https://scaffoldeth.io/"
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
  },
  {
    name: "VaraNetwork",
    logo: VaraNetwork,
    amount: "$2K",
    url: "https://vara.network/"
  },
  {
    name: "Polygon",
    logo: Polygon,
    amount: "$2.5K",
    url: "https://polygon.technology/polygon-zkevm"
  },
  {
    name: "Fuel",
    logo: Fuel,
    amount: "$4K",
    url: "https://fuel.network/"
  } 
]

export default function Bounties() {
  return <div className="bounties-section p-4 my-10 sm:my-20 sm:p-8 opacity-95 hover:shadow-xl w-full color-moldy rounded-3xl sm:rounded-3xl grid gap-6">
      <img
        className="m-2 sm:m-2 w-2/5 sm:w-1/5 place-self-center"
        alt="BountiesLogo"
        src={BountiesLogo}
      />
    <div className="bounties-list-wrapper justify-center flex flex-row flex-wrap sm:flex sm:flex-row m-2 sm:mt-4 gap-6 sm:gap-8 max-md:items-center">
      {BountiesData.map((bounty, index) => {
        return <a href={bounty.url} target="_blank" rel="noreferrer" key={index} className="max-md:mx-auto max-md:w-fit">
          <div className="flex flex-col items-center gap-6 max-md:gap-2">
          <img
            src={bounty.logo}
            alt={bounty.name}
            name={bounty.name}
            className="h-[60px] w-auto max-md:h-[40px] max-md:w-fit"
          />
          <p className="font-medium text-lg text-white">{bounty.amount}</p>
        </div>
        </a>
      })}
    </div>
  </div>
}

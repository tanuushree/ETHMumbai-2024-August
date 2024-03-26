import React from "react";
import mentor1 from "../assets/mentors/Harsh Ghodkar, Gateway Protocol.png";
import mentor2 from "../assets/mentors/Jatin Pandya, Zeeve.png";
import mentor3 from "../assets/mentors/Jayesh Bhole, Router Protocol.jpeg";
import mentor4 from "../assets/mentors/Sneha Mishra, Social3.png";
import mentor5 from "../assets/mentors/Sumit Vekariya, Sacred Protocol.png";
import mentor6 from "../assets/mentors/Vanshika Rana, Instadapp.png";
import judge1 from "../assets/judges/Denver Dsouza, Devfolio.jpg";
import judge2 from "../assets/judges/Gnana Lakshmi, Starknet Foundation.jpeg";
import judge3 from "../assets/judges/Harsh Bajpai, Kakarot zkEVM.jpeg";
import judge4 from "../assets/judges/Hidayath Shaik, Webhash.jpeg";
import judge5 from "../assets/judges/Hitesh Malviya, DYOR.jpeg";
import judge6 from "../assets/judges/Preet Parekh, Devfolio.jpg";
import judge7 from "../assets/judges/Sachin Mittal, 111 DAO.jpg";
import judge8 from "../assets/judges/Sahil Sen, QuickNode.jpeg";
import judge9 from "../assets/judges/Saravanan Vijayakumaran, IIT Bombay.jpg";
import judge10 from "../assets/judges/Shantanu Vishwanadha, Powerloom.jpeg";
import judge11 from "../assets/judges/Robin Roy, Avail.png";
import speaker1 from "../assets/Speakers/Simone, UrbeETH.jpeg";
import speaker2 from "../assets/Speakers/Pareen Lathia, BuidlersTribe.jpeg";
import speaker3 from "../assets/Speakers/Jason Goldberg, Airstack.jpeg";
import speaker4 from "../assets/Speakers/CyberShakti, Lenspost.png";
import speaker5 from "../assets/Speakers/Benny G, ERC6551.jpeg";
import speaker6 from "../assets/Speakers/Aditya Mohanty, The Product House.png";

function Speakers() {
    return(
        <div className="my-10 sm:my-20 flex flex-col justify-center">
            <p className="font-Herokid font-bold my-6 text-xl">Attend ETHMumbai with the Brightest of Minds.</p>
            <div className="px-6 sm:p-2 gap-8 flex flex-row sm:flex-row flex-wrap justify-center">
                <SpeakerComponent name="Harsh Ghodkar" imageUrl={mentor1} speakerCreds="Gateway Protocol" />
                <SpeakerComponent name="Jatin Pandya" imageUrl={mentor2} speakerCreds="Zeeve" />
                <SpeakerComponent name="Jayesh Bhole" imageUrl={mentor3} speakerCreds="Router Protocol" />
                <SpeakerComponent name="Sneha Mishra" imageUrl={mentor4} speakerCreds="Social3" />
                <SpeakerComponent name="Sumit Vekariya" imageUrl={mentor5} speakerCreds="Sacred Protocol" />
                <SpeakerComponent name="Vanshika Rana" imageUrl={mentor6} speakerCreds="Instadapp" />
                <SpeakerComponent name="Denver Dsouza" imageUrl={judge1} speakerCreds="Devfolio" />
                <SpeakerComponent name="Gnana Lakshmi" imageUrl={judge2} speakerCreds="Starknet" />
                <SpeakerComponent name="Harsh Bajpai" imageUrl={judge3} speakerCreds="Kakarot zkEVM" />
                <SpeakerComponent name="Hidayath Shaik" imageUrl={judge4} speakerCreds="Webhash" />
                <SpeakerComponent name="Preet Parekh" imageUrl={judge6} speakerCreds="Devfolio" />
                <SpeakerComponent name="Sachin Mittal" imageUrl={judge7} speakerCreds="111 DAO" />
                <SpeakerComponent name="Sahil Sen" imageUrl={judge8} speakerCreds="QuickNode" />
                <SpeakerComponent name="Saravanan" imageUrl={judge9} speakerCreds="IIT Bombay" />
                <SpeakerComponent name="Shantanu" imageUrl={judge10} speakerCreds="Powerloom" />
                <SpeakerComponent name="Robin Roy" imageUrl={judge11} speakerCreds="Avail" />
                <SpeakerComponent name="Hitesh Malviya" imageUrl={judge5} speakerCreds="DYOR" />
                <SpeakerComponent name="Simone" imageUrl={speaker1} speakerCreds="UrbeETH" />
                <SpeakerComponent name="Pareen Lathia" imageUrl={speaker2} speakerCreds="BuidlersTribe" />
                <SpeakerComponent name="Jason Goldberg" imageUrl={speaker3} speakerCreds="Airstack" />
                <SpeakerComponent name="CyberShakti" imageUrl={speaker4} speakerCreds="Lenspost" />
                <SpeakerComponent name="Benny G" imageUrl={speaker5} speakerCreds="ERC6551" />
                <SpeakerComponent name="Aditya Mohanty" imageUrl={speaker6} speakerCreds="The Product House" />                
            </div>
        </div>
    )
}

export default Speakers;

const SpeakerComponent = ({ name, imageUrl, speakerCreds }) => {
    return(
        <div className="flex flex-col items-center mb-8 sm:mb-0">
            <div className="border-2 border-black rounded-full bg-amber-600 h-20 w-20 sm:h-40 sm:w-40 overflow-hidden">
                <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            </div>
            <p className="pt-4 font-Herokid text-xs sm:text-lg">{name}</p>
            <p className="pb-4 font-extralight text-zinc-700 text-sm">{speakerCreds}</p>
        </div>
    )
}

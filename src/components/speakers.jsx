import React from "react";
import SpeakersText from "../assets/speakers.png";

function Speakers() {
    return(
        <div className="my-10 sm:my-20 flex flex-col justify-center 
        ">
        <img src={SpeakersText} alt="Speakers" className="mx-auto block w-2/5 sm:w-1/5" />
        <p className="font-Herokid mt-6 mb-4 text-sm">Attend ETHMumbai with the Brightest of Minds.</p>
        <div className="px-6 sm:p-2
        flex flex-col sm:flex-row sm:flex-wrap justify-between">
             {/* TODO: pass speaker details as prop when speakers
             are added in the google drive */}
            <SpeakerComponent />
            <SpeakerComponent />
            <SpeakerComponent />
        </div>
        </div>
    )
}

export default Speakers;

const SpeakerComponent = () => {
    return(
        <div className="flex flex-col self-center">
        <div className="border-2 border-black rounded-full bg-amber-600 h-40 w-40"></div>
        <p className="pt-4 font-Herokid"> TBA </p>
        {/* TODO: Add this when speaker details are provided */}
        {/* <p className="pb-4 font-extralight text-zinc-700 text-sm"> Speaker Creds </p> */}
        </div>
    )
}
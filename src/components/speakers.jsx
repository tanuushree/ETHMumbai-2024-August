import React from "react";
import SpeakersText from "../assets/speakers.png";

function Speakers() {
    return(
        <div className="mt-20 p-4 mb-20 flex flex-col justify-center 
        ">
        <img src={SpeakersText} alt="Speakers" className="mx-auto block h-1/5 w-1/5" />
        <p className="font-Herokid">We've asked them to not be boring.</p>
        <p className="mb-8 font-Herokid">That's all we can promise.</p>
        <div className="mr-16 ml-16 mt-4 p-2 flex flex-row flex-wrap justify-between">
             {/* TODO: pass speaker details as prop when speakers
             are added in the google drive */}
            <SpeakerComponent />
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
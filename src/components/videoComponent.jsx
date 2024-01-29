import React from "react";
import MainVideo from "../assets/ETHMumbai.mp4";

function VideoEmbed() {
    return(
        <div className="min-w-full bg-rose-600 
        rounded-3xl overflow-hidden shadow-lg
        text-white text-3xl font-bold">   
        <video className="h-full w-full " controls>
        <source src={MainVideo} type="video/mp4" />
        Your browser does not support the video tag.
        </video>  
        </div>  
    )
}

export default VideoEmbed;
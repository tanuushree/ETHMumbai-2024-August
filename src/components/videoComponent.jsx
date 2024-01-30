import React from "react";
import MainVideo from "../assets/ETHMumbai.mp4";

function VideoEmbed() {

    const videoLink = "https://firebasestorage.googleapis.com/v0/b/pixifie-2f67b.appspot.com/o/do-not-delete%2Feth%20mumbai%202%20_%20consistent%20font.mp4?alt=media&token=3a7f8616-4b25-4d3e-80c3-34923a039cee";

    return(
        <div className="min-w-full bg-rose-600 
        rounded-3xl overflow-hidden shadow-lg
        text-white text-3xl font-bold">   
        {/* <video className="h-full w-full " controls>
        <source src={MainVideo} type="video/mp4" />
        Your browser does not support the video tag.
        </video>   */}

        <video className="h-full w-full " controls>
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video tag.
        </video>  
        
        </div>  
    )
}

export default VideoEmbed;
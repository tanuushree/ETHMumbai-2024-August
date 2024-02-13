import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Socials() {

    const xURL = "https://twitter.com/ethmumbai";
    const telegramURL = "https://t.me/ethmumbai";

    const handletwitterbutton = () => {
        window.open(xURL, '_blank');
    }

    const handletelegrambutton = () => {
        window.open(telegramURL, '_blank');
    }

    return(
        <div className="space-x-4 sm:space-x-8">   
<button id="twitter" 
        className="bg-black border-2 w-6 h-6 
        sm:w-12 sm:h-12 
        text-sm sm:text-2xl
        rounded-md sm:rounded-2xl
        text-color-mustard 
        border-black hover:shadow-xl "
        onClick={handletwitterbutton}>
        <FontAwesomeIcon icon={faXTwitter}  />
        </button>

        <button id="telegram" 
      className="bg-black border-2 w-6 h-6 
      sm:w-12 sm:h-12 
      text-sm sm:text-2xl
      rounded-md sm:rounded-2xl
      text-color-mustard 
      border-black hover:shadow-xl "    
         onClick={handletelegrambutton}>
        {/* <FontAwesomeIcon icon={faTelegramPlane} /> */}
        <FontAwesomeIcon icon={faPaperPlane} />
        </button>
        </div>  
    )
}

export default Socials;
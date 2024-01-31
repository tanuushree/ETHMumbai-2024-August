import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Socials() {

    const xURL = "https://twitter.com/ethmumbai";
    const telegramURL = "https://t.me/+j4CUC9R3j4BmMDE1";

    const handletwitterbutton = () => {
        window.open(xURL, '_blank');
    }

    const handletelegrambutton = () => {
        window.open(telegramURL, '_blank');
    }

    return(
        <div className="space-x-8">   
         <button id="twitter" 
         className="bg-black border-2 w-12 h-12 
         rounded-2xl text-color-mustard 
         border-black hover:shadow-xl text-2xl"
         onClick={handletwitterbutton}>
        <FontAwesomeIcon icon={faXTwitter} />
        </button>
        <button id="telegram" 
         className="bg-black border-2 w-12 h-12 
         rounded-2xl text-color-mustard 
         border-black hover:shadow-xl text-2xl"
         onClick={handletelegrambutton}>
        {/* <FontAwesomeIcon icon={faTelegramPlane} /> */}
        <FontAwesomeIcon icon={faPaperPlane} />
        </button>
        </div>  
    )
}

export default Socials;
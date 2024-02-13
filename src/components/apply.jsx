import React from "react";
import Present from '../assets/apply2.png';

function Apply() {
    return(
        <div className="
        flex flex-col
        mt-5 sm:mt-10
        pb-4 sm:pb-16
        ">
        <div className="flex flex-row justify-center sm:hidden">
           <button 
            onClick={() => {
                window.open(
                  "https://app.deform.cc/form/76e18a7a-5e75-4244-b44a-16880353b552",
                  "_blank"
                );
              }}
           className="color-mustard text-black mr-2
                p-1 px-2 font-bold place-content-center m-4 rounded-lg shadow-md 
                hover:shadow-xl self-center text-xs"> Become a Speaker </button>
           <button 
             onClick={() => {
                window.open(
                  "https://app.deform.cc/form/8eb56bad-1bd4-43e4-9599-cf1946803c45",
                  "_blank"
                );
              }}
           className="color-mustard text-black  
                p-1 px-2 font-bold place-content-center m-4 rounded-lg shadow-md 
                hover:shadow-xl self-center text-xs"> Become a Sponsor </button>
        </div>
            <img className="flex-1 self-center sm:w-3/5" src={Present} alt="Presenting the first ever" />
            <p className="flex-1 text-xs sm:text-xl"> Ethereum hackathon in Mumbai</p>
            <p className="flex-1 text-xs sm:text-lg font-bold sm:mt-4 mb-4"> Applications opening soon </p>
        

            {/* TODO: Add later */}
            {/* <button style={{cursor:'pointer'}}
            onClick={() => { window.location.assign('https://app.deform.cc/form/136a7409-6df6-4a66-bc91-e4f2d884b0da/');}}
            className="m-4 pr-20 pl-20 pt-4 pb-4 mb-8 rounded-full shadow-md hover:shadow-xl
            flex-1 self-center main-apply-btn text-2xl">
            Apply as a hacker</button> */}
        </div>
    )
}

export default Apply;
import React from "react";
import Present from '../assets/apply2.png';

function Apply() {
    return(
        <div className="
        flex flex-col
        mt-20 sm:mt-40
        pb-16
        ">
            <img className="mt-100 flex-1 self-center w-60 h-60" src={Present} alt="Presenting the first ever" />
            <p className="flex-1 pb-2 text-2xl"> Ethereum hackathon in Mumbai</p>
            <p className="flex-1 text-lg mt-4 mb-4"> Applications opening soon </p>
            {/* TODO: Add later in mid-feb  */}
            {/* <button style={{cursor:'pointer'}}
            onClick={() => { window.location.assign('https://app.deform.cc/form/136a7409-6df6-4a66-bc91-e4f2d884b0da/');}}
            className="m-4 pr-20 pl-20 pt-4 pb-4 mb-8 rounded-full shadow-md hover:shadow-xl
            flex-1 self-center main-apply-btn text-2xl">
            Apply as a hacker</button> */}
        </div>
    )
}

export default Apply;
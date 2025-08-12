import React from "react";
import Present from "../assets/apply2.png";

function Apply() {
  return (
    <div
      className="
        flex flex-col
        mt-5 sm:mt-10
        pb-4 sm:pb-8
        "
    >
      {/* <div className="flex flex-row justify-center sm:hidden">
        <button
          onClick={() => {
            window.open(
              "https://app.deform.cc/form/76e18a7a-5e75-4244-b44a-16880353b552",
              "_blank"
            );
          }}
          className="color-mustard text-black mr-2
                p-1 px-2 font-bold place-content-center m-4 rounded-lg shadow-md 
                hover:shadow-xl self-center text-xs"
        >
          {" "}
          Become a Speaker{" "}
        </button>
        <button
          onClick={() => {
            window.open(
              "https://app.deform.cc/form/8eb56bad-1bd4-43e4-9599-cf1946803c45",
              "_blank"
            );
          }}
          className="color-mustard text-black  
                p-1 px-2 font-bold place-content-center m-4 rounded-lg shadow-md 
                hover:shadow-xl self-center text-xs"
        >
          {" "}
          Become a Sponsor{" "}
        </button>
      </div> */}
      {/* <img
        className="flex-1 self-center sm:w-3/5 mt-4"
        src={Present}
        alt="Presenting the first ever"
      /> */}
      <h1 className="flex-1 text-md sm:text-3xl mt-4">
        {" "}
       Presenting the first ever
      </h1>
      <p className="flex-1 text-xs sm:text-lg my-2">
        {" "}
        Ethereum hackathon in Mumbai
      </p>
      {/* <p className="flex-1 text-xs sm:text-lg font-bold mb-2">
        {" "}
        Applications opening soon{" "}
      </p> */}

      {/* TODO: Add later */}
      {/* <button style={{cursor:'pointer'}}
            onClick={() => { window.open('https://ethmumbai.devfolio.co/', '_blank');}}
            className="m-2 sm:m-4 px-4 py-1 sm:px-10 sm:py-2 mb-8 rounded-full 
            shadow-md hover:shadow-xl font-bold
            flex-1 self-center main-apply-btn sm:text-xl">
            Apply with Devfolio</button> */}
    </div>
  );
}

export default Apply;

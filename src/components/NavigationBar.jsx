import React, { useState } from "react";
import "../stylesheets/NavStyle.css";
import ETHMumbaiLogo from "../assets/Logo.png";
import Socials from "./socials";

function NavigationBar() {

  return (
    <div className="mx-20 mt-10
    sm:border-0 sm:border-black sm:rounded-full">
      <div className="web-view" style={{ width: "100%" }}>
        <div
        className="sm:w-1/4"
          style={{
            height: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            src={ETHMumbaiLogo}
            alt="ETHMumbai Logo"
            className="self-center sm:self-start"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>
        <div
          className="flex flex-row mx-8
          items-center justify-end w-full"
        >
          <div className="flex flex-row h-full gap-2">
            {/* <button
              onClick={() => {
                window.open(
                  "https://app.deform.cc/form/76e18a7a-5e75-4244-b44a-16880353b552",
                  "_blank"
                );
              }}
              style={{ cursor: "pointer" }}
              className="color-mustard text-black
            size-fit font-bold place-content-center sm:py-2 sm:px-6 rounded-full 
            shadow-md hover:shadow-xl self-center text-xl"
            >
              Become a Speaker
            </button> */}
            <button
              onClick={() => {
                window.open(
                  "https://app.deform.cc/form/8eb56bad-1bd4-43e4-9599-cf1946803c45",
                  "_blank"
                );
              }}
              style={{ cursor: "pointer" }}
              className="color-mustard text-black
              size-fit font-bold place-content-center sm:py-2 sm:px-6  rounded-full 
              shadow-md hover:shadow-xl self-center text-xl" >
              Become a Sponsor
            </button>
          </div>
          <div className="flex items-center">
            <div className="ml-2">
              <Socials />
            </div>
          </div>
        </div>
      </div>

      <div
        className="middle-logo"
        style={{ height: "100%", justifyContent: "center" }}
      >
        <img
          src={ETHMumbaiLogo}
          alt="ETHMumbai Logo"
          className="self-center sm:self-start"
          style={{
            maxWidth: "120%",
            maxHeight: "100%",
          }}
        />
      </div>
    </div>
  );
}

export default NavigationBar;

import React, { useState } from "react";
import "../stylesheets/NavStyle.css";
import ETHMumbaiLogo from "../assets/Logo.png";
import Socials from "./socials";

function NavigationBar() {

  return (
    <div className="navigation-menu sm:w-full sm:mx-40 
    sm:border-0 sm:border-black sm:rounded-full">
      <div className="web-view" style={{ width: "100%" }}>
        <div
          style={{
            width: "60%",
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
          className="flex flex-row items-center justify-center w-full mr-4"
        >
          <div className="flex flex-row h-full">
            <button
              onClick={() => {
                window.open(
                  "https://app.deform.cc/form/76e18a7a-5e75-4244-b44a-16880353b552",
                  "_blank"
                );
              }}
              style={{ cursor: "pointer" }}
              className="web-view-links  color-mustard text-black
      p-6 font-bold place-content-center m-4 pt-4 pb-4 rounded-full shadow-md hover:shadow-xl self-center text-xl"
            >
              Become a Speaker
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://app.deform.cc/form/8eb56bad-1bd4-43e4-9599-cf1946803c45",
                  "_blank"
                );
              }}
              style={{ cursor: "pointer" }}
              className="web-view-links 
      color-mustard text-black p-6 
      font-bold place-content-center m-4 pt-4 pb-4 rounded-full shadow-md hover:shadow-xl self-center text-xl"
            >
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

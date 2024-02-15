import React from "react";
import { useState, useEffect  } from "react";
import Schedule from "../assets/sch.png";

const ScheduleDropDown = () => {

    const [isScheduleVisible, setIsScheduleVisible] = useState(false);
    useEffect(() => {
        const smallButton = document.getElementById('lilb');
        
        if (smallButton) {
          smallButton.textContent = isScheduleVisible ? '-' : '+';
        }
      }, [isScheduleVisible]);

    const handleButtonClick = () => {
        setIsScheduleVisible(!isScheduleVisible);
    };

    return(
        <div className="p-8 rounded-3xl color-purple flex-wrap text-color-peachish">
        <div className="p-2 flex flex-row justify-between">
            <img className="pl-1 pt-2 w-2/5 sm:w-1/5" alt="Schedule" src={Schedule}></img>
            {/* <button id="lilb" className="text-white font-bold" onClick={handleButtonClick}>+</button> */}
            <button id="temporary-button" className="text-white font-bold">TBA</button>
        </div>
        <p className="flex-1 p-2 ml-1 text-left text-sm font-Herokid">What, when, & where!</p>
        {isScheduleVisible && <ScheduleContents />}
        </div>
    )
}

export default ScheduleDropDown;

const ScheduleContents = () => {

    const gosomewhere = () => {
        const twitterURL = "https://twitter.com/ethmumbai";
        window.location.href = twitterURL;
    }

    return(
        <div>
            <div className="p-4 flex flex-row text-color-peachish justify-between">
                <div className="p-2 flex flex-col">
                <div className="justify-start font-bold text-xl">MIP24</div>
                <div className="font-poppins text-xl">24th March - 31st March</div>
                <p className="font-light font-Herokid"> Lorem ipsum dolor sit amet </p>
                </div> 
                <div className="h-96 w-1/2">
                <svg className="h-full w-full">
                     {/* (x1,y1 x2,y2 x3,y3 x4,y4)  */}
                     {/* (top-left top-right bottom-right bottom-left)  */}
                     <polygon points="20,30 500,20 480,380 30,380" className="fill-gray-300" />
                </svg>
                </div>
            </div>
            <hr />
            <h3 className="align-left text-white font-bold text-left"> Main event </h3>
            <div className="flex flex-row justify-between text-color-purple mb-2"> 
             <div className="justify-start font-bold font-poppins">Day 1</div>
            <div className="justify-end">24th March</div>
            </div>
            <div className="flex flex-row justify-between text-white mb-4"> 
             <div className="justify-start">A CRAZY EVENT IN DETAIL</div>
            <div className="justify-end">12PM - 2PM</div>
            </div>

            <p className="text-white font-light text-left"> PANEL DISCUSSION </p>
            <div className="flex flex-row justify-between text-white mb-4"> 
             <div className="justify-start">A CRAZY EVENT IN DETAIL</div>
            <div className="justify-end">12PM - 2PM</div>
            </div>

            <p className="text-white font-light text-left"> WORKSHOP </p>
            <div className="flex flex-row justify-between text-white mb-4"> 
             <div className="justify-start">A CRAZY EVENT IN DETAIL</div>
            <div className="justify-end">12PM - 2PM</div>
            </div>

            <p className="text-white font-light text-left"> WORKSHOP </p>
            <div className="flex flex-row justify-between text-white mb-4"> 
             <div className="justify-start">A CRAZY EVENT IN DETAIL</div>
            <div className="justify-end">12PM - 2PM</div>
            </div>

            <div className="flex flex-row justify-between text-color-purple mb-2"> 
             <div className="justify-start font-bold font-poppins">Day 2</div>
            <div className="justify-end">24th March</div>
            </div>

            <div className="flex flex-row justify-between text-white mb-4"> 
             <div className="justify-start">A CRAZY EVENT IN DETAIL</div>
            <div className="justify-end">12PM - 2PM</div>
            </div>

            <p className="text-white font-light text-left"> PANEL DISCUSSION </p>
            <div className="flex flex-row justify-between text-white mb-4"> 
             <div className="justify-start">A CRAZY EVENT IN DETAIL</div>
            <div className="justify-end">12PM - 2PM</div>
            </div>

            <p className="text-white font-light text-left"> WORKSHOP </p>
            <div className="flex flex-row justify-between text-white mb-4"> 
             <div className="justify-start">A CRAZY EVENT IN DETAIL</div>
            <div className="justify-end">12PM - 2PM</div>
            </div>

            <p className="text-white font-light text-left"> WORKSHOP </p>
            <div className="mb-6 flex flex-row justify-between text-white mb-4"> 
             <div className="justify-start">A CRAZY EVENT IN DETAIL</div>
            <div className="justify-end">12PM - 2PM</div>
            </div>

            <button onClick={gosomewhere} className="color-mustard font-poppins font-bold
            p-2 rounded-full text-black w-full shadow-lg hover:shadow-xl
            text-2xl m-4 pr-40 pl-40 mb-8 font-bold"> Grab your tickets </button>
        </div>
    )
}
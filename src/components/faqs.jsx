import React, { useState, useEffect } from "react";
import faqtext from "../assets/faqs.png";

const answers = [   
    "I am the 1st answer",
    "I am the 2nd answer", 
    "I am the 3rd answer", 
    "I am the 4th answer", 
    "I am the 5th answer", 
    "I am the 6th answer", 
    "I am the 7th answer"
];


function FAQS() {
    return(
        <div className="
        border-2 border-black
        ">
            <img src={faqtext} alt="FAQS" className="ml-4 h-8" />
            <div className="flex flex-col mb-4 pt-10">
            <FaqComponent question="What is ETH Mumbai?" customKey="0"/>
            <FaqComponent question="Who can participate?" customKey="1" />
            <FaqComponent question="When and where is the hackathon happening?" customKey="2" />
            <FaqComponent question="Can we apply as a team?" customKey="3" />
            <FaqComponent question="How much does it cost?" customKey="4" />
            <FaqComponent question="Once I’m accepted, what should I bring?" customKey="5" />
            <FaqComponent question="Is there travel reimbursement for hackers?" customKey="6" />
        </div>
        </div>
       
    )
}

export default FAQS;

const FaqComponent = ({ question, customKey }) => {
    const [isButtonClicked, setIsButtonClicked] = useState(() => {
      let initialMap = new Map();
      for (let i = 0; i <= 6; i++) {
        initialMap.set(i.toString(), false);
      }
      return initialMap;
    });
  
    const numKey = parseInt(customKey, 10);
  
    console.log(" customKey is - ", customKey, typeof customKey);
    console.log("isButtonClicked is", isButtonClicked);
  
    const handleButtonClick = () => {
      console.log(" hi i was clicked for ", customKey, numKey);
      setIsButtonClicked((prevMap) => {
        const updatedStatusMap = new Map(prevMap);
        let result = updatedStatusMap.get(customKey);
        result = !result;
        updatedStatusMap.set(customKey, result);
        return updatedStatusMap;
      });
    };
  
    return (
      <div className="p-4 mr-8 ml-8 mb-2 mt-2 flex-1 bg-white text-left rounded-lg">
        <div className="flex flex-row justify-between">
        <div className="font-Herokid">{question}</div>
        <button id="cuteb" className="text-black font-bold" onClick={handleButtonClick}>
          +
        </button>
      </div>
      {isButtonClicked.get(customKey) ? (
          <div className="pt-1 font-Herokid text-sm">{answers[numKey]}</div>
        ) : null}
      </div>
    );
  };
  
import React, { useState } from "react";
import faqtext from "../assets/faqs.png";

const answers = [   
    "Anyone and everyone (over 18 years of age) interested in building the Ethereum ecosystem and creating apps for web3 adoption are welcomed.",
    "ETHMumbai is an in-person hackathon happening in Mumbai during 29th - 31st March 2024.",
    "Yes, you can participate either as an individual or a team of up to 4.",
    "This hackathon is completely free of cost for hackers, thanks to our sponsors, and includes meals, snacks, and a resting area during all 3 days.",
    "You should bring all important things for a convenient travel and hacking experience including a valid government-issued ID, water bottle, laptop, chargers, power bank, and clothes.",
    "Travel and any other expenses outside the hackathon are not covered."
];

function FAQS() {
    return(
        <div className="">
            <img src={faqtext} alt="FAQS" className="ml-4 h-8" />
            <div className="flex flex-col mb-4 pt-10">
            <FaqComponent question="Who can participate?" customKey="0" />
            <FaqComponent question="When and where is the hackathon happening?" customKey="1" />
            <FaqComponent question="Can we apply as a team?" customKey="2" />
            <FaqComponent question="How much does it cost?" customKey="3" />
            <FaqComponent question="Once I’m accepted, what should I bring?" customKey="4" />
            <FaqComponent question="Is there travel reimbursement for hackers?" customKey="5" />
        </div>
        </div>
       
    )
}

export default FAQS;

const FaqComponent = ({ question, customKey }) => {
    const [isButtonClicked, setIsButtonClicked] = useState(() => {
      let initialMap = new Map();

      for (let i = 0; i < 6; i++) {
        initialMap.set(i.toString(), false);
      }
      return initialMap;
    });
  
    const numKey = parseInt(customKey, 10);
  
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
  
import React from "react";
import First from "../components/first";
import Second from "../components/second";
import Footer from "../components/footer";
import Apply from "../components/apply";
import VideoEmbed from "../components/videoComponent";
import Sponsors from "../components/sponsors";
import ScheduleDropDown from "../components/schedule";
import Speakers from "../components/speakers";
import FAQS from "../components/faqs";
import NavigationBar from "../components/NavigationBar";

function Website() {
    return(
        <div className="pt-1 pr-16 pl-16 color-peachy text-center self-center">
           <NavigationBar/>
            <First/>
            <Apply/>
            <VideoEmbed/>
            <Sponsors />
            <ScheduleDropDown/>
            <Speakers/>
            <FAQS/>
        </div>
    )
    
}

export default Website;
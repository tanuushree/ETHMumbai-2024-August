import React from "react";
import First from "../components/first";
import Apply from "../components/apply";
import VideoEmbed from "../components/videoComponent";
import Sponsors from "../components/sponsors";
import ScheduleDropDown from "../components/schedule";
import Speakers from "../components/speakers";
import FAQS from "../components/faqs";
import NavigationBar from "../components/NavigationBar";
import BottomBox from "../components/bottomBox";
import Friends from "../components/friends";

function Website() {
    return(
        <div className="color-peachy">
        <div className="pt-1 pr-16 pl-16 color-peachy text-center self-center">
           <NavigationBar/>
            <First/>
            <Apply/>
            <VideoEmbed/>
            <Sponsors />
            <ScheduleDropDown/>
            <Speakers/>
            <Friends />
            <FAQS/>
        </div>
            <div className="color-peachy">
            <BottomBox />
            </div>
        </div>
    )
}

export default Website;
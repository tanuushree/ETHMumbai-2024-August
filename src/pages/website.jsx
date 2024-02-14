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
import MobileMenu from "../components/mobileView";
import Mobilefooter from "../components/mobileFooter";
import WebFooter from "../components/webFooter";

function Website() {
  return (
    <div className="color-peachy">
	<div className="flex items-center justify-center color-peachy">
	<NavigationBar />
		</div>
      <div className="pt-1 px-20 md:px-60 color-peachy text-center self-center">
        <div className="">
			<First />
		</div>
        <Apply />
        <VideoEmbed />
        <Sponsors />
        <ScheduleDropDown />
        <Speakers />
        <Friends />
        <FAQS />
      </div>
      <div className="color-peachy">
		{/* <WebFooter /> */}
		{/* <Mobilefooter /> */}
		<BottomBox />
      </div>
    </div>
  );
}

export default Website;
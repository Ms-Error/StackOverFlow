import React from "react";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import LeftBar from "../../components/LeftBar/LeftBar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import MobileSideBar from "../../components/MobileSideBar/MobileSideBar";
import ChatBot from "../../components/ChatBot/ChatBot";
import "../../App.css";

const Question = () => {
  return (
    <div className="home-container-1">
      <LeftBar />
      <MobileSideBar />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
  <ChatBot/>
      </div>
    </div>
  );
};

export default Question;

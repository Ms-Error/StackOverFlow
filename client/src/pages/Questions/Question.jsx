import React from "react";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import LeftBar from "../../components/LeftBar/LeftBar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import "../../App.css";

const Question = () => {
  return (
    <div className="home-container-1">
      <LeftBar />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Question;

import React from 'react'
import LeftSideBar from "../../components/LeftBar/LeftBar"
import RightSideBar from "../../components/RightSidebar/RightSidebar"
import QuestionDetails from "./QuestionDetails"

const DisplayQuesiton = () => {
  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2">
    <QuestionDetails/>
        <RightSideBar />
      </div>
    </div>
  );
}

export default DisplayQuesiton
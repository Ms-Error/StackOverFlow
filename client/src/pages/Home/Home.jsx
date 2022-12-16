import React from 'react'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import LeftBar from '../../components/LeftBar/LeftBar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import '../../App.css'
import MobileSideBar from '../../components/MobileSideBar/MobileSideBar'

const Home = () => {
  return (
    <div className="home-container-1">
      <LeftBar />
      <MobileSideBar />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
      
      </div>
    </div>
  );
}

export default Home
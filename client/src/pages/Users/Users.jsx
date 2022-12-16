import React from "react";
import { useLocation } from "react-router-dom";
import MobileSideBar from "../../components/MobileSideBar/MobileSideBar";
import LeftSideBar from "../../components/LeftBar/LeftBar";
import UsersList from "./UsersList";

import "./Users.css";

function Users() {
  const location = useLocation();

  return (
    <div className="home-container-1">
      <LeftSideBar />
      <MobileSideBar />
      <div className="home-container-2">
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        <UsersList />
      </div>
     
    </div>
  );
}

export default Users;

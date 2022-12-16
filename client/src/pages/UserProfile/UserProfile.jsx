import React, { useState } from "react";
import LeftSidebar from "../../components/LeftBar/LeftBar";
import Avatar from "../../components/Avatar/Avatar";
import moment from "moment";

import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./UserProfile.css";
import * as api from "./../../api/";
import { Follow } from "../../actions/users";
import { useEffect } from "react";
import MobileSideBar from "../../components/MobileSideBar/MobileSideBar";

const UserProfile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
      const dispatch = useDispatch();
  const [Switch, setSwitch] = useState(false);
   const [Followed, setFollowed] = useState(currentUser.result.followings.includes(id));
const Luserid = currentUser.result._id;
 console.log(Followed);
 console.log(id);

 useEffect(() => {}, []);
    const handleClick = async () => {
      try {
        if (Followed) {
          // console.log(id);
          await api.unfollow(id, { Luserid });
          dispatch({ type: "unfollow", payload: Luserid });
        } else {
          // console.log(id);
          await api.follow(id, Luserid);
          dispatch({ type: "follow", payload: Luserid });
        }
        setFollowed(!Followed);
      } catch (err) {}
    };
  

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <MobileSideBar/>
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar
                backgroundColor="purple"
                color="white"
                fontSize="50px"
                px="40px"
                py="30px"
              >
                {currentProfile?.name.charAt(0).toUpperCase()}
              </Avatar>

              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                  {moment(currentProfile?.join).fromNow()}
                </p>
              </div>
            </div>

            {currentUser?.result._id === id && (
              <button
                type="button"
                onClick={() => setSwitch(true)}
                className="edit-profile-btn"
              >
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
            )}
            {currentUser?.result._id !== id && !Followed && (
              <button
                onClick={() => handleClick()}
                type="button"
                className="edit-profile-btn"
              >
                <FontAwesomeIcon icon={faUserFriends} /> Follow Profile
              </button>
            )}
            {currentUser?.result._id !== id && Followed && (
              <button
                onClick={() => handleClick()}
                type="button"
                className="edit-profile-btn"
              >
                <FontAwesomeIcon icon={faUserFriends} /> Unfollow Profile
              </button>
            )}
          </div>
          <>
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
          <div className="fol">
            <div className="ing">
              <h3>Following</h3>
              <p>{currentProfile?.followings.length}</p>
            </div>
            <div className="er">
              <h3>Followers</h3>
              <p>{currentProfile?.followers.length}</p>
            </div>
          </div>
        </section>
      </div>
 
    </div>
  );
};

export default UserProfile;

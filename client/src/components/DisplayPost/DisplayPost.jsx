import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import PostImage from "../../pages/Community/PostsImage/Post";
import PostVideo from "../../pages/Community/PostsVideo/Post";
import LeftSidebar from "../LeftBar/LeftBar";

import "./DisplayPost.css";


const DisplayPost = () => {
  const { id } = useParams();
  const postsList = useSelector((state) => state.postsReducer);

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2 post-container">
        {postsList.data?.map((post) => {
          if (post?._id === id) {
            if (post.imageURL != null) {
              return <PostImage post={post} key={post._id} />;
            }
            if (post.videoURL != null) {
              return <PostVideo post={post} key={post._id} />;
            }
          }
        })}
      </div>
    </div>
  );
};

export default DisplayPost;

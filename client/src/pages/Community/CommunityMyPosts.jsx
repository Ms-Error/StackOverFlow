import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import LeftSidebar from '../../components/LeftBar/LeftBar'
import ChatBot from '../../components/chatbot/chatbot'
import MyPosts from './MyPosts/Posts'
import '../../App.css'
import './Community.css'

const CommunityMyPosts = () => {
 
  var User = useSelector((state) => (state.currentUserReducer))
  const postsList = useSelector(state => state.postsReducer)

  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
  <div className='community-page'>
    <div className="community-head">
     
      <nav className='community-navbar'>
          <NavLink to="/Community" className='links'><p>Posts</p></NavLink>
          <NavLink to="/Community/images" className='links'><p>Images</p></NavLink>
          <NavLink to="/Community/videos" className='links'><p>Videos</p></NavLink>
          <NavLink to="/Community/myposts" className='links'><p>My posts</p></NavLink>
      </nav>
    </div>
    <div className='community-body'> 
    <div className='post-body'>
        {
            postsList.data === null ? 
            <h1>Loading...</h1>:
            <>
              <MyPosts postsList={postsList.data.reverse()} id={User?.result?._id}/>
            </>
        }
    </div>
    </div>
    </div>
        <ChatBot />
      </div>
    </div>
  )
}

export default CommunityMyPosts
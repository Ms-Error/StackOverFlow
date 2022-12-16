import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import LeftSidebar from '../../components/LeftBar/LeftBar'


import { postVideo } from '../../actions/post'
import PostsVideo from './PostsVideo/Posts'
import '../../App.css'
import './Community.css'

const CommunityVideos = () => {

  const [message, setMessage] = useState("")
  const [videoURL, setVideoURL] = useState("")  
  const postsList = useSelector(state => state.postsReducer)

  
  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      postVideo({ message, videoURL, postedBy: User.result.name, userId :User.result._id})
    );
  }

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
    <div className="post-message">
            <div className="message-sender">
              <form>
                  <input value={message} onChange={(e) => {setMessage(e.target.value)}} className='message-input' type="text" placeholder='Write your message here...' />  
                  <input value={videoURL} onChange={(e) => {setVideoURL(e.target.value)}} className='url-input' type="text" placeholder='video URL (optional)' />
                  <button onClick={handleSubmit} type="submit"> Post </button>                
              </form>
            </div>
          </div>
          <div className='post-body'>
              {
                postsList.data === null ? 
                <h1>Loading...</h1>:
                <>
                  <PostsVideo postsList={postsList.data.reverse()}/>
                </>
              }
          </div>
      </div>
    </div>
       
      </div>
    </div>
  )
}

export default CommunityVideos
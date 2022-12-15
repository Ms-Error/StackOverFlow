import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import LeftSidebar from '../../components/LeftBar/LeftBar'
import ChatBot from '../../components/chatbot/chatbot'

import {postImage} from '../../actions/post'
import '../../App.css'
import './Community.css'
import PostsImage from './PostsImage/Posts'

const CommunityImages = () => {

  const [message, setMessage] = useState("")
  const [imageURL, setImageURL] = useState("")
  const postsList = useSelector(state => state.postsReducer)

  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      postImage({ message, imageURL, postedBy: User.result.name, userId :User.result._id})
    );
    setMessage("")
    setImageURL("")
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
              <form onSubmit={handleSubmit}>
                  <input value={message} onChange={(e) => {setMessage(e.target.value)}} className='message-input' type="text" placeholder='Write your message here...' />  
                  <input value={imageURL} onChange={(e) => {setImageURL(e.target.value)}} className='url-input' type="text" placeholder='image URL (optional)' />
                  <button type="submit"> Post </button>                
              </form>
            </div>
          </div>
          <div className='post-body'>
              {
                postsList.data === null ? 
                <h1>Loading...</h1>:
                <>
                  <PostsImage postsList={postsList.data.reverse()}/>
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

export default CommunityImages
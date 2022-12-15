import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes, faThumbsUp, faTrashCan } from '@fortawesome/free-solid-svg-icons'


import { likePost, deletePost } from '../../../actions/post'
import Avatar from '../../../components/Avatar/Avatar'

const Post = ({post, myposts}) => {

    const User = useSelector((state) => (state.currentUserReducer))
    const dispatch = useDispatch()
    const url = "https://stack-over-flowww.netlify.app";
    const location = useLocation()
    
    const handleLike = (postId, userId) => {
        dispatch(likePost(postId, userId))
    }

    const handleDelete = (id) => {
        dispatch(deletePost(id))
    }

    const handleShare = (id) => {
        copy(url+"/posts/"+id)
        alert("URL copied : "+url+"/posts/"+id)
        // alert("hi")
    }

  return (
    <div className='post'>
        <div className="top-post">
            <p style={{width:"20px"}} className="avatar">
            <Avatar backgroundColor='#009dff' px="15px" py="5px" borderRadius="50%" color='white'><Link to={`/User/${post.userId}`} style={{color:"white", textDecoration:'none', display:"flex", justifyContent:"center"}}>{post.postedBy.charAt(0).toUpperCase()}</Link></Avatar>
            </p>
            <div className="top-post-info">
                <h3>{post.postedBy}</h3>
                <p>{moment(post.postedOn).fromNow()}</p>
            </div>
        </div>
        <div className='bottom-post'>
            <p>{post.message}</p>
        </div>
        <div className='image-post'>
            <img src={post.imageURL} alt="" />
        </div>
        <div className="options-post">
            <div className="option-post">
                <FontAwesomeIcon icon={faThumbsUp} 
                onClick={() => handleLike(post._id, User.result._id)} />
                <p>{post.likes.length}</p>
            </div>
            <div className="option-post">
                <FontAwesomeIcon icon={faShareNodes} onClick={() => handleShare(post._id)} />
                <p>Share</p>
            </div>
            {
                myposts &&
                <div className="option-post">
                    <FontAwesomeIcon icon={faTrashCan} onClick={() => handleDelete(post._id)}/>
                </div>
            }
        </div>
   </div>
  )
}

export default Post
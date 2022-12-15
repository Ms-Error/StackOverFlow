import React from 'react'

import PostImage from '../PostsImage/Post'
import PostVideo from '../PostsVideo/Post'
import '../Community.css'

const Posts = ({ postsList, id }) => {
  return (
        <>
            {
                postsList.slice().reverse().map((post) => {
                  if(post.userId === id)
                  {
                    if(post.imageURL != null)
                  {
                    return(
                        <PostImage post={post} key={post._id} myposts={true}/>
                    )
                  }
                  if(post.videoURL != null)
                  {
                    return(
                        <PostVideo post={post} key={post._id} myposts={true}/>

                    )
                  }
                  }
                })
            }
        </>
  )
}

export default Posts
import React from 'react'

import PostImage from '../PostsImage/Post'
import PostVideo from '../PostsVideo/Post'
import '../Community.css'

const Posts = ({ postsList }) => {
  return (
        <>
            {
                postsList.slice().reverse().map((post) => {
                  if(post.imageURL != null)
                  {
                    return(
                        <PostImage post={post} key={post._id} />

                    )
                  }
                  if(post.videoURL != null)
                  {
                    return(
                        <PostVideo post={post} key={post._id} />

                    )
                  }
                })
            }
        </>
  )
}

export default Posts
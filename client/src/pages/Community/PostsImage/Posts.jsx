import React from 'react'

import Post from './Post'
import '../Community.css'

const Posts = ({ postsList }) => {
  return (
        <>
            {
                postsList.slice().reverse().map((post) => {
                  if(post.imageURL != null)
                  {
                    return(
                        <Post post={post} key={post._id} />

                    )
                  }
                })
            }
        </>
  )
}

export default Posts
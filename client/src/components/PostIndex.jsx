import React from 'react'
import { withRouter } from 'react-router-dom'

import PostForm from './PostForm'

const PostIndex = props => {
  const {
    user,
    posts,
    postFormData,
    handlePostFormChange,
    handleSlatePostChange,
    handlePostFormCreate,
  } = props


  return (
    <>
      {user.id == 1 && <PostForm
        formData={postFormData}
        handleChange={handlePostFormChange}
        handleSlateChange={handleSlatePostChange}
        handleSubmit={handlePostFormCreate}
      />}
      {posts.map(post => (
        <div className='post' key={post.id}>
          <h2>{post.title}</h2>
          <h3>{post.user.username}</h3>
          <button onClick={()=>props.history.push(`/posts/${post.id}`)}>View Post</button>
        </div>
      ))}
    </>
  )
}

export default PostIndex

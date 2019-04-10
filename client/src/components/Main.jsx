import React from 'react'
import { Route } from 'react-router-dom'

import PostIndex from './PostIndex'
import PostView from './PostView'
import UserForm from './UserForm'
import UserProfile from './UserProfile'

const Main = props => {
  const {
    user,
    userFormData,
    handleUserFormChange,
    handleUserFormCreate,
    handleLogin,
    handleEditSelect,
    handleUpdateUser,
    handleDeleteUser,

    posts,
    postFormData,
    handlePostFormChange,
    handlePostFormCreate,

    post,
    comments,
    commentFormData,
    handleCommentFormChange,
    handleCommentFormCreate,
    postViewCheck,
  } = props

  return(
    <>
      <Route exact path='/' render={props => (
        <PostIndex
          {...props}
          user={user}
          posts={posts}
          postFormData={postFormData}
          handlePostFormChange={handlePostFormChange}
          handlePostFormCreate={handlePostFormCreate}
        />
      )} />

      <Route path='/register' render={props => (
        <UserForm
          {...props}
          userFormData={userFormData}
          handleUserFormChange={handleUserFormChange}
          handleUserFormCreate={handleUserFormCreate}
        />
      )} />

      <Route path='/login' render={props => (
        <UserForm
          {...props}
          userFormData={userFormData}
          handleUserFormChange={handleUserFormChange}
          handleLogin={handleLogin}
        />
      )} />

      <Route path='/profile' render={props => (
        <UserProfile
          {...props}
          user={user}
          userFormData={userFormData}
          handleUserFormChange={handleUserFormChange}
          handleDeleteUser={handleDeleteUser}
          handleEditSelect={handleEditSelect}
          handleUpdateUser={handleUpdateUser}
        />
      )} />

      <Route path='/posts/:id' render={props => (
        <PostView {...props}
          post={post}
          comments={comments}
          commentFormData={commentFormData}
          handleCommentFormChange={handleCommentFormChange}
          handleCommentFormCreate={handleCommentFormCreate}
          postViewCheck={postViewCheck}
        />
      )} />
    </>
  )
}

export default Main

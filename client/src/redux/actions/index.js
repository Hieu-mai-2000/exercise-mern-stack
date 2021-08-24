import { createAction, createActions } from 'redux-actions'

export const getType = (reduxAction) => {
  return reduxAction().type
}

export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostsRequestSuccess: (payload) => payload,
  getPostsRequestFailed: (error) => error,
})
export const createPosts = createActions({
  createPostsRequest: (payload) => payload,
  createPostsRequestSuccess: (payload) => payload,
  createPostsRequestFailed: (error) => error,
})

export const showModal = createAction('SHOW_CREATE_POST_MODAL')
export const hiddenModal = createAction('HIDDEN_CREATE_POST_MODAL')

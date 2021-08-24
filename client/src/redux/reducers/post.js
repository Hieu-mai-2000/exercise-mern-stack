import { INITIAL_STATE } from '../../constant'
import { getType, getPosts, createPosts } from '../actions'

export default function postReducer(state = INITIAL_STATE.post, action) {
  switch (action.type) {
    case getType(getPosts.getPostsRequest):
      return {
        ...state,
        isLoading: true,
      }
    case getType(getPosts.getPostsRequestSuccess):
      return {
        ...state,
        isLoading: false,
        data:action.payload,
      }
    case getType(getPosts.getPostsRequestFailed):
      return {
        ...state,
        isLoading: false,
      }
    case getType(createPosts.createPostsRequestSuccess):
      return {
        ...state,
        data: [...state.data, action.payload],
      }

    default:
      return state
  }
}

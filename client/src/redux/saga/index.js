import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api'

function* fetchPostSaga() {
  try {
    const response = yield call(api.getPosts)
    console.log('redux-saga: ', response.data.posts)
    yield put(actions.getPosts.getPostsRequestSuccess(response.data.posts))
  } catch (error) {
    console.log(error.message)
    yield put(actions.getPosts.getPostsRequestFailed(error))
  }
}

function* createPostSaga(action) {
  try {
    const { data } = yield call(api.createPosts, action.payload)
    console.log('redux-create-saga: ', data.post)
    yield put(actions.createPosts.createPostsRequestSuccess(data.post))
  } catch (error) {
    console.log(error.message)
    yield put(actions.createPosts.createPostsRequestFailed(error))
  }
}

function* rootSaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga)
  yield takeLatest(actions.createPosts.createPostsRequest, createPostSaga)
}

export default rootSaga

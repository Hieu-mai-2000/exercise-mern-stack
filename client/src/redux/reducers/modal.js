import { INITIAL_STATE } from '../../constant'
import { getType, getPosts, showModal, hiddenModal } from '../actions'

export default function postReducer(state = INITIAL_STATE.modal, action) {
  switch (action.type) {
    case getType(showModal):
      return {
        isShow: true,
      }
    case getType(hiddenModal):
      return {
        isShow: false,
      }
    default:
      return state
  }
}

import { getInitialData } from '../utils/api'
import { setAuthedUser } from './authedUser'
import { receiveUsers } from './users'
import { receivePolls } from './polls'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const AUTHED_USER = 'tylermcginnis'

export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading())

    return getInitialData()
      .then(({ users, polls }) => {
        dispatch(hideLoading())
        dispatch(receiveUsers(users))
        dispatch(receivePolls(polls))
        dispatch(setAuthedUser(AUTHED_USER))
      })
  }
}
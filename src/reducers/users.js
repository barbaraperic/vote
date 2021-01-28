import { RECEIVE_USERS } from '../actions/users'
import { ADD_POLL } from '../actions/poll'

export const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_POLL : 
      const poll = action.poll
      const { author, id } = poll
      
      return {
        ...state,
        [author]: {
          ...state[author],
          polls: state[author].polls.concat([id])
        }
      }
    default: return state
  }
}
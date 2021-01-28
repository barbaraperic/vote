import { RECEIVE_POLLS, ADD_POLL } from '../actions/polls'
import { ADD_ANSWER } from '../actions/answers'

export const polls = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POLLS :
      return {
        ...state,
        ...action.polls
      }
    case ADD_POLL :
      return {
        ...state,
        [action.poll.id]: action.poll
      }
    case ADD_ANSWER :
      const { authedUser, id, answer } = action
      const poll = state[id]
      const votesKey = answer + 'Votes'
      
      return {
        ...state,
        [poll.id]: {
          ...state,
          votesKey: poll[votesKey].concat([authedUser])
        }
      }
    default : return state
  }
}
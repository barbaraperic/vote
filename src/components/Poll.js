import React from 'react';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTextKeys, getVoteKeys, getPercentage } from '../utils/helpers'
import { handleAddAnswer } from '../actions/answers'

const Poll = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const authedUser = useSelector((state) => state.authedUser)
  const users = useSelector((state) => state.users)
  const polls = useSelector((state) => state.polls)

  const poll = polls[id]

  if (!poll) {
    return <p>This poll doesn't exist</p>
  }

  const voteKeys = getVoteKeys()

  const authorAvatar = users[poll.author].avatarURL

  const vote = voteKeys.reduce((vote, key) => {
    if (poll[key].includes(authedUser)) {
      return key[0]
    }

    return vote === null ? null : vote
  }, null)

  const totalVotes = voteKeys
    .reduce((total, key) => total + poll[key].length, 0)

  const handleAnswer = (answer) => {
    if (vote === null) {
      dispatch(handleAddAnswer({
        authedUser,
        answer,
        id: poll.id,
      }))
    }
  }

  return (
    <div className="poll-container">
      <h3 className='question'>{poll.question}</h3>
      <div className="poll-author">
        BY <img src={authorAvatar} alt="avatar"/>
      </div>
      <ul>
      {getTextKeys().map((key) => {
        const count = poll[key[0] + 'Votes'].length
        return (
          <li
            onClick={() => handleAnswer(key[0])}
            className={`option ${vote === key[0] ? 'chosen' : ''}`}
            key={key}
          >
            {vote === null
              ? poll[key]
              : <div className='result'>
                  <span>{poll[key]}</span>
                  <span>{getPercentage(count ,totalVotes)}% ({count})</span>
                </div>}
            </li>
        )
      })}
      </ul>
    </div>
  )
}

export default Poll
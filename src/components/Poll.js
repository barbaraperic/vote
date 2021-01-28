import React from 'react';
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getTextKeys } from '../utils/helpers'
import { getVoteKeys } from '../utils/helpers'

const Poll = () => {
  const { id } = useParams();
  const polls = useSelector(state => state.polls)
  const users = useSelector(state => state.users)
  const authedUser = useSelector(state => state.authedUser)
  
  const poll = polls[id]
  const author = users[poll.author]

  const didVote = () => {
    return users[authedUser].answers.filter(id => !poll[id]) 
    ? false 
    : true
  }

  console.log(didVote())

  // did he already vote?


  return (
    <div className="poll-container">
      <h3 className='question'>{poll.question}</h3>
      <div className="poll-author">
        BY <img src={author.avatarURL} alt="avatar"/>
      </div>
      <ul>
        {getTextKeys().map((key) => (
          <li key={key}>{poll[key]}</li>
        ))}
      </ul>
    </div>
  )
}

export default Poll
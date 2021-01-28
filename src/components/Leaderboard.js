import React from 'react'
import { useSelector } from 'react-redux'

const Leaderboard = () => {
  const users = useSelector(state => state.users)

  const sorted = Object.keys(users)
    .map((id) => {

      const { avatarURL, name, polls, answers } = users[id]

      return {
        id,
        avatarURL,
        name,
        polls: polls.length,
        answers: answers.length
      }
    }).sort((a, b) => (b.answers + b.polls) - (a.polls + a.answers))

  console.log(sorted)

  return (
    <ul>
      {sorted.map(user => (
        <li className='user' key={user.id}>
          <img src={user.avatarURL} alt="Avatar"/>
          <div>
            <h1>{user.name}</h1>
            <p>{user.polls} Polls</p>
            <p>{user.answers} Answers</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Leaderboard
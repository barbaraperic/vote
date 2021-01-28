import * as React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const [list, setList] = React.useState('unanswered')
  const authedUser = useSelector((state) => state.authedUser)
  const users = useSelector((state) => state.users)
  const polls = useSelector((state) => state.polls)

  const answers = users[authedUser].answers


  const answered = answers.map(id => polls[id])
  .sort((a, b) => b.timestamp - a.timestamp)

  const unanswered = Object.keys(polls)
    .filter(id => !answers.includes(id))
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp)

  const questions = { answered, unanswered }

  return (
    <React.Fragment>
      <div className='dashboard-toggle'>
        <button
          style={{ 
            textDecoration: list === 'unanswered'
            ? 'underlined' : null
          }}
          onClick={() => setList('unanswered')}
        >
          Unanswered
        </button>
        <span> | </span>
        <button
          style={{ 
            textDecoration: list === 'answered'
            ? 'underlined' : null
          }}
          onClick={() => setList('answered')}
        >
          Answered
        </button>
        </div>
        <ul className='dashboard-list'>
          {questions[list].map(poll => (
            <li key={poll.id}>{poll.question}</li>
          ))}
        </ul>
    </React.Fragment>
  )
}

export default Dashboard
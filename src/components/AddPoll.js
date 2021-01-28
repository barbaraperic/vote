import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleAddPoll } from '../actions/polls'
import { useHistory } from 'react-router-dom'

const AddPoll = () => {
  const [ question, setQuestion ] = useState('')
  const [ options, setOptions ] = useState({
    a: '', b: '', c: '', d: ''
  })

  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push('/')
    dispatch(handleAddPoll({
      question,
      ...options
    }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setOptions((options) => ({
      ...options,
      [name]: value
    }))
  }

  const isDisabled = () => {
    return question === ''
    || options.a === ''
    || options.b === ''
    || options.c === ''
    || options.d === ''
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <h3>What is the question?</h3>
      <input
        className="input"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <h3>What are the options?</h3>
      <label className="label "htmlFor="input">A.</label>
      <input
        className="input"
        type="text"
        name="a"
        value={options.a || ''}
        onChange={handleInputChange}
      />
      <label className="label "htmlFor="input">B.</label>
      <input
        className="input"
        type="text"
        name="b"
        value={options.b}
        onChange={handleInputChange}
      />
      <label className="label "htmlFor="input">C.</label>
      <input
        className="input"
        type="text"
        name="c"
        value={options.c}
        onChange={handleInputChange}
      />
      <label className="label "htmlFor="input">D.</label>
      <input
        className="input"
        type="text"
        name="d"
        value={options.d}
        onChange={handleInputChange}
      />
      <button className="btn" disabled={isDisabled()}>Submit</button>
    </form>
  )
}

export default AddPoll
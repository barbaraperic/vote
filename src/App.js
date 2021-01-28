import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { handleInitialData } from './actions/shared'
import Dashboard from './components/Dashboard'
import AddPoll from './components/AddPoll'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.authedUser === null)

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <Router>
      <div className='container'>
        {loading === true 
          ? null
          : <AddPoll />
        }
      </div>
    </Router>
  );
}

export default App;

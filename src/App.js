import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { handleInitialData } from './actions/shared'
import Dashboard from './components/Dashboard'
import Leaderboard from './components/Leaderboard'
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
          : <Dashboard />
        }
      </div>
    </Router>
  );
}

export default App;

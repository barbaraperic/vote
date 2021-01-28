import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { handleInitialData } from './actions/shared'
// import Dashboard from './components/Dashboard'
import Leaderboard from './components/Leaderboard'

const App = () => {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.authedUser === null)
  const state = useSelector((state) => state)

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <div className='container'>
      {loading === true 
        ? null
        : <Leaderboard />
      }
    </div>
  );
}

export default App;

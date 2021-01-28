import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { handleInitialData } from './actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import Dashboard from './components/Dashboard'

const App = () => {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.authedUser === null)
  const state = useSelector((state) => state)

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  console.log(state)

  return (
    <div className="App">
      <LoadingBar />
      <Dashboard />
    </div>
  );
}

export default App;

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { handleInitialData } from './actions/shared'
import Dashboard from './components/Dashboard'
import Leaderboard from './components/Leaderboard'
import AddPoll from './components/AddPoll'
import Nav from './components/Nav'
import Poll from './components/Poll'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.authedUser === null)

  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <div className='container'>
          <Nav />
          {loading === true 
            ? null
            : <div>
            <Route path='/' exact>
              <Dashboard />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
            <Route path="/poll/:id">
              <Poll />
            </Route>
            <Route path="/add">
            <AddPoll />
            </Route>
            </div>}
        </div>
      </Switch>
    </Router>
  );
}

export default App;

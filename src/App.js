import React from 'react'
import { useSelector } from 'react-redux'
import './App.css';
import LoadingBar from 'react-redux-loading-bar'
import Dashboard from './components/Dashboard'

const App = () => {

  const state = useSelector((state) => state)

  console.log('state', state)

  return (
    <div className="App">
      <LoadingBar />
      <Dashboard />
    </div>
  );
}

export default App;

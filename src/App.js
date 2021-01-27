import React from 'react'
import { useSelector } from 'react-redux'
import './App.css';


const App = () => {

  const state = useSelector((state) => state)

  console.log('state', state)

  return (
    <div className="App">
      <p>Vote</p>
    </div>
  );
}

export default App;

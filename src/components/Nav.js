import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <ul className="nav" style={{ display: 'flex'}}>
      <Link to="/">
        <li>Dashboard</li>
      </Link>
      <Link to="/leaderboard">
        <li>Leaderboard</li>
      </Link>
      <Link to="/add">
        <li>Add Poll</li>
      </Link>
    </ul>
  )
}

export default Nav
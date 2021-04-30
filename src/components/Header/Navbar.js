import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
      <nav>
      <Link to="/">Home</Link>
      <Link to="/coffees">Coffees</Link>
    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
    </nav>
  )
}
export default Navbar
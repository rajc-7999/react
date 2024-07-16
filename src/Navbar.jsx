import React from 'react'
 import './App.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav>
        <Link to='/'> Home </Link>
        <Link to='/about'> About </Link>
        <Link to='/contact'> Contact </Link>
        </nav>
    </div>
  )
}

export default Navbar
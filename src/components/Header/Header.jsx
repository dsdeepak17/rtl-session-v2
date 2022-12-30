import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header' id='header'>
      <nav>
        <Link to="/">Todo</Link>
        <Link to="/followers">Followers</Link>
      </nav>
    </div>
  )
}

export default Header
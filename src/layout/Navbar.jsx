import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <menu>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/example">example page</NavLink></li>
      </menu>
    </nav>
  )
}

export default Navbar

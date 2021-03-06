import React from 'react'
import { useGlobalContext } from './context'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="nav-center">
      <Link to="/">
        <img src={logo} alt="cocktail db" className="logo"/>
      </Link>
    </div>
     
    </nav>
  )
}

export default Navbar

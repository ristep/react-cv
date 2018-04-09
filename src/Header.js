import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/css/menu.css'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header id="menito">
		<nav className="no-print">
			<NavLink className='lnk' to='/' exact>Home</NavLink>
			<NavLink className='lnk' to='/resume1'>Resume I</NavLink>
			<NavLink className='lnk' to='/resume2'>Resume II</NavLink>
			<NavLink className='lnk' to='/cv1'>CV I</NavLink>
			<NavLink className='lnk' to='/cv2'>CV II</NavLink>
			<NavLink className='lnk' to='/about'>About</NavLink>
			<a className="icon">&#9776;</a>
		</nav>
  
  </header>
)

export default Header

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div>
			<h1>Navbar Component</h1>
			<nav>
				<ul>
					<Link to="/"><img src="../../images/logo/logo-smarty_mobile.svg" alt="Logo" /></Link>
					<Link to="/about">About</Link>
					<Link to="/free-month">Get a free month</Link>
					<Link to="/group-plan">Group plane</Link>
					<Link to="/app">App</Link>
				</ul>
				<ul>
					<Link to="/login">Log in</Link>
					<Link to="/activate">Activate SIM</Link>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar

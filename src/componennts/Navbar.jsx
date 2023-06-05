import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


function Navbar() {
	const { currentUser, handleSignOut } = useContext(AuthContext)

	return (
		<>
			<header className="p-4 dark:bg-gray-900 dark:text-gray-100">
				<div className="container flex justify-between h-16 mx-auto">
					<Link to={'/'} rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
						<p>Jubayet</p>
					</Link>

					<ul className="items-stretch hidden space-x-3 lg:flex">
						<li className="flex">
							<NavLink rel="noopener noreferrer" to='/' className={({ isActive }) =>
								isActive ? 'flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400' : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'
							}>Home</NavLink>
						</li>
						{currentUser ? <li className="flex">
							<NavLink rel="noopener noreferrer" to="profile" className={({ isActive }) =>
								isActive ? 'flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400' : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'
							}>Profile</NavLink>
						</li> : ''}
					</ul>
					<div className="items-center flex-shrink-0 hidden lg:flex">
						{!currentUser ? <><NavLink to='signin' className="self-center px-8 py-3 rounded">Sign in</NavLink>
							<NavLink to='signup' className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Sign up</NavLink></> : <button onClick={handleSignOut} className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Sign Out</button>}
					</div>

					<button className="p-4 lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
				</div>
			</header>
		</>
	)
}

export default Navbar
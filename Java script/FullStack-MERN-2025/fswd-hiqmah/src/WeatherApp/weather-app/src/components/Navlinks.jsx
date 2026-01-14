import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
	return (
		<>
			<div className=' flex gap-3'>
				<NavLink
					className={(e) =>
						`${e.isActive ? 'activeLink' : ''}
					 text-white  p-2.5 bg-linear-to-br from-purple-700/60 via-purple-900/60 to-black border-s rounded-2xl text-lg font-medium hover:text-gray-300 transition-colors duration-200 
						`
					}
					to='/'>
					Current
				</NavLink>
				<NavLink
					className={(e) =>
						`text-white  p-2.5 bg-linear-to-br from-purple-700/60 via-purple-900/60 to-black border-s rounded-2xl text-lg font-medium hover:text-gray-300 transition-colors duration-200 ${
							e.isActive ? 'activeLink' : ''
						}`
					}
					to='/forecast'>
					Forecast
				</NavLink>
			</div>
		</>
	);
};

export default NavLinks;

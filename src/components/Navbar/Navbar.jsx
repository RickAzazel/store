import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = ({ closeMenu }) => {
	const LIST_LIMIT = 10;
	
	const { list } = useSelector(({ categories }) => categories);

	return (
		<nav className='menu'>
			<ul className='menu__list'>
				{list.map(({ id, name }, index) => {
					if (index < LIST_LIMIT) {
						return (
							<li key={id}>
								<NavLink
									onClick={closeMenu}
									className={({ isActive }) => (
										`menu__link ${isActive ? 'menu__link--active' : ''}`
									)}
									to={`/categories/${id}`}
								>
									{name}
								</NavLink>
							</li>
						);
					}

					return null;
				})}
			</ul>
		</nav>
	)
}

export default Navbar;
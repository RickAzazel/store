import React from 'react';

import HeaderUser from './HeaderUser';
import HeaderForm from './HeaderForm';
import HeaderAccount from './HeaderAccount';
import Logo from '../Logo/Logo';
import Burger from '../Burger/Burger';

const Header = ({ setToggleMenu }) => {

	return (
		<header className='header'>

			<Burger setToggleMenu={setToggleMenu} />
			<Logo />

			<div className="info">

				<HeaderUser />
				<HeaderForm />
				<HeaderAccount />

			</div>
			
		</header>
	)
}

export default Header;
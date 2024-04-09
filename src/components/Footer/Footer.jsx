import React from 'react';

import Socials from '../Socials/Socials';
import Logo from '../Logo/Logo';


const Footer = () => {
	return (
		<footer className='footer'>
			<Logo />

			<div className="rights">
				Developed by
				<a
					className='rights__link'
					href="/"
					target='_blank'
					rel='noopener noreferrer'
				>
					MM
				</a>
			</div>

			<Socials />
		</footer>
	)
}

export default Footer;
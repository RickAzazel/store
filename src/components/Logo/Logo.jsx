import React from 'react';
import { Link } from 'react-router-dom';
import { FaStore } from 'react-icons/fa';

import { ROUTES } from '../../utils/routes';

const Logo = () => {
	return (
		<div className="logo">
			<Link
				className='logo__link'
				to={ROUTES.HOME}
			>
				<FaStore />
			</Link>
		</div>
	)
}

export default Logo;
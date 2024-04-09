import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaRegHeart, FaShoppingBag } from 'react-icons/fa';

import { ROUTES } from '../../utils/routes';

const HeaderAccount = () => {
	const { cart } = useSelector(({ user }) => user);

	return (
		<div className="account">
			<Link to={ROUTES.FAVOURITES} className='account__favourites'>
				<FaRegHeart />
			</Link>

			<Link to={ROUTES.CART} className='account__cart'>
				<FaShoppingBag />
				{!!cart.length && (
					<span className='account__cart-count'>{cart.length}</span>
				)}
			</Link>
		</div>
	)
}

export default HeaderAccount;
import React from 'react';
import { useSelector } from 'react-redux';

import CartList from './CartList';
import CartActions from './CartActions';
import EmptyMessage from './../Empty/EmptyMessage';

const Cart = () => {
	const { cart } = useSelector(({ user }) => user);
	
	return (
		<section className='cart'>
			<h2 className="cart__title">Your cart</h2>

			{!cart.length ? (
				<EmptyMessage />
			) : (
				<>
					<CartList cart={cart} />
					<CartActions cart={cart} />
				</>
			)}
		</section>
	)
}

export default Cart;
import React from 'react';

import { sumBy } from './../../utils/common';

import Button from './../Button/Button';

const CartActions = ({ cart }) => {
	const handleClick = () => console.log('click');

	return (
		<div className="cart__actions">
			<div className='cart__actions-total'>
				TOTAL PRICE: {' '}
				<span>${sumBy(cart.map(({ quantity, price }) => quantity * price))}</span>
			</div>

			<Button
				className='cart__actions-proceed'
				onClick={handleClick}
				text='Proceed to checkout'
			/>
		</div>
	)
}

export default CartActions;
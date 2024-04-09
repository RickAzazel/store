import React from 'react'
import { useDispatch } from 'react-redux';
import { FaMinus, FaPlus, FaWindowClose } from 'react-icons/fa';

import { addItemToCart, removeItemFromCart } from '../../features/user/userSlice';
import { formatURL } from '../../utils/common';

import ButtonClose from './../Button/ButtonClose';

const CartList = ({ cart }) => {
	const dispatch = useDispatch();

	const changeQuantity = (item, quantity) => {
		dispatch(addItemToCart({ ...item, quantity }));
	};

	const removeItem = (id) => {
		dispatch(removeItemFromCart(id));
	};

	return (
		<ul className='cart__list'>
			{cart.map((item) => {
				const { title, category, images, price, id, quantity } = item;

				return (
					<li key={id} className="cart__list-item">
						<div
							className="cart__list-image"
							style={{ backgroundImage: `url(${formatURL(images[0])})` }}
						/>

						<div className="cart__list-info">
							<h3 className="cart__list-name">{title}</h3>
							<p className="cart__list-category">{category.name}</p>
						</div>

						<p className="cart__list-price">${price}</p>

						<div className="cart__list-quantity">
							<div
								className="cart__list-minus"
								onClick={() => changeQuantity(item, Math.max(1, quantity - 1))}
							>
								<FaMinus />
							</div>

							<span>{quantity}</span>

							<div
								className="cart__list-plus"
								onClick={() => changeQuantity(item, Math.max(1, quantity + 1))}
							>
								<FaPlus />
							</div>
						</div>

						<span className="cart__list-total">${price * quantity}</span>

						<ButtonClose
							className="cart__list-close"
							onClick={() => removeItem({ id })}
							icon={<FaWindowClose />}
						/>
					</li>
				)
			})}
		</ul>
	)
}

export default CartList;
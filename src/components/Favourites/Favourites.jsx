import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegWindowClose } from "react-icons/fa";

import Button from './../Button/Button';
import ButtonClose from './../Button/ButtonClose';
import EmptyMessage from './../Empty/EmptyMessage';

import { formatURL } from '../../utils/common';
import { removeItemFromFavourites } from '../../features/user/userSlice';

const Favourites = () => {
	const dispatch = useDispatch();

	const { favourites } = useSelector(({ user }) => user);

	const removeItem = (id) => {
		dispatch(removeItemFromFavourites(id));
	};


	return (
		<section className='favourites'>
			<h2 className="favourites__title">Favourites</h2>

			{!favourites.length ? (
				<EmptyMessage />
			) : (
				<ul className="favourites__list">
					{favourites.map(({ id, title, category, images, description, price }) => (
						<li
							key={id}
							className="favourites__list-item"
						>
							<ButtonClose
								className='favourites__list-close'
								onClick={() => removeItem({ id })}
								icon={<FaRegWindowClose />}
							/>

							<div
								className="favourites__list-image"
								style={{ backgroundImage: `url(${formatURL(images[0])})` }}
							/>

							<div className='favourites__list-content'>
								<h3 className='favourites__list-title'>{title}</h3>
								<h4 className='favourites__list-subtitle'>{category.name}</h4>

								<div className="favourites__list-bottom">
									<p className='favourites__list-price'>${price}</p>
									
									<Link
										to={`/products/${id}`}
										className='favourites__list-link'
									>
										<Button
											className='favourites__list-button'
											text='More'
										/>
									</Link>
								</div>
							</div>
						</li>
					))}
				</ul>
			)}
		</section>
	)
}

export default Favourites;
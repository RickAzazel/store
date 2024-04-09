import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaRegCircle, FaCircle } from "react-icons/fa";

import { addItemToCart, addItemToFavourites } from '../../features/user/userSlice';
import { formatURL } from '../../utils/common';
import { ROUTES } from './../../utils/routes';
import { SIZES } from '../../utils/constants';

import Button from '../Button/Button';

const Product = ({item}) => {
	const { images, title, price, description } = item;

	const dispatch = useDispatch();

	const listRef = useRef();
	const [currentImage, setCurrentImage] = useState();
	const [currentSize, setCurrentSize] = useState();
	const [currentBullet, setCurrentBullet] = useState();

	useEffect(() => {
		if (!images.length) return;

		setCurrentImage(formatURL(images[0]));
		setCurrentBullet(formatURL(images[0]));

		const list = listRef.current;

		const handleScroll = () => {
			const GAP_WIDTH = 20;
			const IMAGES_COUNT = 3;

			const gapCount = IMAGES_COUNT - 1;
			const imageWidth = (list.scrollWidth - GAP_WIDTH * gapCount) / IMAGES_COUNT;
			const imageWidthWithGap = imageWidth + GAP_WIDTH;

			switch (true) {
				case list.scrollLeft < imageWidthWithGap:
					setCurrentBullet(formatURL(images[0]));
					break;
				case list.scrollLeft < imageWidthWithGap * 2:
					setCurrentBullet(formatURL(images[1]));
					break;
				case list.scrollLeft >= imageWidth * gapCount:
					setCurrentBullet(formatURL(images[2]));
					break;
				default:
					break;
			}
		};

		list.addEventListener('scroll', handleScroll);

		return () => list.removeEventListener('scroll', handleScroll);
	}, [images]);

	const addToCart = () => {
		dispatch(addItemToCart(item));
	};

	const addToFavourites = () => {
		dispatch(addItemToFavourites(item));
	};

	return (
		<section className='product'>
			<div className="product__images">

				<ul ref={listRef} className="product__images-list">
					<li
						className="product__images-current"
						style={{ backgroundImage: `url(${currentImage})` }}
					/>

					{images.map((image, i) => (
						<li
							key={i}
							className="product__image"
							style={{ backgroundImage: `url(${formatURL(image)})` }}
							onClick={() => { setCurrentImage(formatURL(image)) }}
						/>
					))}
				</ul>

				<ul className="product__pagination-bullets">
					{images.map((image, i) => {
						return (
							<li
								key={i}
								className='product__pagination-bullet'
							>
								{formatURL(image) === currentBullet ? <FaCircle /> : <FaRegCircle />}
							</li>
						);
					})}
				</ul>

			</div>

			<div className="product__info">
				<h1 className='product__title'>{title}</h1>
				<p className="product__price">${price}</p>

				<div className="product__color">
					<span>Color:</span> Green
				</div>

				<div className="product__sizes">
					<span>Sizes:</span>

					<ul className='product__sizes-list'>
						{SIZES.map((size) => (
							<li
								key={size}
								className={`${'product__size'} ${currentSize === size ? 'product__size--active' : ''}`}
								onClick={() => { setCurrentSize(size) }}
							>
								{size}
							</li>
						))}
					</ul>

				</div>

				<p className='product__description'>{description}</p>

				<div className="product__actions">
					<Button
						className='product__button-add'
						disabled={!currentSize}
						onClick={addToCart}
						text="Add to cart"
					/>
					<Button
						className='product__button-favourite'
						onClick={addToFavourites}
						text='Add to favourites'
					/>
				</div>

				<div className="product__bottom">
					<p className='product__bottom-purchase'>19 people purchased</p>
					<Link
						to={ROUTES.HOME}
						className='product__bottom-link'
					>
						Return to store
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Product;
import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Button from './../Button/Button';
import ProductsList from '../Products/ProductsList';

const CardSlider = ({ products }) => {
	const productsListRef = useRef();

	const handlescrollLeft = () => {
		productsListRef.current.scrollLeft -= 260;
	};

	const handlescrollRight = () => {
		productsListRef.current.scrollLeft += 260;
	};

	return (
		<div className='products__slider'>
			<div className="products__slider-container">
				<Button
					className="products__arrow products__arrow-left"
					onClick={handlescrollLeft}
					text={<FaArrowLeft />}
				/>

				<ProductsList
					productsListRef={productsListRef}
					products={products}
					listClassName='products__list products__list--slider'
					listItemClassName='products__list-item products__list-item--slider'
				/>

				<Button
					className="products__arrow products__arrow-right"
					onClick={handlescrollRight}
					text={<FaArrowRight />}
				/>
			</div>
		</div>
	)
}

export default CardSlider;
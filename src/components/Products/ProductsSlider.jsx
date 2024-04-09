import React from 'react';

import CardSlider from '../CardSlider/CardSlider';

const ProductsSlider = (props) => {
	const {
		title,
		products = [],
		style = {},
	} = props;

	return (
		<section className='products' style={style}>
			{title && <h2 className='products__title'>{title}</h2>}

			<CardSlider
				products={products}
			/>
		</section>
	)
}

export default ProductsSlider;
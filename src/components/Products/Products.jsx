import React from 'react';

import ProductsList from './ProductsList';

const Products = (props) => {
	const {
		title,
		amount,
		products = [],
		style = {},
	} = props;

	return (
		<section className='products' style={style}>
			{title && <h2 className='products__title'>{title}</h2>}

			<ProductsList
				products={products}
				listClassName='products__list'
				listItemClassName='products__list-item'
				amount={amount}
			/>
		</section>
	)
}

export default Products;
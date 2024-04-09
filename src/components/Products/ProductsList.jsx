import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { formatURL } from '../../utils/common';

const ProductsList = (props) => {
	const {
		productsListRef,
		products,
		listClassName,
		listItemClassName,
		amount
	} = props;

	const [scrollCard, setScrollCard] = useState(0);

	let list;

	if (amount) {
		list = products.filter((_, i) => i < amount);
	} else {
		list = products;
	};

	return (
		<ul
			className={listClassName}
			ref={productsListRef}
			style={{ scrollLeft: scrollCard }}
		>
			{list.map(({ id, images, title, category: { name: cat }, price }) => (
				<li key={id} className={listItemClassName}>
					<Link
						to={`/products/${id}`}
						className='products__list-link'
					>
						<div
							className="products__list-image"
							style={{ backgroundImage: `url(${formatURL(images[0])})` }}
						/>
					</Link>

					<div className="products__list-description">
						<h3 className='products__list-title'>{title}</h3>
						<p className='products__list-cat'>{cat}</p>

						<div className='products__list-info'>
							<div className="products__list-prices">
								<p className='products__list-price'>${price}</p>
								<p className='products__list-old-price'>
									${Math.floor(price * 0.8)}
								</p>
							</div>

							<p className='products__list-purchases'>
								{Math.floor(Math.random() * 20 + 1)} purchased
							</p>
						</div>

					</div>
				</li>
			))}
		</ul>
	)
}

export default ProductsList;
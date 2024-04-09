import React from 'react';
import { Link } from 'react-router-dom';

const Categories = (props) => {
	const {
		title,
		amount,
		products = [],
	} = props;

	const list = products.filter((_, i) => i < amount);

	return (
		<section className='categories'>
			<h2 className='categories__title'>{title}</h2>

			<ul className='categories__list'>

				{list.map(({ id, name, image }) => (
					<li key={id} className='categories__list-item'>
						<Link
							to={`/categories/${id}`}
							className='categories__list-link'
						>
							<div
								className="categories__list-image"
								style={{ backgroundImage: `url(${image})` }}
							/>
							<h3 className='categories__list-title'>{name}</h3>
						</Link>
					</li>
				))}

			</ul>
		</section>
	)
}

export default Categories;
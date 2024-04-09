import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filterByPrice } from '../../features/products/productsSlice';

import Poster from './../Poster/Poster';
import ProductsSlider from '../Products/ProductsSlider';
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';


const Home = () => {
	const dispatch = useDispatch();

	const categories  = useSelector((state) => state.categories);
	const products = useSelector((state) => state.products);

	useEffect(() => {
		if (!products.list.length) return;

		dispatch(filterByPrice(100));
	}, [dispatch, products.list.length]);

	return (
		<>
			<Poster />
			<ProductsSlider
				products={products.list}
				title='Trending'
			/>
			<Categories
				products={categories.list}
				amount={5}
				title='Worth seeing'
			/>
			<Banner />
			<ProductsSlider
				products={products.filtered}
				title='Less than $100'
			/>
		</>
	)
}

export default Home;
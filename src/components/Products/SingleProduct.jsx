import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useGetProductQuery } from '../../features/api/apiSlice';
import { getRelatedProducts } from '../../features/products/productsSlice';
import { ROUTES } from './../../utils/routes';

import Products from './Products';
import Product from './Product';
import Preloader from './../Preloader/Preloader';

const SingleProduct = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const navigate = useNavigate();
	const { list, related } = useSelector(({ products }) => products);

	const {
		data,
		isLoading,
		isFetching,
		isSuccess
	} = useGetProductQuery({ id });

	useEffect(() => {
		if (!isLoading && !isFetching && !isSuccess) {
			navigate(ROUTES.HOME);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading, isFetching, isSuccess]);

	useEffect(() => {
		if (!data || !list.length) return;

		dispatch(getRelatedProducts(data.category.id));

	}, [data, dispatch, list.length]);
	// console.log(data)
	return (
		!data ? (
			<Preloader />
		) : (
			<>
				<Product key={data.id} item={data} />
				<Products products={related} amount={5} title='Related products' />
			</>
		)
	)
}

export default SingleProduct;
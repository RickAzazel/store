import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useGetProductsQuery } from '../../../features/api/apiSlice';
import { CATEGORY_LIMIT } from '../../../utils/constants';

import Products from '../../Products/Products';
import CategoryForm from './CategoryForm';
import CategoryBack from './CategoryBack';
import Preloader from '../../Preloader/Preloader';
import Button from '../../Button/Button';

const Category = () => {
	const { id } = useParams();
	const { list } = useSelector(({ categories }) => categories);

	const defaultValues = {
		title: '',
		price_min: 0,
		price_max: 0,
	};

	const defaultParams = {
		categoryId: id,
		limit: CATEGORY_LIMIT,
		offset: 0,
		...defaultValues,
	};

	const [isEnd, setIsEnd] = useState(false);
	const [cat, setCat] = useState(null);
	const [items, setItems] = useState([]);
	const [values, setValues] = useState(defaultValues);
	const [params, setParams] = useState(defaultParams);

	const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);

	const { data: fullData = [] } = useGetProductsQuery({ categoryId: id });

	useEffect(() => {
		if (!id) return;

		setValues(defaultValues);
		setItems([]);
		setIsEnd(false);
		setParams({ ...defaultParams, categoryId: id });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	useEffect(() => {
		if (isLoading) return;

		if (!data.length) {
			return setIsEnd(true);
		}
		else {
			setIsEnd(false);
		};

		setItems((_items) => [..._items, ...data]);
	}, [data, isLoading]);

	useEffect(() => {
		if (!items.length) return;

		if (items.length === fullData.length) return setIsEnd(true);
	}, [items, fullData])

	useEffect(() => {
		if (!id || !list.length) return;

		const category = list.find((item) => item.id === id * 1);

		setCat(category);
	}, [list, id]);


	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setItems([]);
		setIsEnd(false);
		setParams({ ...defaultParams, ...values });
	};

	const handleReset = () => {
		setValues(defaultValues);
		setParams(defaultParams);
	};

	return (
		<section className='category'>
			<h2 className='category__title'>{cat?.name}</h2>

			<CategoryForm
				values={values}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>

			{isLoading ? (
				<Preloader />
			) :
				!isSuccess || !items.length ? (
					<CategoryBack handleReset={handleReset} />
				) : (
					<Products
						title=''
						products={items}
						amount={items.length}
					/>
				)}

			{!isEnd && (
				<div className="category__more">
					<Button
						className='category__more-button'
						text='See more'
						onClick={() => setParams({ ...params, offset: params.offset + params.limit })}
					/>
				</div>
			)}
		</section>
	)
}

export default Category;
import React from 'react';

const CategoryForm = (props) => {
	const {handleSubmit, handleChange, values} = props;

	return (
		<form
			className='category__filters'
			onSubmit={handleSubmit}
		>
			<div className="category__filter">
				<input
					type="text"
					name='title'
					onChange={handleChange}
					placeholder='Product name'
					value={values.title}
				/>
			</div>

			<div className="category__filter">
				<input
					type="number"
					name='price_min'
					onChange={handleChange}
					placeholder='0'
					value={values.price_min}
				/>
				<span>price from</span>
			</div>

			<div className="category__filter">
				<input
					type="number"
					name='price_max'
					onChange={handleChange}
					placeholder='0'
					value={values.price_max}
				/>
				<span>price to</span>
			</div>

			<button type='submit' hidden />
		</form>
	)
}

export default CategoryForm;
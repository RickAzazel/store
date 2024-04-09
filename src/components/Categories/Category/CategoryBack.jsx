import React from 'react';

import Button from '../../Button/Button';

const CategoryBack = ({ handleReset }) => {
	return (
		<div className='category__back'>
			<p className='category__back-text'>No results</p>

			<Button
				className='category__back-reset'
				onClick={handleReset}
				text='Reset'
			/>
		</div>
	)
}

export default CategoryBack;
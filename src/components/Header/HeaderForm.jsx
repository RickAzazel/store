import React, { useState } from 'react';
import { FaSearch, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import ButtonClose from './../Button/ButtonClose';

import { useGetProductsQuery } from '../../features/api/apiSlice';
import { formatURL } from '../../utils/common';

const HeaderForm = () => {
	const [searchValue, setSearchValue] = useState('');
	const [searchIsVisible, setSearchIsVisible] = useState(false);

	const { data, isLoading } = useGetProductsQuery({ title: searchValue });

	const handleSearch = ({ target: { value } }) => {
		setSearchValue(value);
	};

	return (
		<form className="info__form">
			<div
				className={!searchIsVisible ? 'info__form-search  info__form-search--active' : 'info__form-search'}
				onClick={() => setSearchIsVisible(true)}
			>
				<FaSearch />
			</div>

			<div className={searchIsVisible ? 'info__form-input info__form-input--active' : 'info__form-input'}>
				<div className='info__form-icon'>
					<FaSearch />
				</div>

				<input
					type="search"
					name='search'
					placeholder='Search for anything...'
					autoComplete='off'
					onChange={handleSearch}
					value={searchValue}
					autoFocus
					aria-label="Search through site content"
				/>

				<ButtonClose
					className='info__form-button'
					onClick={() => setSearchIsVisible(false)}
					icon={<FaWindowClose/>}
				/>
			</div>

			{searchValue && (
				<div className="info__form-box">
					{isLoading ? (
						'Loading'
					) : !data?.length ? (
						'No results'
					) : (
						data.map(({ title, images, id }) => {
							return (
								<Link
									key={id}
									to={`/products/${id}`}
									className='info__form-box-link'
									onClick={() => searchValue('')}
								>
									<div
										className="info__form-box-image"
										style={{ backgroundImage: `url(${formatURL(images[0])})` }}
									/>
									<h3 className='info__form-box-title'>{title}</h3>
								</Link>
							);
						})
					)}
				</div>
			)}
		</form>
	)
}

export default HeaderForm;
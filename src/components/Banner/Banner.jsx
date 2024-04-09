import React from 'react';

import banner from './../../assets/images/sale.jpeg';

const Banner = () => (
	<section className='banner'>

		<div className="banner__left">
			<p className="banner__content">
				NEW YEAR
				<span>SALE</span>
			</p>
			<a href='/' className='banner__button'>See more</a>
		</div>

		<div className="banner__right">
			<img className='banner__right-image' src={banner} alt='Banner' />
			<p className='banner__discount'>
				save up to <span>50%</span> off
			</p>
		</div>
		
	</section>
);

export default Banner;
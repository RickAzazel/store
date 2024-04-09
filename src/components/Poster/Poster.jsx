import React from 'react';

import poster from './../../assets/images/poster.png';

const Poster = () => {
	return (
		<section className='poster'>
			<h2 className='poster__title'>BIG SALE 20%</h2>

			<div className="poster__product">
				<div className="poster__text">
					<h3 className="poster__subtitle">the bestseller of 2023</h3>
					<h1 className="poster__head">LENNON r2d2 with NVIDIA 5090 TI</h1>
					<button className='poster__button'>Shop Now</button>
				</div>

				<div className="poster__image">
					<img src={poster} alt="poster" />
				</div>
			</div>
		</section>
	)
}

export default Poster;
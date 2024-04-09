import React from 'react';
import { FaAlignLeft } from 'react-icons/fa';

const Burger = ({ setToggleMenu }) => {
	return (
		<div
			className="burger"
			onClick={() => setToggleMenu(true)}
		>
			<FaAlignLeft />
		</div>
	)
}

export default Burger;
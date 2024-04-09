import React from 'react';

import { SOCIALS } from '../../utils/constants';

const Socials = () => {
	return (
		<div className="socials">
			{SOCIALS.map(({ icon, link, id }) => (
				<a
					key={id}
					className='socials__link'
					href={link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{icon}
				</a>
			))}
		</div>
	)
}

export default Socials;
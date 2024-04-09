import React from 'react';

const BattonClose = ({ className, onClick, icon }) => {
	return (
		<button
			className={'button-close ' + className}
			onClick={onClick}
		>
			{icon}
		</button>
	)
}

export default BattonClose;
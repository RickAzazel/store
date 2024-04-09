import React from 'react';

const Button = ({ className, onClick, type, text, disabled }) => {
	return (
		<button
			className={className}
			onClick={onClick}
			type={type ? type : 'button'}
			disabled={disabled ? disabled : null}
		>
			{text}
		</button>
	)
}

export default Button;
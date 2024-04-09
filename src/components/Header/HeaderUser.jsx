import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';

import { ROUTES } from '../../utils/routes';
import { toggleForm } from '../../features/user/userSlice';

const HeaderUser = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { currentUser } = useSelector(({ user }) => user);

	const [values, setValues] = useState({ name: 'Guest', avatar: null });

	useEffect(() => {
		if (!currentUser) return;

		setValues(currentUser);
	}, [currentUser]);

	const handleClick = () => {
		if (!currentUser) {
			dispatch(toggleForm(true));
		}
		else {
			navigate(ROUTES.PROFILE);
		};
	}

	return (
		<div
			className="info__user"
			onClick={handleClick}
		>
			<div className="info__user-avatar" >
				{!values.avatar ? (
					<FaRegUserCircle />
				) : (
					<span style={{ backgroundImage: `url(${values.avatar})` }} />
				)}
			</div>
			<p className="info__user-name">{values.name}</p>
		</div>
	)
}

export default HeaderUser;
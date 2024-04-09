import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleForm, updateUser } from '../../features/user/userSlice';
import Button from '../Button/Button';

const Profile = () => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector(({ user }) => user);

	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		avatar: '',
	});

	useEffect(() => {
		if (!currentUser) return;

		setValues(currentUser);
	}, [currentUser]);

	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value });
	};

	const closeForm = () => {
		dispatch(toggleForm(false))
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const isEmpty = Object.values(values).some((val) => !val);

		if (isEmpty) return;

		dispatch(updateUser(values));

		closeForm();
	};

	return (
		<section className='profile'>
			{!currentUser ? (
				<span style={{ color: 'white' }}>You need to log in</span>
			) : (
				<form className='user-signup__form'>
					
					<div className="user-signup__input-control">
						<input
							type="email"
							name='email'
							placeholder='Your email'
							value={values.email}
							autoComplete='off'
							onChange={handleChange}
							required
						/>
					</div>

					<div className="user-signup__input-control">
						<input
							type="name"
							name='name'
							placeholder='Your name'
							value={values.name}
							autoComplete='off'
							onChange={handleChange}
							required
						/>
					</div>

					<div className="user-signup__input-control">
						<input
							type="password"
							name='password'
							placeholder='Your password'
							value={values.password}
							autoComplete='off'
							onChange={handleChange}
							required
						/>
					</div>

					<div className="user-signup__input-control">
						<input
							type="avatar"
							name='avatar'
							placeholder='Your avatar'
							value={values.avatar}
							autoComplete='off'
							onChange={handleChange}
							required
						/>
					</div>

					<Button
						className='user-signup__submit-button'
						type="submit"
						onClick={handleSubmit}
						text='Update'
					/>
					
				</form>
			)}
		</section>
	)
}

export default Profile;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UilTimesSquare } from '@iconscout/react-unicons';

import ButtonClose from '../Button/ButtonClose';
import Button from './../Button/Button'
import ErrorMessage from '../Error/ErrorMessage';

import { createUser, toggleForm } from '../../features/user/userSlice';
import { EMAIL_REGEX } from '../../utils/constants';
import { validateInput } from '../../utils/common';


const UserSignupForm = ({ toggleCurrentFormType }) => {
	const dispatch = useDispatch();

	const [nameError, setNameError] = useState(null);
	const [emailError, setEmailError] = useState(null);
	const [passwordError, setPasswordError] = useState(null);

	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		avatar: '',
	});


	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value });
	};

	const closeForm = () => {
		dispatch(toggleForm(false));
	};

	const handleErrors = () => {
		const isValidEmail = values.email.match(EMAIL_REGEX);
		const isValidName = values.name.length > 3;
		const isValidPassword = values.password.length > 6;

		validateInput(isValidEmail, setEmailError, 'Email must be valid');
		validateInput(isValidName, setNameError, 'Name must be longer than 3 chars');
		validateInput(isValidPassword, setPasswordError, 'Password must be longer than 6 chars');
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const isEmpty = Object.values(values).some((val) => !val);

		if (isEmpty) return handleErrors();

		dispatch(createUser(values));

		closeForm();
	};

	return (

		<>
			<div className="user-signup__overlay" onClick={closeForm} />
			<div className='user-signup'>
				<ButtonClose
					className="user-signup__close-form"
					onClick={closeForm}
					icon={<UilTimesSquare />}
				/>

				<h2 className="user-signup__title">Sign Up</h2>

				<form className='user-signup__form'>
					<div className="user-signup__input-control">
						<input
							style={emailError && { borderColor: 'red' }}
							type="email"
							name='email'
							placeholder='Your email'
							value={values.email}
							autoComplete='off'
							onChange={handleChange}
							required
						/>
						{emailError && <ErrorMessage text={emailError} />}
					</div>

					<div className="user-signup__input-control">
						<input
							style={nameError && { borderColor: 'red' }}
							type="name"
							name='name'
							placeholder='Your name'
							value={values.name}
							autoComplete='off'
							onChange={handleChange}
							required
						/>
						{nameError && <ErrorMessage text={nameError} />}
					</div>

					<div className="user-signup__input-control">
						<input
							style={passwordError && { borderColor: 'red' }}
							type="password"
							name='password'
							placeholder='Your password'
							value={values.password}
							autoComplete='off'
							onChange={handleChange}
							required
						/>
						{passwordError && <ErrorMessage text={passwordError} />}
					</div>

					<div className="user-signup__input-control">
						<input
							type="avatar"
							name='avatar'
							placeholder='Your avatar'
							value={values.avatar}
							autoComplete='off'
							onChange={handleChange}
						/>
					</div>

					<div
						className="user-signup__link"
						onClick={() => toggleCurrentFormType('login')}
					>
						I already have an account
					</div>

					<Button
						className='user-signup__submit-button'
						onClick={handleSubmit}
						type="submit"
						text='Create an account'
					/>
				</form>
			</div>
		</>
	)
}

export default UserSignupForm;
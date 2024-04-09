import React, { useState } from 'react';
import { UilTimesSquare } from '@iconscout/react-unicons'
import { useDispatch } from 'react-redux';

import Button from './../Button/Button';
import ErrorMessage from '../Error/ErrorMessage';

import { EMAIL_REGEX } from '../../utils/constants';
import { validateInput } from '../../utils/common';
import { loginUser, toggleForm } from '../../features/user/userSlice';

const UserLoginForm = ({ toggleCurrentFormType }) => {
	const dispatch = useDispatch();

	const [emailError, setEmailError] = useState(null);
	const [passwordError, setPasswordError] = useState(null);

	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value });
	};

	const closeForm = () => {
		dispatch(toggleForm(false))
	};

	const handleErrors = () => {
		const isValidEmail = values.email.match(EMAIL_REGEX);
		const isValidPassword = values.password.length > 6;

		validateInput(isValidEmail, setEmailError, 'Email must be valid');
		validateInput(isValidPassword, setPasswordError, 'Password must be longer than 6 chars');
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const isEmpty = Object.values(values).some((val) => !val);

		if (isEmpty) return handleErrors();

		dispatch(loginUser(values));

		closeForm();
	};

	return (

		<>
			<div className="user-signup__overlay" onClick={closeForm} />
			<div className='user-signup'>

				<div className="user-signup__close-form" onClick={closeForm}>
					<UilTimesSquare />
				</div>

				<h2 className="user-signup__title">Log In</h2>

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
						{emailError && <ErrorMessage text={emailError} />}
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
						{passwordError && <ErrorMessage text={passwordError} />}
					</div>

					<div
						className="user-signup__link"
						onClick={() => toggleCurrentFormType('signup')}
					>
						Create an account
					</div>

					<Button
						className='user-signup__submit-button'
						type="submit"
						onClick={handleSubmit}
						text='Login'
					/>
				</form>
			</div>
		</>
	)
}

export default UserLoginForm;
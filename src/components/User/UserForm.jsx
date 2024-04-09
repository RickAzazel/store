import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserSignupForm from './UserSignupForm';
import UserLoginForm from './UserLoginForm';

import { toggleFormType } from '../../features/user/userSlice';


const UserForm = () => {
	const dispatch = useDispatch();
	const { showForm, formType } = useSelector(({ user }) => user);

	const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));

	return showForm ? (
		formType === 'signup' ? (
			<UserSignupForm
				toggleCurrentFormType={toggleCurrentFormType}
			/>
		) : (
			<UserLoginForm
				toggleCurrentFormType={toggleCurrentFormType}
			/>
		)
	) : (
		<></>
	);
};

export default UserForm;
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import AppRoutes from './AppRoutes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import UserForm from '../User/UserForm';

import { getCategories } from '../../features/categories/categoriesSlice';
import { getProducts } from '../../features/products/productsSlice';

const App = () => {
	const dispatch = useDispatch();

	const [toggleMenu, setToggleMenu] = useState(false);

	useEffect(() => {
		dispatch(getCategories());
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<div className='app'>
			<div className="container">

				<Header
					toggleMenu={toggleMenu}
					setToggleMenu={setToggleMenu}
				/>
				<UserForm />

				<main className="main">

					<Sidebar
						toggleMenu={toggleMenu}
						setToggleMenu={setToggleMenu}
					/>
					<AppRoutes />
					
				</main>

				<Footer />
			</div>
		</div>
	)
}

export default App;
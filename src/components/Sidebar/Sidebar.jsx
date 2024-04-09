import React, { useEffect, useRef } from 'react';
import { FaWindowClose } from "react-icons/fa";

import Navbar from '../Navbar/Navbar';
import ButtonClose from './../Button/ButtonClose';

import { SIDEBAR_FOOTER_LINKS } from '../../utils/constants';

const Sidebar = ({ toggleMenu, setToggleMenu }) => {
	const sidebarRef = useRef();

	useEffect(() => {
		const handleClick = (e) => {
			if (e.target === sidebarRef.current) setToggleMenu(false);
		};

		window.addEventListener('click', handleClick);

		return () => window.removeEventListener('click', handleClick);
	}, [setToggleMenu]);

	const closeMenu = () => {
		setToggleMenu(false);
	};

	return (
		<aside
			ref={sidebarRef}
			className={toggleMenu ? (
				'sidebar sidebar--active'
			) : (
				"sidebar"
			)}
		>

			<div className='sidebar__content'>
				<ButtonClose
					className="sidebar__button-close"
					onClick={closeMenu}
					icon={<FaWindowClose />}
				/>
				<h2 className="sidebar__title">CATEGORIES</h2>

				<Navbar closeMenu={closeMenu} />

				<div className="sidebar__footer">
					{SIDEBAR_FOOTER_LINKS.map(({ link, text, id }) => (
						<a
							key={id}
							className='sidebar__footer-link'
							href={link}
							target="_blank"
							rel="noopener noreferrer"
						>
							{text}
						</a>
					))}
				</div>
			</div>

		</aside>
	)
}

export default Sidebar;
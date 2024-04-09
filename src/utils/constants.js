import { UilInstagram, UilFacebook, UilLinkedin } from '@iconscout/react-unicons';

export const BASE_URL = 'https://api.escuelajs.co/api/v1';

export const CATEGORY_LIMIT = 5;

export const SIZES = [4, 4.5, 5];

export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const SOCIALS = [
	{
		id: 1,
		link: "http://www.instagram.com/",
		icon: <UilInstagram />,
	},
	{
		id: 2,
		link: "http://www.facebook.com/",
		icon: <UilFacebook />,
	},
	{
		id: 3,
		link: "http://www.linkedin.com/",
		icon: <UilLinkedin />,
	},
];

export const SIDEBAR_FOOTER_LINKS = [
	{
		id: 1,
		link: '/help',
		text: 'Help',
	},
	{
		id: 2,
		link: '/terms',
		text: 'Terms & Conditions',
	},
];

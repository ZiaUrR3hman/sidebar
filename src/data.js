import React from 'react';
import {
	FaBehance,
	FaFacebook,
	FaLinkedin,
	FaTwitter,
	FaSketch,
	FaHome,
	FaUserFriends,
	FaFolderOpen,
	FaCalendarAlt,
} from 'react-icons/fa';

import { HiDocument } from 'react-icons/hi';
export const links = [
	{
		id: 1,
		url: '/color-shade-generator',
		text: 'home',
		icon: <FaHome className="w-5 h-5" />,
	},
	{
		id: 2,
		url: '/grocery-bud',
		text: 'team',
		icon: <FaUserFriends className="w-5 h-5" />,
	},
	{
		id: 3,
		url: '/navbar',
		text: 'projects',
		icon: <FaFolderOpen className="w-5 h-5" />,
	},
	{
		id: 4,
		url: '/sidebar',
		text: 'calendar',
		icon: <FaCalendarAlt className="w-5 h-5" />,
	},
	{
		id: 5,
		url: '/sidebar',
		text: 'documents',
		icon: <HiDocument className="w-5 h-5" />,
	},
];

export const social = [
	{
		id: 1,
		url: 'https://www.twitter.com',
		icon: <FaFacebook />,
	},
	{
		id: 2,
		url: 'https://www.twitter.com',
		icon: <FaTwitter />,
	},
	{
		id: 3,
		url: 'https://www.twitter.com',
		icon: <FaLinkedin />,
	},
	{
		id: 4,
		url: 'https://www.twitter.com',
		icon: <FaBehance />,
	},
	{
		id: 5,
		url: 'https://www.twitter.com',
		icon: <FaSketch />,
	},
];

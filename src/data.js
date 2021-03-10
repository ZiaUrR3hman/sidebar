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
		url: '/',
		text: 'home',
		icon: <FaHome className="w-5 h-5" />,
	},
	{
		id: 2,
		url: '/team',
		text: 'team',
		icon: <FaUserFriends className="w-5 h-5" />,
	},
	{
		id: 3,
		url: '/projects',
		text: 'projects',
		icon: <FaFolderOpen className="w-5 h-5" />,
	},
	{
		id: 4,
		url: '/calendar',
		text: 'calendar',
		icon: <FaCalendarAlt className="w-5 h-5" />,
	},
	{
		id: 5,
		url: '/documents',
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

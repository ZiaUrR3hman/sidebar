import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';

const Home = () => {
	return (
		<main>
			<button className="text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800">
				<FaBars className="w-5 h-5" />
			</button>
		</main>
	);
};

export default Home;

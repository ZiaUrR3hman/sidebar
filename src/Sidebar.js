import React from 'react';
import { HiOutlineSearch, HiTicket, HiX } from 'react-icons/hi';
import { MdSettings } from 'react-icons/md';
import { links } from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useGlobalContext();

	return (
		<div
			className={`transition-all  duration-500  fixed top-0 ${
				isSidebarOpen ? 'left-0' : '-left-64'
			}`}
		>
			<div className="flex h-screen overflow-y-auto flex-col bg-white  w-64 px-4 py-8 border-r min-h-screen relative">
				<button
					onClick={closeSidebar}
					className="absolute top-1 right-1  text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800"
				>
					<HiX className="w-5 h-5" />
				</button>
				<h2 className="text-3xl font-semibold text-gray-800">
					ZRF <span className="text-indigo-500 ml-1">Tech</span>
				</h2>
				<div className="relative mt-6">
					<label
						className="absolute inset-y-0 left-0 pl-3 flex items-center "
						htmlFor="searchP"
					>
						<HiOutlineSearch className="w-5 h-5 text-gray-400 hover:text-gray-500" />
					</label>
					<input
						id="searchP"
						type="text"
						placeholder="Search"
						className="w-full border border-gray-300 hover:border-gray-400 pl-10 py-3 pr-4 text-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-500"
					/>
				</div>
				<div className="flex flex-col mt-6  justify-between flex-1">
					<nav className="text">
						{links.map((link, index) => {
							const { id, url, text, icon } = link;
							return (
								<a
									key={id}
									href={url}
									className={`capitalize flex items-center px-4 py-2 ${
										index === 0
											? 'bg-gray-200 text-gray-700'
											: null
									} ${
										index > 0
											? 'mt-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200 transform'
											: null
									} rounded-md`}
								>
									{icon}
									<span className="mx-4 font-medium">
										{text}
									</span>
								</a>
							);
						})}
						<hr className="my-6" />
						<a
							href="/color-shade-generator"
							className="flex items-center px-4 py-2 mt-5 rounded-md text-gray-600 hover:text-gray-700 hover:bg-gray-200 transition-colors transform"
						>
							<HiTicket className="w-5 h-5" />
							<span className="mx-4 font-medium">Ticket</span>
						</a>
						<a
							href="/color-shade-generator"
							className="flex items-center px-4 py-2 mt-5 rounded-md text-gray-600 hover:text-gray-700 hover:bg-gray-200 transition-colors transform"
						>
							<MdSettings className="w-5 h-5" />
							<span className="mx-4 font-medium">Settings</span>
						</a>
					</nav>
					<div className="flex items-center px-4 -mx-2 mt-5">
						<img
							src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
							alt="avatar"
							className="h-9 w-9 mx-2 object-center object-cover rounded-full"
						/>
						<h4 className="mx-2 font-medium text-gray-800 hover:underline cursor-pointer">
							John Doe
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

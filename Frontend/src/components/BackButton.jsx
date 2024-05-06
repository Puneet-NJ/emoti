import React from "react";

const BackButton = ({ label, onClick }) => {
	return (
		<div className="mt-5">
			<button
				onClick={onClick}
				type="button"
				className="w-full text-white bg-red-400 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-gray-700 dark:border-gray-700"
			>
				{label}
			</button>
		</div>
	);
};

export default BackButton;

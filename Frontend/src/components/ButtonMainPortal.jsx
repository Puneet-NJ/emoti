import React from "react";

const ButtonMainPortal = ({ label, bgColor, onClick }) => {
	return (
		<div
			className={`w-1/2 h-72 bg-yellow-00 mx-auto ${bgColor} flex justify-center items-center shadow-lg rounded-md`}
		>
			<button
				onClick={onClick}
				className="bg-gray-500 text-white text-lg py-3 rounded w-1/2 hover:scale-95 hover:bg-black duration-150"
			>
				{label}
			</button>
		</div>
	);
};

export default ButtonMainPortal;

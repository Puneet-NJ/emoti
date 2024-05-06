import React from "react";

const AdminActionsButton = ({ label, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="bg-slate-300 py-4 px-32 text-lg font-medium rounded hover:bg-slate-600 hover:text-white duration-200"
		>
			{label}
		</button>
	);
};

export default AdminActionsButton;

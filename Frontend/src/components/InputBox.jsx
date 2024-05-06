import React from "react";

const InputBox = ({ label, id, placeholder, onChange }) => {
	return (
		<div className="my-3 flex flex-col">
			<label className="font-medium" htmlFor={id}>
				{label}
			</label>
			<input
				required
				onChange={onChange}
				type={id === "password" ? "password" : "text"}
				id={id}
				placeholder={placeholder}
				className="my-1 outline-none border border-gray-300 py-1 rounded px-2"
			/>
		</div>
	);
};

export default InputBox;

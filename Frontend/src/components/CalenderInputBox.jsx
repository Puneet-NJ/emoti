import React from "react";

const CalenderInputBox = ({ label, id, onChange }) => {
	const today = new Date();
	const minDate =
		today.getFullYear() +
		"-" +
		(today.getMonth() + 1).toString().padStart(2, 0) +
		"-" +
		today.getDate().toString().padStart(2, 0);

	return (
		<div className="my-3 flex flex-col">
			<label className="font-medium" htmlFor={id}>
				{label}
			</label>
			<input
				required
				onChange={onChange}
				id={id}
				type="date"
				min={minDate}
				className="my-1 outline-none border border-gray-300 py-1 rounded px-2"
			/>
		</div>
	);
};

export default CalenderInputBox;

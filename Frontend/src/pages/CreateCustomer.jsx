import React, { useState } from "react";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import CalenderInputBox from "../components/CalenderInputBox";
import ButtonComp from "../components/ButtonComp";
import axios from "axios";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";
import { Link, useNavigate } from "react-router-dom";

const CreateCustomer = () => {
	const [company, setCompany] = useState("");
	const [email, setEmail] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	return (
		<div className="h-screen bg-slate-100">
			<Header />

			<div className="h-screen flex flex-col justify-center items-center">
				<h1 className="text-xl font-medium mb-5 text-slate-800">
					Create Customer
				</h1>
				<form className="bg-white px-4 py-5 rounded-md shadow-xl">
					<InputBox
						label={"Company Name"}
						placeholder={"Google"}
						id={"company"}
						onChange={(e) => {
							setCompany(e.target.value);
						}}
					/>

					<InputBox
						label={"Email"}
						placeholder={"company@domain.com"}
						id={"email"}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>

					<CalenderInputBox
						label={"Demo Start Date"}
						id={"start"}
						onChange={(e) => {
							setStartDate(e.target.value);
						}}
					/>

					<CalenderInputBox
						label={"Demo End Date"}
						id={"end"}
						onChange={(e) => {
							setEndDate(e.target.value);
						}}
					/>

					<ButtonComp
						label={"Submit"}
						onClick={async () => {
							try {
								const response = await axios({
									url: "http://localhost:3001/api/v1/admin/createCompany",
									method: "POST",
									headers: {
										Authorization: `Bearer ${localStorage.getItem("token")}`,
									},
									data: {
										name: company,
										email,
										demoStartDate: startDate,
										demoEndDate: endDate,
									},
								});
								if (response.status === 200)
									alert("Customer registered successfully");
							} catch (err) {
								setError(err.response.data.msg);
							}
						}}
					/>
					<div className="font-semibold text-center text-red-600">{error}</div>

					<Link
						to={"/admin/actions/updateCustomer"}
						className="text-sm hover:underline font-medium"
					>
						Choose from an Existing company?
					</Link>
				</form>
				<div className="absolute left-10 bottom-20">
					<BackButton
						label={"Back"}
						onClick={() => {
							navigate("/admin/actions");
						}}
					/>
				</div>
			</div>

			<div className="absolute w-full bottom-1">
				<Footer />
			</div>
		</div>
	);
};

export default CreateCustomer;

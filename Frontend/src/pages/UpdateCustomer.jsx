import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import InputBox from "../components/InputBox";
import CalenderInputBox from "../components/CalenderInputBox";
import ButtonComp from "../components/ButtonComp";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";

const UpdateCustomer = () => {
	const initialCompany = () => {
		return "Default";
	};
	const [company, setCompany] = useState("");
	const [email, setEmail] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [companies, setCompanies] = useState([]);
	const [value, setValue] = useState(initialCompany());
	const navigate = useNavigate();

	useEffect(() => {
		axios({
			url: "http://localhost:3001/api/v1/user/getCompanies",
			method: "GET",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}).then((response) => setCompanies(response.data.companies));
	}, []);

	return (
		<div className="h-screen bg-slate-100">
			<Header />

			<div className="h-screen flex flex-col justify-center items-center">
				<h1 className="text-xl font-medium mb-5 text-slate-800">
					Update Customer
				</h1>
				<form className="bg-white px-4 py-5 rounded-md shadow-xl">
					<div className="flex flex-col">
						<label htmlFor="company" className="font-medium">
							Select Customer
						</label>
						<select
							onChange={(e) => {
								const selectedCompany = companies.find(
									(company) => company._id === e.target.value
								);
								setEmail(selectedCompany.email);
								setCompany(selectedCompany.name);
							}}
							id="company"
							name="company"
							className="border border-gray-300 rounded py-1 outline-none w-52 px-2"
						>
							<option value={"Default"}>Default</option>
							{companies.map((company) => (
								<option key={company._id} value={company._id}>
									{company.name}
								</option>
							))}
						</select>
					</div>

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
								alert("Customer updated successfully");
						}}
					/>
					<Link
						to={"/admin/actions/createCustomer"}
						className="text-sm hover:underline font-medium"
					>
						<p className="text-center">Create a new company?</p>
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

export default UpdateCustomer;

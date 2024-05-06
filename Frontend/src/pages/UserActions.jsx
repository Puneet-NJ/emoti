import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";

const UserActions = () => {
	const initialCompany = () => {
		return "Default";
	};

	const [companies, setCompanies] = useState([]);
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
		<div>
			<Header />

			<div className="pt-36 text-center px-64 bg-slate-100 h-screen">
				<h1 className="font-medium text-3xl mt-10">User Dashboard</h1>

				<div className="mt-12 flex flex-col gap-2 bg-white w-1/2 mx-auto shadow-xl rounded-md py-7">
					<label htmlFor="company" className="font-medium">
						Select Customer
					</label>
					<select
						onChange={(e) =>
							navigate(`/user/actions/customer?id=${e.target.value}`)
						}
						value={initialCompany}
						id="company"
						name="company"
						className="border border-gray-600 rounded py-1 outline-none w-1/2 mx-auto px-2"
					>
						<option value={"Default"}>Default</option>
						{companies.map((company) => (
							<option key={company._id} value={company._id}>
								{company.name}
							</option>
						))}
					</select>
				</div>

				<div className="absolute left-10 bottom-20">
					<BackButton
						onClick={() => navigate("/")}
						label={"Back to Main Portal"}
					/>
				</div>
			</div>

			<div className="absolute w-full bottom-1">
				<Footer />
			</div>
		</div>
	);
};

export default UserActions;

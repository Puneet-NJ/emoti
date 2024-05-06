import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import ButtonComp from "../components/ButtonComp";
import axios from "axios";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";

const deleteCustomer = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	return (
		<div className="h-screen bg-slate-100">
			<Header />

			<div className="h-screen flex flex-col justify-center items-center">
				<h1 className="text-xl font-medium mb-5 text-slate-800">
					Delete Customer
				</h1>
				<form className="bg-white px-4 py-5 rounded-md shadow-xl">
					<InputBox
						label={"Company Name"}
						placeholder={"Google"}
						id={"name"}
						onChange={(e) => {
							setName(e.target.value);
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

					<ButtonComp
						label={"Submit"}
						onClick={async () => {
							try {
								const response = await axios({
									url: "http://localhost:3001/api/v1/admin/deleteCompany",
									method: "DELETE",
									headers: {
										Authorization: `Bearer ${localStorage.getItem("token")}`,
									},
									data: {
										name,
										email,
									},
								});
								if (response.status === 200)
									alert("Customer deleted successfully");
							} catch (err) {
								setError(err.response.data.msg);
							}
						}}
					/>

					<div className="font-semibold text-center text-red-600">{error}</div>
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

export default deleteCustomer;

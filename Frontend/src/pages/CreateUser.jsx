import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import ButtonComp from "../components/ButtonComp";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import axios from "axios";

const CreateUser = () => {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	return (
		<div className="h-screen bg-slate-100">
			<Header />

			<div className="h-screen flex flex-col justify-center items-center">
				<h1 className="text-xl font-medium mb-5 text-slate-800">Create User</h1>

				<form className="bg-white px-4 py-5 rounded-md shadow-xl">
					<InputBox
						label={"Name"}
						placeholder={"John"}
						id={"name"}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>

					<InputBox
						label={"Username"}
						placeholder={"john@gmail.com"}
						id={"username"}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
					/>

					<InputBox
						label={"Password"}
						placeholder={""}
						id={"password"}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>

					<ButtonComp
						label={"Submit"}
						onClick={async () => {
							const response = await axios({
								url: "http://localhost:3001/api/v1/admin/createUser",
								method: "POST",
								headers: {
									Authorization: `Bearer ${localStorage.getItem("token")}`,
								},
								data: {
									name,
									username,
									password,
								},
							});
							if (response.status === 200)
								alert("User registered successfully");
						}}
					/>
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

export default CreateUser;

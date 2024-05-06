import React, { useState } from "react";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import ButtonComp from "../components/ButtonComp";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Admin = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	return (
		<div className="h-screen ">
			<Header />

			<div className="bg-slate-100 h-screen flex flex-col justify-center items-center">
				<h1 className="text-2xl font-medium mb-5 text-slate-800">
					Admin Sign-In
				</h1>

				<div className="absolute left-10 top-40">
					<BackButton
						onClick={() => {
							navigate("/");
						}}
						label={"Go back to Main Portal"}
					/>
				</div>
				<form className="bg-white py-5 px-4 shadow-xl rounded-md">
					<InputBox
						onChange={(e) => setUsername(e.target.value)}
						label={"Username"}
						id={"username"}
						placeholder={"admin@admin.com"}
					/>
					<InputBox
						onChange={(e) => setPassword(e.target.value)}
						label={"Password"}
						id={"password"}
						placeholder={"Admin Password"}
					/>
					<ButtonComp
						onClick={async () => {
							try {
								const response = await axios({
									url: "http://localhost:3001/api/v1/admin/signin",
									method: "POST",
									data: {
										username,
										password,
									},
								});

								localStorage.setItem("token", response.data.token);

								if (response.status === 200) navigate("/admin/actions");
							} catch (err) {
								setError(err.response.data.msg);
							}
						}}
						label={"Sign in"}
					/>

					<div className="font-semibold text-center text-red-600">{error}</div>
				</form>
			</div>
		</div>
	);
};

export default Admin;

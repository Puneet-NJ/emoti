import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import ButtonComp from "../components/ButtonComp";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import axios from "axios";

const DeleteUser = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const navigate = useNavigate();

	return (
		<div className="h-screen bg-slate-100">
			<Header />

			<div className="h-screen flex flex-col justify-center items-center">
				<h1 className="text-xl font-medium mb-5 text-slate-800">Delete User</h1>
				<form className="bg-white px-4 py-5 rounded-md shadow-xl">
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
							try {
								const response = await axios({
									url: "http://localhost:3001/api/v1/admin/deleteUser",
									method: "DELETE",
									headers: {
										Authorization: `Bearer ${localStorage.getItem("token")}`,
									},
									data: {
										username,
										password,
									},
								});
								if (response.status === 200) alert("User deleted successfully");
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

export default DeleteUser;

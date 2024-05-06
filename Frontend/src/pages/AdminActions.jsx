import React, { useEffect } from "react";
import Header from "../components/Header";
import AdminActionsButton from "../components/AdminActionsButton";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { admin } from "../../atoms";

const AdminActions = () => {
	const navigate = useNavigate();
	const adminLogged = useRecoilValue(admin);
	const setAdmin = useSetRecoilState(admin);

	useEffect(() => {
		if (!adminLogged) navigate("/");
	}, [adminLogged]);

	return (
		<div>
			<Header />

			<div className="pt-36 text-center px-64">
				<div className="absolute right-16 bottom-20">
					<BackButton
						onClick={() => {
							navigate("/");
							setAdmin(false);
						}}
						label={"Log out"}
					/>
				</div>
				<h1 className="font-medium text-3xl">Admin Dashboard</h1>

				<div className="mt-12 flex flex-col gap-4">
					<AdminActionsButton
						onClick={() => navigate("/admin/actions/createCustomer")}
						label={"Create Potential Customer Profile"}
					/>
					<AdminActionsButton
						onClick={() => navigate("/admin/actions/deleteCustomer")}
						label={"Delete Customer Profile"}
					/>
					<AdminActionsButton
						onClick={() => navigate("/admin/actions/createUser")}
						label={"Create User ID"}
					/>
					<AdminActionsButton
						onClick={() => navigate("/admin/actions/deleteUser")}
						label={"Delete User ID"}
					/>
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

export default AdminActions;

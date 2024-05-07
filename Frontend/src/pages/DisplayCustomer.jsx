import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

const DisplayCustomer = () => {
	const [company, setCompany] = useState([]);
	const navigate = useNavigate();
	const [params] = useSearchParams();

	useEffect(() => {
		axios({
			url: `https://emoti-backend.vercel.app/api/v1/user/getCompany?id=${params.get(
				"id"
			)}`,
			method: "GET",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}).then((response) => setCompany(response.data.company));
	}, []);

	if (!company) return;
	return (
		<div>
			<Header />

			<div className="pt-36 text-center px-64 bg-slate-100 h-screen">
				<h1 className="font-medium text-3xl mt-10">Customer</h1>

				<div className="mt-12 flex flex-col gap-2 bg-white w-1/2 mx-auto shadow-xl rounded-md py-7">
					<div>
						Customer Name:{" "}
						<span className="font-medium text-lg">{company.name}</span>
					</div>
					<div className="border-b-">
						Customer Email:{" "}
						<span className="font-medium text-lg">{company.email}</span>
					</div>

					<div className="mt-4">
						<span className="underline">Demo Dates:</span>
						{company?.demoDate?.map((date, i) => (
							<div className="my-1">
								{i + 1 + ") "}
								Start Date:{" "}
								<span className="font-medium mr-3">
									{" "}
									{date.demoStartDate.split("T")[0]}{" "}
								</span>
								End Date:{" "}
								<span className="font-medium">
									{" "}
									{date.demoEndDate.split("T")[0]}
								</span>
							</div>
						))}
					</div>
				</div>

				<div className="absolute left-10 bottom-20">
					<BackButton
						onClick={() => navigate("/user/actions")}
						label={"Back"}
					/>
				</div>
			</div>

			<div className="absolute w-full bottom-1">
				<Footer />
			</div>
		</div>
	);
};

export default DisplayCustomer;

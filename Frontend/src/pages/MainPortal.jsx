import React from "react";
import Header from "../components/Header";
import ButtonMainPortal from "../components/ButtonMainPortal";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const MainPortal = () => {
	const navigate = useNavigate();

	return (
		<div className="">
			<Header />

			<div className="text-center pt-36">
				<div className="text-3xl font-semibold">
					Hi, Welcome to Main Portal!
				</div>
				<p className="py-3 text-s">Please Select below to continue....</p>
			</div>

			<div className="w-10/12 flex mx-auto my-12">
				<ButtonMainPortal
					onClick={() => navigate("/admin")}
					label={"Admin Portal"}
					bgColor={"bg-yellow-100"}
				/>

				<ButtonMainPortal
					onClick={() => navigate("/user")}
					label={"User Portal"}
					bgColor={"bg-orange-200"}
				/>
			</div>

			<div className="my-20 text-lg text-center">
				Welcome to emoticup! where innovation meets excellence. We take pride in
				delivering top-notch industry & services.
			</div>

			<div className="absolute w-full bottom-1">
				<Footer />
			</div>
		</div>
	);
};

export default MainPortal;

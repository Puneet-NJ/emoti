import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPortal from "./pages/MainPortal";
import User from "./pages/User";
import Admin from "./pages/Admin";
import AdminActions from "./pages/AdminActions";
import CreateCustomer from "./pages/CreateCustomer";
import CreateUser from "./pages/CreateUser";
import DeleteUser from "./pages/DeleteUser";
import DeleteCustomer from "./pages/DeleteCustomer";
import UserActions from "./pages/UserActions";
import DisplayCustomer from "./pages/DisplayCustomer";
import UpdateCustomer from "./pages/UpdateCustomer";
import { RecoilRoot } from "recoil";

function App() {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPortal />} />
					<Route path="/user" element={<User />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/admin/actions" element={<AdminActions />} />
					<Route
						path="/admin/actions/createCustomer"
						element={<CreateCustomer />}
					/>
					<Route
						path="/admin/actions/updateCustomer"
						element={<UpdateCustomer />}
					/>
					<Route
						path="/admin/actions/deleteCustomer"
						element={<DeleteCustomer />}
					/>
					<Route path="/admin/actions/createUser" element={<CreateUser />} />
					<Route path="/admin/actions/deleteUser" element={<DeleteUser />} />

					<Route path="/user/actions" element={<UserActions />} />
					<Route path="/user/actions/customer" element={<DisplayCustomer />} />
				</Routes>
			</BrowserRouter>
		</RecoilRoot>
	);
}

export default App;

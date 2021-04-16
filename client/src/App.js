import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Admin from "./components/admin/Admin";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Route path="/" exact component={Dashboard} />
				<Route path="/login" exact component={Login} />
				<Route path="/signup" exact component={Signup} />
				<Route path="/admin" exact component={Admin} />
				<Footer />
			</Router>
		</div>
	);
}

export default App;

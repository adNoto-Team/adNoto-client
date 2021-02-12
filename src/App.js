import "./App.less";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserWelcome from "./pages/user/pages/UserWelcome";
import LogIn from "./pages/auth/LogIn";
import Register from "./pages/auth/Register";
import Navbar from "./shared/components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContentPage from './pages/content/pages/ContentPage';

import { useEffect } from "react";
import { Provider } from "./context/Context";

const App = () => {
	return (
		<div className="app">
			<Provider>
				<Router>
					<Navbar />
					<div>
						<div className="content">
							<Switch>
								<Route path="/" exact component={UserWelcome} />
								<Route path="/login" component={LogIn} />
								<Route path="/register" component={Register} />
								<Route path="/aboutUs" component={AboutUs} />
								<Route path="/contentPage" component={ContentPage} />
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>
		</div>
	);
};

export default App;

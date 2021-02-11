import "./App.less";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import UserWelcome from "./pages/user/pages/UserWelcome/index";
import LogIn from "./pages/auth/LogIn";
import Register from "./pages/auth/Register";
import Navbar from "./shared/components/Navbar/index";
import AboutUs from "./pages/AboutUs/index";
import { useEffect } from "react";
import { Provider } from "./context/Context";
import  Landing  from "./pages/landing";
 const App = () => {
	return (
		<div className="app">
			<Provider>
				<Router>
					<Navbar />
					<div>
						<div className="content">
							<Switch>
								<Route path="/" exact component={Landing} />
								<Route path="/login" component={LogIn} />
								<Route path="/register" component={Register} />
								<Route path="/aboutUs" component={AboutUs} />
							</Switch>
						</div>
					</div>
					
				</Router>

			</Provider>
		</div>
	);
};

export default App;

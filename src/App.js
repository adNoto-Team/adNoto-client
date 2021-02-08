import "./App.less";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserWelcome from "./pages/user/pages/UserWelcome/index";
import LogIn from "./pages/auth/LogIn";
import Register from "./pages/auth/Register";
import Navbar from './shared/components/Navbar/index';

const App = () => (
	<div className="app">
		<Navbar />
		<Router>
			<div>
				<div className="content">
					<Switch>
						<Route path="/" exact component={UserWelcome} />
						<Route path="/login" component={LogIn} />
						<Route path="/register" component={Register} />
					</Switch>
				</div>
			</div>
		</Router>
	</div>
);

export default App;

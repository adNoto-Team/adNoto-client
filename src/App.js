import "./App.less";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MemberWelcome from "./pages/MemberWelcome/index";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Navbar from './shared/components/Navbar/index';

const App = () => (
	<div className="app">
		<Navbar />
		<Router>
			<div>
				<div className="content">
					<Switch>
						<Route path="/" exact component={MemberWelcome} />
						<Route path="/login" component={LogIn} />
						<Route path="/signup" component={SignUp} />
					</Switch>
				</div>
			</div>
		</Router>
	</div>
);

export default App;

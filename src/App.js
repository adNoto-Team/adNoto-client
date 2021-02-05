import "./App.less";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MemberWelcome from "./pages/MemberWelcome/index";

const App = () => (
	<div className="app">
		<Router>
			<div>
				<div className="content">
					<Switch>
						<Route path="/" exact component={MemberWelcome} />
					</Switch>
				</div>
			</div>
		</Router>
	</div>
);

export default App;

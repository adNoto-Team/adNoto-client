import "./App.less";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/landing";

const App = () => (
	<div className="app">
		<Router>
			<div>
				<div className="content">
					<Switch>
						<Route path="/" exact component={Landing} />
					</Switch>
				</div>
			</div>
		</Router>
	</div>
);

export default App;

import "./App.less";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 

import UserWelcome from "./pages/user/pages/UserWelcome/index";
 
import LogIn from "./pages/auth/LogIn";
import Register from "./pages/auth/Register";
import Navbar from "./shared/components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContentPage from './pages/content/pages/ContentPage';
import EpisodePage from "./pages/content/pages/EpisodePage";
import UserProfile from './pages/user/pages/UserProfile';
import  Landing  from "./pages/landing";
import { useEffect } from "react";
import { Provider } from "./context/Context";


 const App = () => {
	return (
		<div className="app">
			<Provider>
				<Router>
					<Navbar />
					<div style={{ paddingTop: "50px" }}>
						<div className="content">
							<Switch>
								<Route path="/" exact component={UserWelcome} />
								<Route path="/home" component={Landing}/>
 								<Route path="/login" component={LogIn} />
								<Route path="/register" component={Register} />
								<Route path="/aboutUs" component={AboutUs} />
								<Route path="/contentPage" component={ContentPage} />
								<Route path="/episodePage" component={EpisodePage} />
								<Route path="/userProfile" component={UserProfile} />
							</Switch>
						</div>
					</div>
					
				</Router>

			</Provider>
		</div>
	);
};

export default App;

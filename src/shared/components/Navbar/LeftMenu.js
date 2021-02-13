import { Link } from "react-router-dom";

import { Menu, Grid } from "antd";

const { useBreakpoint } = Grid;

const LeftMenu = () => {

	const { md } = useBreakpoint();
	return (
		<Menu mode={md ? "horizontal" : "inline"}>
			<Menu.Item key="abaoutUs">
				<Link to="/aboutUs">About Us</Link>
			</Menu.Item>
			<Menu.Item key="explore">
				<Link to="/">Explore</Link>
			</Menu.Item>
			<Menu.Item key="github">
				<a href="https://github.com/adnoto-team">Github</a>
			</Menu.Item>
		</Menu>
	);
}

export default LeftMenu;


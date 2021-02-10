import { Link } from "react-router-dom";
import { Menu, Grid } from "antd";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const RightMenu = () => {
	const { md } = useBreakpoint();
	return (
		<Menu mode={md ? "horizontal" : "inline"}>
			<Menu.Item key="mail">
				<Link exact to="/login">
					Login
				</Link>
			</Menu.Item>
			<Menu.Item key="app">
				<Link to="/register">
					Register
				</Link>
			</Menu.Item>
		</Menu>
	);
};

export default RightMenu;
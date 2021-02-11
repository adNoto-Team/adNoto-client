import { Link } from "react-router-dom";
import { Menu, Grid, Button } from "antd";
import { useContext, useEffect, useState } from "react";
import Context from "../../../context/Context";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const RightMenu = () => {
	const { token } = useContext(Context);
	const { md } = useBreakpoint();

	const [isToken, setIsToken] = useState(false);
	const handleOnClick = () => {
		localStorage.removeItem("token");
		setIsToken(false);
	};

	useEffect(() => {
		if (localStorage.getItem("token")) setIsToken(true);
	}, [token]);

	return (
		<div>
			{!isToken ? (
				<Menu mode={md ? "horizontal" : "inline"}>
					<Menu.Item key="mail">
						<Link exact to="/login">
							Login
						</Link>
					</Menu.Item>
					<Menu.Item key="app">
						<Link to="/register">Register</Link>
					</Menu.Item>
				</Menu>
			) : (
				<div>
					<Menu mode={md ? "horizontal" : "inline"}>
						<Menu.Item key="app">
							<Button onClick={handleOnClick} href="/">
								Log Out
							</Button>
						</Menu.Item>
					</Menu>
				</div>
			)}
		</div>
	);
};

export default RightMenu;

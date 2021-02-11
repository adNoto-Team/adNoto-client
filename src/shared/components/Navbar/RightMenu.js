import { Link } from "react-router-dom";
import { Menu, Grid, Button, Space, message, Avatar } from "antd";
import { useContext, useEffect, useState } from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import Dropdown from "./RightMenuDropDown";
import Context from "../../../context/Context";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const RightMenu = () => {
	const { isToken } = useContext(Context);
	const { md } = useBreakpoint();

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
						<Menu.Item key="app" style={{ margin: "0", height: "100%" }}>
							<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
						</Menu.Item>
						<Menu.Item key="app">
							<Dropdown></Dropdown>
						</Menu.Item>
					</Menu>
				</div>
			)}
		</div>
	);
};

export default RightMenu;

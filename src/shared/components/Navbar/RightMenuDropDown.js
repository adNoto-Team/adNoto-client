import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { useContext } from "react";
import { Link, Router, Switch, Route, Redirect } from "react-router-dom";
import Context from "../../../context/Context";
const RightMenuDropDown = ({ a }) => {
	const { setIsToken } = useContext(Context);

	function handleButtonClick(e) {
		message.info("Click on left button.");
		console.log("click left button", e);
	}

	function handleMenuClick(e) {
		console.log("click", e);
	}
	const handleOnClick = () => {
		localStorage.removeItem("token");
		setIsToken(false);
		message.success("Logout Succesful");
	};

	const menu = (
		<Menu onClick={handleMenuClick}>
			<Menu.Item key="1">1st menu item</Menu.Item>
			<Menu.Item key="2">2nd menu item</Menu.Item>
			<Menu.Item key="3">
				<Link exact to="/">
					<Button type="primary" onClick={handleOnClick} size={"small"}>
						Log Out
					</Button>
				</Link>
			</Menu.Item>
		</Menu>
	);
	return (
		<div>
			<Space wrap>
				<Dropdown.Button
					onClick={handleButtonClick}
					overlay={menu}
					size={"middle"}
				>
					@Username
				</Dropdown.Button>
			</Space>
		</div>
	);
};

export default RightMenuDropDown;

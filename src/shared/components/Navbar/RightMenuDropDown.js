import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { useContext } from "react";

import Context from "../../../context/Context";
const RightMenuDropDown = () => {
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
				<Button type="primary" onClick={handleOnClick} size={"small"}>
					Log Out
				</Button>
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

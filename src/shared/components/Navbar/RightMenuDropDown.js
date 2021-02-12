import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Context from "../../../context/Context";
const RightMenuDropDown = ({ a }) => {
	const { setIsToken, user, getUser, profile } = useContext(Context);
	let history = useHistory();
	function handleButtonClick(e) {
		if (profile.user) {
			history.push("/userprofile");
		} else {
			message.info("Click on left button.");
		}
	}

	function handleMenuClick(e) {
		console.log("click", e);
	}
	const handleOnClick = () => {
		localStorage.removeItem("token");
		setIsToken(false);
		message.success("Logout Succesful");
	};
	useEffect(() => {
		if (!user.username) {
			getUser();
		}
	}, [user]);

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
					{user.username ? user.username : "USERNOTFOUND"}
				</Dropdown.Button>
			</Space>
		</div>
	);
};

export default RightMenuDropDown;

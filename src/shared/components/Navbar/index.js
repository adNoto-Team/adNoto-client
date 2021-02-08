import { useState } from "react";
import { Link } from "react-router-dom";

import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button } from "antd";
import style from "./style.module.css";

const Navbar = () => {
	const [isVisible, setIsVisiblee] = useState("");

	const showDrawer = () => {
		setIsVisiblee(!isVisible);
	};

	const closeDrawer = () => {
		setIsVisiblee(!isVisible);
	};

	return (
		<nav className={style.menuBar}>
			<div className={style.logo}>
				<Link to="/">adNoto</Link>
			</div>
			<div className={style.menuCon}>
				<div className={style.leftMenu}>
					<LeftMenu />
				</div>
				<div className={style.rightMenu}>
					<RightMenu />
				</div>
				<Button className={style.barsMenu} type="primary" onClick={showDrawer}>
					<span className={style.barsBtn}></span>
				</Button>
				<Drawer
					title="Basic Drawer"
					placement="right"
					closable={false}
					onClose={closeDrawer}
					visible={isVisible}
				>
					<LeftMenu />
					<RightMenu />
				</Drawer>
			</div>
		</nav>
	);
};

export default Navbar;

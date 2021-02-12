import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button, Col } from "antd";
import style from "./style.module.css";
import logo from "../../../assets/images/adNoto-logo.png";
import Context from "../../../context/Context";

const Navbar = () => {
	const { getUser } = useContext(Context);
	useEffect(() => {
		getUser();
	}, []);
	const [isVisible, setIsVisiblee] = useState("");

	const showDrawer = () => {
		setIsVisiblee(!isVisible);
	};

	const closeDrawer = () => {
		setIsVisiblee(!isVisible);
	};

	return (
		<Col>
			<nav className={style.menuBar}>
				<div className={style.logo}>
					<Link to="/">
						<img src={logo}></img>
						adNoto
					</Link>
				</div>
				<div className={style.menuCon}>
					<div className={style.leftMenu}>
						<LeftMenu />
					</div>
					<div className={style.rightMenu}>
						<RightMenu />
					</div>
					<Button
						className={style.barsMenu}
						type="primary"
						onClick={showDrawer}
					>
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
		</Col>
	);
};

export default Navbar;

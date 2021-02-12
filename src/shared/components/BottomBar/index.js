import { Col } from "antd";
import style from "./style.module.css";

function BottomBar() {
	return (
		<Col>
			<nav className={style.bottomBar}>
				<p>Ant Design ©2021 Created by adNoto Team</p>
			</nav>
		</Col>
	);
}

export default BottomBar;

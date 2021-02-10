import style from "./style.module.css";
import { Row, Button } from "antd";
import { FireTwoTone } from "@ant-design/icons";


const RandomContent = () => {
	return (
		<>
			<Row style={{ paddingTop: 30 }}>
				<div className={style.randomContent}>
					<img
						className={style.randomContentImg}
						src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
						alt=""
					/>
					<Button className={style.randomContetButton} size={"large"}>
						<FireTwoTone /> Radom Content
					</Button>
				</div>
			</Row>
		</>
	);
};
export default RandomContent;

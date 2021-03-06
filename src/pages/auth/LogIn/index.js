import {
	Form,
	Input,
	Button,
	Divider,
	Col,
	Row,
	Typography,
	message,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./style.module.css";

import { useContext, useEffect, useState } from "react";
import Context from "../../../context/Context";
import { Link, Redirect, useHistory } from "react-router-dom";
import logo from "../../../assets/images/adnoto.png";

const { Title } = Typography;
const LogIn = () => {
	const { login, dbMessage, token, isToken } = useContext(Context);
	const [isOnFinish, setIsOnFinish] = useState(false);
	const onFinish = (values) => {
		login({
			username: values.username,
			password: values.password,
		});
		setIsOnFinish(true);
	};

	useEffect(() => {
		if (dbMessage !== "" && isOnFinish) {
			message.warning(dbMessage);
			setIsOnFinish(false);
		}
		if (token && isOnFinish) {
			message.success("Login Successful");
			setIsOnFinish(false);
		}
	}, [dbMessage, token, isOnFinish]);

	return (
		<div>
			{isToken && <Redirect exact to="/"></Redirect>}

			<Form
				onFinish={onFinish}
				className={styles.loginForm}
				initialValues={{ remember: true }}
			>
				<img
					src={logo}
					alt="adNoto Icon"
					onError="this.src = 'https://i.hizliresim.com/wp2lva.png'"
				/>

				<Form.Item
					name="username"
					rules={[{ required: true, message: "Please input your Username!" }]}
					className={styles.formItem}
				>
					<Input
						prefix={<UserOutlined className={"site-form-item-icon"} />}
						placeholder="Username"
					/>
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: "Please input your Password!" }]}
					className={styles.formItem}
					style={{ marginBottom: "4px" }}
				>
					<Input
						prefix={<LockOutlined className="	siteFormItemIcon" />}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item>
					{/* <Form.Item
					name="remember"
					valuePropName="checked"
					noStyle
					className={styles.fromItem}
				>
					<Checkbox>Remember me</Checkbox>
				</Form.Item> */}

					<Row style={{ marginTop: "5px" }}>
						<Col span={24} className={styles.loginButton}>
							<Button
								type="primary"
								htmlType="submit"
								style={{ width: "100%" }}
							>
								Log in
							</Button>
						</Col>
					</Row>
					{/* <Row style={{ marginTop: "5px" }}>
					<Col span={24}>
						{dbMessage !== "" && (
							<Alert
								style={{ textAlign: "center" }}
								message={dbMessage}
								type="error"
							/>
						)}
					</Col>
				</Row> */}
					<Divider orientation="center">
						<Row>
							<a className={styles.loginFormForgot} href="">
								Forgotten password ?
							</a>
						</Row>
						<hr style={{ width: "150px" }}></hr>
					</Divider>

					<Link to="/register">
						<Button
							name="createNewAccout"
							htmlType={"submit"}
							style={{
								width: "100%",
								height: "55px",
								backgroundColor: "#52c41a",
								color: "white",
							}}
						>
							Create New Account
						</Button>
					</Link>
				</Form.Item>
			</Form>
		</div>
	);
};

export default LogIn;

import {
	Form,
	Input,
	Button,
	Checkbox,
	Divider,
	Col,
	Row,
	Alert,
	Typography,
	message,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./style.module.css";
import Tab from "../Components/Tab";
import { useContext, useEffect, useState } from "react";
import Context from "../../../context/Context";
import { Link, Redirect } from "react-router-dom";
import logo from "../../../assets/images/adnoto.png";
import { getKeyThenIncreaseKey } from "antd/lib/message";

const { Title } = Typography;
const LogIn = () => {
	const { login, dbMessage, token } = useContext(Context);
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
		if (token) {
			message.success("Login Successful");
			<Redirect exact to="/" />;
		}
	}, [dbMessage, token]);

	return (
		<Form
			onFinish={onFinish}
			className={styles.loginForm}
			initialValues={{ remember: true }}
		>
			<img src={logo} />
			{/* <Title
				style={{ color: "#1890ff", textAlign: "center", marginBottom: "0px" }}
			>
				Login
			</Title> */}

			{/* <span>
				<Tab />
			</span> */}
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
						<Button type="primary" htmlType="submit" style={{ width: "100%" }}>
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
	);
};

export default LogIn;

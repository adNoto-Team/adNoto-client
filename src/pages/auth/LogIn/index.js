import {
	Form,
	Input,
	Button,
	Checkbox,
	Col,
	Row,
	Alert,
	Typography,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./style.module.css";
import Tab from "../Components/Tab";
import { useContext } from "react";
import Context from "../../../context/Context";

const { Title } = Typography;
const LogIn = () => {
	const { login, message } = useContext(Context);

	const onFinish = (values) => {
		console.log("Received values of form: ", values);
		login({
			username: values.username,
			password: values.password,
		});
	};

	return (
		<Form
			onFinish={onFinish}
			className={styles.loginForm}
			initialValues={{ remember: true }}
		>
			<Title
				style={{ color: "#1890ff", textAlign: "center", marginBottom: "0px" }}
			>
				Login
			</Title>
			<span>
				<Tab />
			</span>
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
				<Form.Item
					name="remember"
					valuePropName="checked"
					noStyle
					className={styles.fromItem}
				>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<a className={styles.loginFormForgot} href="">
					Forgot password
				</a>
				<Row style={{ marginTop: "5px" }}>
					<Col span={24} className={styles.loginButton}>
						<Button type="primary" htmlType="submit" style={{ width: "100%" }}>
							Log in
						</Button>
					</Col>
				</Row>
				<Row style={{ marginTop: "5px" }}>
					<Col span={24}>
						{message !== "" && (
							<Alert
								style={{ textAlign: "center" }}
								message={message}
								type="error"
							/>
						)}
					</Col>
				</Row>
			</Form.Item>

			<Form.Item></Form.Item>
		</Form>
	);
};

export default LogIn;

import { Form, Input, Button, Checkbox, Col, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./style.module.css";

const LogIn =() => {
	return (
		<Form className={styles.loginForm} initialValues={{ remember: true }}>
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
			>
				<Input
					prefix={<LockOutlined className="site-form-item-icon" />}
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
			</Form.Item>

			<Form.Item>
				<Row>
					<Col span={9} className={styles.loginButton}>
						<Button type="primary" htmlType="submit">
							Log in
						</Button>
					</Col>
					<Col span={15}>
						Or <a href="">register now!</a>{" "}
					</Col>
				</Row>
			</Form.Item>
		</Form>
	);
}

export default LogIn;

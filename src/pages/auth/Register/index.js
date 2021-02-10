import {
	Form,
	Input,
	Checkbox,
	Button,
	Typography,
	Divider,
	Row,
	Col,
	Alert,
} from "antd";

//import adnoto from "../../../assets/images/adnoto.png";

import { useContext, useEffect } from "react";
import Context from "../../../context/Context";

import styles from "./style.module.css";
import Tab from "../Components/Tab";

const { Title } = Typography;

const SignUp = () => {
	const { signup, message, token } = useContext(Context);

	const onFinish = (values) => {
		signup({
			username: values.username,
			password: values.password,
			name: values.name,
			surname: values.surname,
			mail: values.email,
		});
	};

	return (
		<Form
			className={styles.formItemLayout}
			name="register"
			onFinish={onFinish}
			scrollToFirstError
		>
			<Title
				style={{ color: "#1890ff", textAlign: "center", marginBottom: "0px" }}
			>
				Sign Up
			</Title>
			<span style={{ marginTop: "0px" }}>
				<Tab />
			</span>
			<Form.Item
				className={styles.formItem}
				name="email"
				rules={[
					{
						type: "email",
						message: "The input is not valid E-mail!",
					},
					{
						required: true,
						message: "Please input your E-mail!",
					},
				]}
			>
				<Input placeholder="E-mail adress" />
			</Form.Item>

			{/* Username */}
			<Form.Item
				className={styles.formItem}
				name="username"
				rules={[
					{
						required: true,
						message: "Please input your username!",
						whitespace: true,
					},
				]}
			>
				<Input placeholder="Username" />
			</Form.Item>

			{/* Name */}
			<Form.Item
				className={styles.formItem}
				name="name"
				rules={[
					{
						required: true,
						message: "Please input your name!",
						whitespace: true,
					},
				]}
			>
				<Input placeholder="First Name" />
			</Form.Item>

			{/* Surname */}
			<Form.Item
				className={styles.formItem}
				name="surname"
				rules={[
					{
						required: true,
						message: "Please input your surn!",
						whitespace: true,
					},
				]}
			>
				<Input placeholder="Surname" />
			</Form.Item>

			{/* Password */}
			<Form.Item
				className={styles.formItem}
				name="password"
				rules={[
					{
						required: true,
						message: "Please input your password!",
					},
				]}
				hasFeedback
			>
				<Input.Password placeholder="Password" />
			</Form.Item>

			{/* Password confirm */}
			<Form.Item
				className={styles.formItem}
				style={{ marginBottom: "0px" }}
				name="confirm"
				dependencies={["password"]}
				hasFeedback
				rules={[
					{
						required: true,
						message: "Please confirm your password!",
					},
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue("password") === value) {
								return Promise.resolve();
							}
							return Promise.reject(
								"The two passwords that you entered do not match!"
							);
						},
					}),
				]}
			>
				<Input.Password placeholder="Confirm Password" />
			</Form.Item>

			{/* Agreement */}
			<Divider
				orientation="center"
				style={{ marginTop: "2px", marginBottom: "-5px" }}
			>
				<Form.Item
					className={styles.formItem}
					name="agreement"
					valuePropName="checked"
					rules={[
						{
							validator: (_, value) =>
								value
									? Promise.resolve()
									: Promise.reject("Should accept agreement"),
						},
					]}
					//{...tailFormItemLayout}
				>
					<Checkbox>
						I have read the <a href="">agreement</a>
					</Checkbox>
				</Form.Item>
			</Divider>

			<Form.Item style={{}}>
				<Row>
					<Col span={24}>
						<Button type="primary" htmlType="submit" style={{ width: "100%" }}>
							Register
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
		</Form>
	);
};
export default SignUp;

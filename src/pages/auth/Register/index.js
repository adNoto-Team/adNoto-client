import {
	Form,
	Input,
	Tooltip,
	Checkbox,
	Button,
	Typography,
	Divider,
} from "antd";

import { useContext, useEffect } from "react";
import Context from "../../../context/Context";

import { QuestionCircleOutlined } from "@ant-design/icons";

import styles from "./style.module.css";

const { Title } = Typography;

const SignUp = () => {
	const { signup, message, token } = useContext(Context);

	const onFinish = (values) => {
		console.log("Received values of form: ", values);
		signup({
			username: values.username,
			password: values.password,
			name: values.name,
			surname: values.surname,
			mail: values.email,
		});
	};
	useEffect(() => {
		const a = localStorage.getItem("token");
		console.log("token:" + a + "aaa");
	}, []);
	return (
		<Form
			className={styles.formItemLayout}
			name="register"
			onFinish={onFinish}
			initialValues={{
				residence: ["zhejiang", "hangzhou", "xihu"],
				prefix: "86",
			}}
			scrollToFirstError
		>
			<Title style={{ color: "#1890ff", textAlign: "center" }}>
				Sign Up{message}
				{token}
			</Title>

			<Form.Item
				className={styles.formItem}
				name="email"
				label="E-mail"
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
				<Input />
			</Form.Item>

			{/* Username */}
			<Form.Item
				className={styles.formItem}
				name="username"
				label={
					<span>
						Username&nbsp;
						<Tooltip title="What do you want others to call you?">
							<QuestionCircleOutlined />
						</Tooltip>
					</span>
				}
				rules={[
					{
						required: true,
						message: "Please input your username!",
						whitespace: true,
					},
				]}
			>
				<Input />
			</Form.Item>

			{/* Name */}
			<Form.Item
				className={styles.formItem}
				name="name"
				label={<span>Name</span>}
				rules={[
					{
						required: true,
						message: "Please input your name!",
						whitespace: true,
					},
				]}
			>
				<Input />
			</Form.Item>

			{/* Surname */}
			<Form.Item
				className={styles.formItem}
				name="surname"
				label={<span>Surname</span>}
				rules={[
					{
						required: true,
						message: "Please input your surn!",
						whitespace: true,
					},
				]}
			>
				<Input />
			</Form.Item>

			{/* Password */}
			<Form.Item
				className={styles.formItem}
				name="password"
				label="Password"
				rules={[
					{
						required: true,
						message: "Please input your password!",
					},
				]}
				hasFeedback
			>
				<Input.Password />
			</Form.Item>

			{/* Password confirm */}
			<Form.Item
				className={styles.formItem}
				name="confirm"
				label="Confirm Password"
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
				<Input.Password />
			</Form.Item>

			{/* Agreement */}
			<Divider orientation="center" style={{ marginBottom: "-10px" }}>
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
				<Divider orientation="center">
					<Button type="primary" htmlType="submit">
						Register
					</Button>
				</Divider>
			</Form.Item>
		</Form>
	);
};
export default SignUp;

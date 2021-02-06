import {
	Form,
	Input,
	Tooltip,
	Checkbox,
	Button,
	Typography,
	Divider,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import styles from "./style.module.css";
const { Title } = Typography;

function SignUp() {
	// const onFinish = (values) => {
	// 	console.log("Received values of form: ", values);
	// };

	return (
		<Form
			className={styles.formItemLayout}
			//form={form}
			name="register"
			//onFinish={onFinish}
			initialValues={{
				residence: ["zhejiang", "hangzhou", "xihu"],
				prefix: "86",
			}}
			scrollToFirstError
		>
			<Title style={{ color: "#1890ff", textAlign: "center" }}>Sign Up</Title>

			<Form.Item
				className={styles.formItem}
				name="firstName"
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

			<Form.Item
				className={styles.formItem}
				name="nickname"
				label={
					<span>
						Nickname&nbsp;
						<Tooltip title="What do you want others to call you?">
							<QuestionCircleOutlined />
						</Tooltip>
					</span>
				}
				rules={[
					{
						required: true,
						message: "Please input your nickname!",
						whitespace: true,
					},
				]}
			>
				<Input />
			</Form.Item>

			{/* 
			<Form.Item
				name="website"
				label="Website"
				rules={[{ required: true, message: "Please input website!" }]}
			>
				<AutoComplete
					options={websiteOptions}
					onChange={onWebsiteChange}
					placeholder="website"
				>
					<Input />
				</AutoComplete>
			</Form.Item> */}
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
}
export default SignUp;

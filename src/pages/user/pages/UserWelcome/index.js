import {
	Layout,
	Menu,
	Breadcrumb,
	Carousel,
	Typography,
	Row,
	Col,
	Avatar,
} from "antd";

import style from "./style.module.css";

const { Title, Text, Link } = Typography;
const { Header, Content, Footer } = Layout;

function onChange(a, b, c) {
	console.log(a, b, c);
}

const contentStyle = {
	height: "160px",
	color: "#fff",
	lineHeight: "160px",
	textAlign: "center",
	background: "#364d79",
};

const UserWelcome = () => {
	return (
		<>
			<Layout>
				<Content
					className="site-layout"
					style={{ padding: "0 50px", marginTop: 64 }}
				>
					<Breadcrumb style={{ margin: "16px 0" }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<div
						className="site-layout-background"
						style={{ padding: 24, minHeight: 380 }}
					>
						<Title>Member Welcome Page</Title>
						<Carousel afterChange={onChange}>
							<div>
								<h3 style={contentStyle}></h3>
							</div>
							<div>
								<h3 style={contentStyle}>2</h3>
							</div>
							<div>
								<h3 style={contentStyle}>3</h3>
							</div>
							<div>
								<h3 style={contentStyle}>4</h3>
							</div>
						</Carousel>
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					Ant Design ©2021 Created by AdNoto
				</Footer>
			</Layout>
		</>
	);
};

export default UserWelcome;

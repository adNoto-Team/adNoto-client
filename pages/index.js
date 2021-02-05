import { Layout, Menu, Breadcrumb, Carousel } from "antd";

// const { Title } = Typography;

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

function index() {
	return (
		<>
			<Layout>
				<Header
					style={{
						position: "fixed",
						zIndex: 1,
						width: "100%",
					}}
				>
					<div className="logo" />
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
						<Menu.Item key="1">nav 1</Menu.Item>
						<Menu.Item key="2">nav 2</Menu.Item>
						<Menu.Item key="3">nav 3</Menu.Item>
					</Menu>
				</Header>
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
						Content
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
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		</>
	);
}

export default index;

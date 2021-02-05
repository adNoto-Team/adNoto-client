import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function index() {
	return (
		<>
			<Layout>
				<Header>Header</Header>
				<Content>Content</Content>
				<Footer>Footer</Footer>
			</Layout>
		</>
	);
}

export default index;

import { Layout, Col } from "antd";

import style from "./style.module.css";

const { Content } = Layout;

const ContentPage = () => {
	return <>
			<Col lg={{ span: 12, offset: 6 }}>
				<Layout span={12} offset={6}>
					<Content>
					<h1>Content Page</h1>
					</Content>
				</Layout>
			</Col>
		</>;
};

export default ContentPage;

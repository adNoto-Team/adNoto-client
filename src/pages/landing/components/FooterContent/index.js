import React, { memo } from "react";
import {
	GithubOutlined,
	LinkedinOutlined,
	TwitterOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";
import "./styles.css";
function FooterContent() {
	const icons = [
		{ icon: <GithubOutlined />   },
		{ icon: <TwitterOutlined />  },
		{ icon: <LinkedinOutlined /> },
	];
	const links = [
		{
			link: "Hakkımızda",
		},
		{
			link: "Kullanım Koşulları",
		},
		{
			link: "Gizlilik",
		},
		{
			link: "Bizimle İletişime Geçin",
		},
	];
	return (
		<>
			<Row style={{ padding: "20px" }}>
				<Col span={8} offset={8}>
					<Row>
						{icons.map((icon, key) => (
							<Col key={key} span={4} offset={2}>
								<span>{icon.icon}</span>
							</Col>
						))}
					</Row>
				</Col>
			</Row>
			<Row style={{ padding: "20px" }}>
				<Col span={18} offset={3}>
					<Row>
						{links.map((link, key) => (
							<Col key={key} span={4} offset={2}>
								<span>{link.link}</span>
							</Col>
						))}
					</Row>
				</Col>
			</Row>
			<div
				style={{
					color: "#678",
					display: "flex",
					justifyContent: "center",
					padding: "0px",
				}}
			>
				<p>Ant Design ©2021 Created by AdNoto</p>
			</div>
		</>
	);
}

export default memo(FooterContent);

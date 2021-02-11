import React, { memo, useState } from "react";
import {
	CommentOutlined,
	SaveOutlined,
	SearchOutlined,
	UnorderedListOutlined,
	StarOutlined,
	CaretRightOutlined,
} from "@ant-design/icons";
import { Row, Col, Divider, Typography, Card } from "antd";
import style from "./styles.module.css";
const { Title } = Typography;
function WithAdNoto() {
	const withAdNotoItems = [
		{
			title: "Keep track of every movie or series you've ever watched.",
			icon: <SaveOutlined />,
			hoverColor: "#00c030",
		},
		{
			title: "Save review about every content you've ever watched.",
			icon: <CommentOutlined />,
			hoverColor: "#00c030",
		},

		{
			title: "Check out the content we recommend to you.",
			icon: <SearchOutlined />,
			hoverColor: "#ee7000",
		},

		{
			title: "Make “Watch Later” list.",
			icon: <UnorderedListOutlined />,
			hoverColor: "#ee7000",
		},
		{
			title: "Rate each content with a “like”.",
			icon: <StarOutlined />,
			hoverColor: "#209ce4",
		},
		{
			title: "So let's start!",
			icon: <CaretRightOutlined />,
			hoverColor: "#209ce4",
		},

		//className={style.gridStyle} style={{ width: 100 }}
	];

	return (
		<>
			<Row style={{ paddingTop: "30px" }}></Row>
			<Card title="With adNoto..." className={style.WithAdNoto}>
				<Row gutter={[16, 16]}>
					{withAdNotoItems.map((item, key) => (
						<Col
							xs={12}
							sm={12}
							md={12}
							lg={8}
							xl={8}
							style={{
								padding: "0px !important",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<Card.Grid key={key} className={style.gridStyle}>
								<div style={{ display: "flex" }}>
									{item.icon}
									<Title level={5}>{item.title}</Title>
								</div>
							</Card.Grid>
						</Col>
					))}
				</Row>
			</Card>
		</>
	);
}

export default memo(WithAdNoto);

//#456

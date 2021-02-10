import React, { memo, useState} from "react";
import {
	CommentOutlined,
	SaveOutlined,
	SearchOutlined,
	UnorderedListOutlined,
	StarOutlined,
	CaretRightOutlined,
} from "@ant-design/icons";
import { Row, Col, Divider, Typography } from "antd";

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
			hoverColor:"#00c030",
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
	];
	 const colStyle =  {
		backgroundColor:"#456",
		color: "#f9f9f9",
		fontSize: "22px",
		padding:"24px",
		 
	};
	const titleStyle = {
		color: "#f9c22e",
		fontWeight: "500",
		fontSize: "28px",
	};

	return (
		<>
			<Col span={22} offset={1} style={{ paddingTop: "50px" }}>
				<Divider orientation="left" style={{ borderColor: '#f9c22e',  }}> 
					<Title level={5} style={titleStyle}>
						With adNoto 
					</Title>
				</Divider>
				<Row   >
					{withAdNotoItems.map((item, key) => (
						<Col key={key} span={6}  offset={1} style={colStyle} >
							<div style={{ display: "flex" }}>
								<span style ={{fontSize: "26px"}}>{item.icon}</span>
								<p style={{ marginBottom: "0", paddingLeft: "10px" }}>
									{item.title}
								</p>
							</div>
						</Col>
					))}
				</Row>
			</Col>
		</>
		
	);
}

export default memo(WithAdNoto);

//#456

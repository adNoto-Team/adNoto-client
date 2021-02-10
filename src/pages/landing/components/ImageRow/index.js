import React from "react";
import { Col, Row, Divider, Typography, Image } from "antd";

const { Title } = Typography;
function ImageRow({ title, data, clicked }) {
    const titleStyle = {
		color: "#f9c22e",
		fontWeight: "600",
		fontSize: "24px"
	}

	return (
        <Row style={{padding:"30px 0"}}>

            <Col span= {22} offset= {1}   >
                <Divider orientation="left" style={{ borderColor: '#f9c22e',  }}>
                    <Title level={5} style = {titleStyle}>{title} </Title>
                </Divider>
                <Row >
                    {data.map((item, key) => (
                        <Col span={2} key={key}>
                            <Image preview={false} height={"120px"} src={item.cover} onClick={clicked}/>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
	);
}

export default ImageRow;

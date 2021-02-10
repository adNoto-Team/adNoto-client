import React from "react";
import { Card, Col } from "antd";
import {StarFilled, CommentOutlined} from "@ant-design/icons";

const { Meta } = Card;
function CardItem({ title, commentCount, cover }) {
    const starStyle = {
        color: "#f9c22e"
    }
	return (
    //   {  <Col className={ ""} xs={12} sm={8} md={6} lg={8} xl={6}>} span 4 
    

        <Col span={4}> 
                <Card
                    
                    cover={<img src={cover} style= {{height: "230px"}}/>}
                    actions={[
                        <div style={{color: "black"}}>
                            <StarFilled key="imdb" style = {starStyle}/> {commentCount} 
                        </div>,
                        <div style={{color: "black"}}>
                            <CommentOutlined key="edit" /> {commentCount}
                        </div>,
                    ]}
                >
                    <Meta title={title} />
                </Card>
            </Col>
  
	);
}

export default CardItem;

import React from "react";
import { Card } from "antd";
 
import { StarFilled, CommentOutlined } from "@ant-design/icons";
const { Meta, Image } = Card;

function ItemCard({ width_h, title, imdbScore, commentCount }) {
	return (
		<Card
			style={{ width: width_h, margin: "6px" }}
			cover={
				<img
					src={
						"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289"
					}
				/>
			}
			actions={[
				<div>
					<StarFilled key="imdb" /> {imdbScore} 
				</div>,

				<div>
					<CommentOutlined key="edit" /> {commentCount}
				</div>,
			]}
		>
			<Meta title={title} />
		</Card>
	);
}

export default ItemCard;

import { Col, Card } from "antd";
import style from "./cardItem.module.css";
import { Link } from "react-router-dom";

const { Meta } = Card;

const CardItem = ({ title, imdb, coverImg, contentId }) => {
	return (
		<Link to={"/content/" + contentId}>
			<Col className={style.unset} xs={12} sm={12} md={8} lg={8} xl={6}>
				<Card
					hoverable
					style={{ width: 200, height: "100%" }}
					className={style.cardItem}
					cover={<img alt="content-cover" src={coverImg} />}
				>
					<Meta title={title} description={`imdb: ${imdb}`} />
				</Card>
			</Col>
		</Link>
	);
};

export default CardItem;

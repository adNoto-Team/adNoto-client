import { Col, Card } from "antd";
import style from "./cardItem.module.css";

const { Meta } = Card;

const CardItem = ({ title, imdb, coverImg }) => {
	return (
		<>
			<Col className={style.gutterRow} xs={12} sm={8} md={6} lg={8} xl={6}>
				<Card
					hoverable
					style={{ width: 200 }}
					cover={<img alt="content-cover" src={coverImg} />}
				>
					<Meta title={title} description={imdb} />
				</Card>
			</Col>
		</>
	);
};

export default CardItem;

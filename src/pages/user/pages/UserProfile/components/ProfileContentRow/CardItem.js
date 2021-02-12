import { Col, Card } from "antd";
import style from "./cardItem.module.css";

const { Meta } = Card;

const CardItem = ({ title, imdb, coverImg }) => {
	return (
		<Col className={style.unset} xs={12} sm={12} md={8} lg={8} xl={8}>
			<Card
				hoverable
				style={{ width: 200 }}
				className={style.cardItem}
				cover={
					<img alt="content-cover" src={"https://api.adnoto.co/" + coverImg} />
				}
			>
				<Meta title={title} description={`imdb: ${imdb}`} />
			</Card>
		</Col>
	);
};

export default CardItem;

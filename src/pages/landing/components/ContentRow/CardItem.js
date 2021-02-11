import { Col, Card } from "antd";
import style from "./cardItem.module.css";
import {StarFilled} from "@ant-design/icons";
const { Meta } = Card;

const CardItem = ({ name, imdbScore, thumbnail }) => {
	 
	return (
		<Col className={style.unset} xs={12} sm={12} md={8} lg={8} xl={6}>
			<Card
				hoverable
				style={{ width: 200 }}
				className={style.cardItem}
				cover={<img alt="content-cover" src={thumbnail} />}
			>
				<Meta title={name} description={`${ StarFilled }: ${imdbScore}`} />
			</Card>
		</Col>
	);
};

export default CardItem;

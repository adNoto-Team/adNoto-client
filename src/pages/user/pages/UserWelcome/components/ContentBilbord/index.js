import { Row, Col, Card, Typography, Button } from "antd";

import style from "./style.module.css";
import Comments from "../Comments";

const { Title, Text } = Typography;
const { Meta } = Card;

const ContentBilbord = ({
	title,
	subTitle,
	bilbordDesc,
	coverImg,
	rotation = "left",
}) => {
	return (
		<>
			<Row
				className={rotation == "right" ? style.rotation : null}
				style={{ paddingTop: 40 }}
			>
				<Col flex={2} className={style.contentCover}>
					<Card
						hoverable
						style={{ width: 240 }}
						cover={<img alt="content-cover" src={coverImg} />}
					>
						<Meta title={title} description={subTitle} />
					</Card>
				</Col>
				<Col flex={3} className={style.coverDesc}>
					<div className={style.title}>
						<Title>{title}</Title>
						<Text className={style.bilbordDesc}>{bilbordDesc}</Text>
					</div>

					<Row justify={"space-between"}>
						<Text>{subTitle}</Text>
						<Text>Top Liked Comments</Text>
					</Row>
					<Comments />
					<Button type="primary" size={"large"} style={{ float: "right" }}>
						Continue to Comment!
					</Button>
				</Col>
			</Row>
		</>
	);
};

export default ContentBilbord;

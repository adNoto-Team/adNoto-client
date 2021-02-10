import { Row, Divider, Typography } from "antd";

import CardItem from "./CardItem";
import style from "./style.module.css";

const { Title } = Typography;

const CardRow = ({ title, contents }) => {
	return (
		<>
			<Row
				style={{ paddingTop: 30 }}
				justify={"center"}
			>
				<Divider orientation="left" style={{ height: "fit-content" }}>
					<Title level={3}>{title}</Title>
				</Divider>

				<Row gutter={[50, 50]} className={style.cardRow}>
					{contents.map((content) => (
						<CardItem
							title={content.title}
							imdb={content.imdb}
							coverImg={content.coverImg}
						/>
					))}
				</Row>
			</Row>
		</>
	);
};

export default CardRow;

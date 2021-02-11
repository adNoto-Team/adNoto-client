import { Row, Divider, Typography } from "antd";

import CardItem from "./CardItem";
import style from "./style.module.css";

const { Title } = Typography;

const ContentRow = ({ title, contents }) => {
	return (
		<>
			<Row style={{ paddingTop: 30 }} justify={"center"}>
				<Divider orientation="left" style={{ height: "fit-content" }}>
					{
						title &&
						<Title level={3}>{title}</Title>
					}
				</Divider>

				<Row gutter={[50, 50]} className={style.contentRow}>
					{contents.map((content) => (
						<CardItem
							name={content.name}
							imdbScore={content.imdbScore}
							thumbnail={content.thumbnail}
						/>
					))}
				</Row>
			</Row>
		</>
	);
};

export default ContentRow;

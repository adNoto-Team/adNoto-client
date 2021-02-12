import { Row } from "antd";

import CustomDivider from '../../../../../../shared/components/CustomDivider/index';
import CardItem from "./CardItem";
import style from "./style.module.css";

const ContentRow = ({ title, contents }) => {
	return (
		<>
			<Row style={{ paddingTop: 30 }} justify={"center"}>
				<CustomDivider title={title} />

				<Row gutter={[50, 50]} className={style.contentRow}>
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

export default ContentRow;

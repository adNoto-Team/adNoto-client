import { Row } from "antd";

import CustomDivider from "../../../../../../shared/components/CustomDivider/index";
import CardItem from "./CardItem";
import style from "./style.module.css";

const ContentRow = ({ title, contents }) => {
	return (
		<>
			<Row style={{ paddingTop: 30 }} justify={"center"}>
				<CustomDivider title={title} />
				<Row gutter={[30, 30]} className={style.contentRow}>
					{contents.map((content) => (
						<CardItem
							contentId={content.id}
							title={content.name}
							imdb={content.imbdScore}
							coverImg={
								content.avatar
									? "https://api.adnoto.co/" + content.avatar
									: content.coverImg
							}
						/>
					))}
				</Row>
			</Row>
		</>
	);
};

export default ContentRow;

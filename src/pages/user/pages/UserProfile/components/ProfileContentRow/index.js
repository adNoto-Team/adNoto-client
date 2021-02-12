import { Row } from "antd";

import CustomDivider from "../../../../../../shared/components/CustomDivider/index";
import CardItem from "./CardItem";
import style from "./style.module.css";

const ProfileContentRow = ({ title, contents }) => {
	console.log("contents lallala", contents);
	if (contents) {
		return (
			<>
				<Row style={{ paddingTop: 30 }} justify={"center"}>
					<CustomDivider title={title} />

					<Row gutter={[50, 50]} className={style.contentRow}>
						{contents &&
							contents
								.slice(0, 3)
								.map((item) => (
									<CardItem
										title={item.content.name}
										imdb={item.content.imbdScore}
										coverImg={item.content.avatar}
									/>
								))}
					</Row>
				</Row>
			</>
		);
	}
};

export default ProfileContentRow;

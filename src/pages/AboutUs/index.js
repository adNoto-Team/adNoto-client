import { Col, Card, Typography, Row, Divider, Image } from "antd";

import style from "./style.module.css";

const { Title } = Typography;
const { Meta } = Card;

const AboutUs = () => {
	const developerTeam = [
		{
			name: "Gökberk Deprem",
			cover:
				"https://avatars.githubusercontent.com/u/75221412?s=460&u=5c4f2312d14c16368e4a6c6c901551ed5e0256a8&v=4",
			github: "https://github.com/gokberkdeprem",
		},
		{
			name: "Hasan Tezcan",
			cover:
				"https://avatars.githubusercontent.com/u/32804505?s=460&u=e04a6baec805cecc5ed8df4d387b77a93c164dd7&v=4",
			github: "https://github.com/hasantezcan",
		},
		{
			name: "Hatice Koçak",
			cover:
				"https://avatars.githubusercontent.com/u/30705864?s=460&u=531424ea32e0ed42b796264946368981e9528842&v=4",
			github: "https://github.com/kocakkhatice",
		},
		{
			name: "Semih Yönet",
			cover:
				"https://avatars.githubusercontent.com/u/56456840?s=460&u=5b86ec8abd45c86ba0166f12be020ab249a96520&v=4",
			github: "https://github.com/semihyonet",
		},
	];
	const siteCardWrapper = {
		padding: "0 30px",
	};
	return (
		<>
			<div style={siteCardWrapper}>
				<Divider orientation="center">
					<Title level={3}>Developer Team</Title>
				</Divider>
				<Row justify={"center"}>
					<Row gutter={[50, 50]}>
						{developerTeam.map((member, key) => (
							<Col
								xs={24}
								sm={24}
								md={6}
								lg={6}
								xl={6}
								className={style.memberCol}
							>
								<Card
									key={key}
									className={style.Card}
									cover={
										<a href={member.github} target="_blank">
											<img
												alt={"content-cover"}
												src={member.cover}
												className={style.coverImage}
											/>
										</a>
									}
								>
									<Meta title={<Title level={4}>{member.name}</Title>} />
								</Card>
							</Col>
						))}
					</Row>
				</Row>
			</div>
			<div style={{ padding: "30px" }}>
				<Divider orientation="center">
					<Title level={3}>Special thanks to </Title>
				</Divider>
				<Row justify="center">
					<Image
						preview={false}
						src={"https://www.tpfund.org/wp-content/uploads/2019/07/logo-1.png"}
					/>
				</Row>
			</div>
		</>
	);
};

export default AboutUs;

import { Layout, Row, Col, Divider, Card, Typography, Button } from "antd";
import Comments from "./components/Comments";

import style from "./style.module.css";

const { Title, Text } = Typography;
const { Content } = Layout;
const { Meta } = Card;

const UserWelcome = () => {
	return (
		<>
			<Col lg={{ span: 12, offset: 6 }}>
				<Layout span={12} offset={6} className={style.container}>
					<Content>
						{/* <Divider orientation="left">Percentage columns</Divider> */}
						<Row style={{ paddingTop: 30 }}>
							<Col flex={2} className={style.contentCover}>
								<Card
									hoverable
									style={{ width: 240 }}
									cover={
										<img
											alt="content-cover"
											src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Floftcinema.org%2Ffiles%2F2017%2F08%2F740full-the-office-us-poster.jpg&f=1&nofb=1"
										/>
									}
								>
									<Meta title="The Office" description="Season 3 Episode 5" />
								</Card>
							</Col>
							<Col flex={3} className={style.coverDesc}>
								<Title>The Office</Title>
								<Row justify={"space-between"}>
									<Text>Season 3 Episode 5</Text>
									<Text>Top Liked Comments</Text>
								</Row>
								<Comments />
								<Button
									type="primary"
									size={"large"}
									style={{float: "right"}}
								>
									Continue to Comment!
								</Button>
							</Col>
						</Row>
					</Content>
				</Layout>
			</Col>
		</>
	);
};

export default UserWelcome;

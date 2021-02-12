import { Layout, Row, Col, Card, Typography, Button, Divider } from "antd";

import style from "./style.module.css";
import BigComments from "../../../user/pages/UserWelcome/components/Comments/index";
import { VideoCameraFilled } from "@ant-design/icons";
import Comments from  "./components/Comments"

const { Content } = Layout;
const { Meta } = Card;
const { Title, Text } = Typography;

const content = {
	title: "The Office",
	episodeName: "Season 3 Episode 5",
	imdb: "8.5",
	desc:
		"A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
	creator: "Ricky Gervais",
	posterImg:
		"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Floftcinema.org%2Ffiles%2F2017%2F08%2F740full-the-office-us-poster.jpg&f=1&nofb=1",
	coverImg:
		"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjessicajjohnston.com%2Fblog%2Fwp-content%2Fuploads%2F2014%2F04%2Fthe-office-netflix-tv-series.jpg&f=1&nofb=1",
};

const ContentPage = () => {
	return (
		<>
			<Col lg={{ span: 16, offset: 4 }}>
				<div span={12} offset={6}>
					<img className={style.coverImg} src={content.coverImg} alt="" />
				</div>
			</Col>
			<Col lg={{ span: 12, offset: 6 }}>
				<Layout>
					<Content>
						<Row>
							{/* Card Section */}
							<Col flex={2} className={style.contentCover}>
								<Card
									hoverable
									style={{ width: 240 }}
									cover={<img alt="content-cover" src={content.posterImg} />}
								>
									<Meta
										title={content.title}
										description={content.episodeName}
									/>
								</Card>
								<Button className={style.watchTrailerButton} size={"large"}>
									<VideoCameraFilled /> Watch Trailer
								</Button>
							</Col>
							{/* Desc Section */}
							<Col
								flex={3}
								className={style.descSection}
								style={{ paddingTop: 40}}
							>
								<div className={style.title}>
									<Title>{content.title}</Title>
									<Text className={style.creator}>{content.creator}</Text>
								</div>
								<Row justify={"space-between"}>
									<Text className={style.desc}>{content.desc}</Text>
								</Row>
								<div className={style.seasonRow}>
									<Button>Season 1</Button>
									<Button>Season 2</Button>
									<Button>Season 3</Button>
									<Button>Season 4</Button>
									<Button>Season 5</Button>
									<Button>Season 6</Button>
									<Button>Season 7</Button>
									<Button>Season 8</Button>
								</div>

								<Divider
									orientation="left"
									style={{ height: "fit-content", fontWeight: "unset" }}
								>
									<Title level={3}>Top Comments</Title>
								</Divider>

								<Comments />
							</Col>
						</Row>
					</Content>
				</Layout>
			</Col>
		</>
	);
};

export default ContentPage;

import { Layout, Row, Col, Card, Typography, Button } from "antd";

import { RightOutlined, VideoCameraFilled } from "@ant-design/icons";
import EpisodeSider from "./components/EpisodeSider";
import CustomDivider from "../../../../shared/components/CustomDivider";
import CommentsList from "../components/Comments/CommentsList";
import CommentItem from "../components/Comments/CommentItem";
import NewComment from "../components/Comments/NewComment";

import style from "./style.module.css";

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

const popularComment = {
	author: "Hasan Tezcan",
	avatar:
		"https://avatars.githubusercontent.com/u/32804505?s=460&u=e04a6baec805cecc5ed8df4d387b77a93c164dd7&v=4",
	content: (
		<p>
			We supply a series of design principles, practical patterns and high
			quality design resources (Sketch and Axure), to help people create their
			product prototypes beautifully and efficiently.
		</p>
	),
	datetime: "2021-02-12 01:44",
	likeCount: 5,
	isSpoiler: false,
};
const currentUser = {
	username: "Hasan Tezcan",
	avatar:
		"https://avatars.githubusercontent.com/u/32804505?s=460&u=e04a6baec805cecc5ed8df4d387b77a93c164dd7&v=4",
};

const EpisodePage = () => {
	return (
		<>
			<div className={style.nextEpisodeButtonWrapper}>
				<div className={style.nextEpisodeButton}>
					<Button
						type="primary"
						shape="circle"
						icon={<RightOutlined />}
						size="large"
					/>
					<Text> Next Episode</Text>
				</div>
			</div>
			<Layout style={{ backgroundColor: "#EBF2F9" }}>
				<EpisodeSider />
				<Col lg={{ span: 12, offset: 6 }} style={{ paddingTop: "50px" }}>
					<Content>
						<Row>
							{/* Card Section */}
							<Col flex={2} className={style.cardSection}>
								<Card
									hoverable
									style={{ width: 240, top: "10px" }}
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
								<Button
									className={style.desktopNextEpisodeButton}
									size={"large"}
								>
									<RightOutlined /> Next Episode
								</Button>
							</Col>
							{/* Desc Section */}
							<Col
								flex={3}
								className={style.descSection}
								style={{ paddingTop: 40 }}
							>
								<div className={style.title}>
									<Title>{content.title}</Title>
									<Text className={style.creator}>{content.creator}</Text>
								</div>
								<Row justify={"space-between"}>
									<Text className={style.desc}>{content.desc}</Text>
								</Row>

								{/* Comments */}
								<NewComment
									author={currentUser.username}
									avatar={currentUser.avatar}
								/>
								<CustomDivider title={"Top Comments"} />
								<CommentItem
									author={popularComment.author}
									avatar={popularComment.avatar}
									content={popularComment.content}
									likeCount={popularComment.likeCount}
									isSpoiler={popularComment.isSpoiler}
								/>
								<CustomDivider title={"All Comments"} />
								<CommentsList />
							</Col>
						</Row>
					</Content>
				</Col>
			</Layout>
		</>
	);
};

export default EpisodePage;

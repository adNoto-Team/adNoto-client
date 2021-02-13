import { Layout, Row, Col, Card, Typography, Button } from "antd";
import { useContext, useEffect, useState } from "react";
import Context from "../../../../context/Context";
import style from "./style.module.css";
import { VideoCameraFilled } from "@ant-design/icons";
import CustomDivider from "../../../../shared/components/CustomDivider";
import CommentsList from "../components/Comments/CommentsList";
import NewComment from "../components/Comments/NewComment";
import Loading from "../../../../shared/components/Loading";
import { useParams } from "react-router-dom";

const { Content } = Layout;
const { Meta } = Card;
const { Title, Text } = Typography;

const content = {
	title: "The Offfice",
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
	let { id: curId } = useParams();

	const {
		getContentDetails,
		contentDetails,
		website,
		user,
		sendCommentofContent,
	} = useContext(Context);

	useEffect(() => {
		getContentDetails(curId);
	}, [user]);

	if (contentDetails && contentDetails.name)
		return (
			<>
				<Col lg={{ span: 16, offset: 4 }}>
					<div span={12} offset={6}>
						<img
							className={style.coverImg}
							src={website + contentDetails.coverPicture}
							alt="CoverPicture"
						/>
					</div>
				</Col>
				<Col lg={{ span: 12, offset: 6 }}>
					<Layout>
						<Content style={{ backgroundColor: "#EBF2F9" }}>
							<Row>
								{/* Card Section */}
								<Col flex={2} className={style.contentCover}>
									<Card
										hoverable
										style={{ width: 240 }}
										cover={
											<img
												alt="Avatar Picture"
												src={website + contentDetails.avatar}
											/>
										}
									>
										<Meta
											title={contentDetails.name}
											description={contentDetails.director}
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
									style={{ paddingTop: 40 }}
								>
									<div className={style.title}>
										<Title>{content.title}</Title>
										<Text className={style.creator}>
											{contentDetails.director}
										</Text>
									</div>
									<Row justify={"space-between"}>
										<Text className={style.desc}>{contentDetails.desc}</Text>
									</Row>
									<div className={style.seasonRow}>
										{contentDetails.seasons.map((a, i) => (
											<Button>Season {a.seasonNumber} </Button>
										))}
									</div>

									<CustomDivider title={"Top Comments"} />

									<CommentsList
										web={website}
										data={contentDetails.commentsArr}
									/>
									<NewComment
										cb={(comment, isSpoiler) => {
											sendCommentofContent(curId, comment, isSpoiler);
										}}
										author={user.username}
										avatar={website + user.avatar}
									/>
								</Col>
							</Row>
						</Content>
					</Layout>
				</Col>
			</>
		);
	else {
		return <Loading />;
	}
};

export default ContentPage;

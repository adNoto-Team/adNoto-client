import { Layout, Row, Col, Card, Typography, Button, Radio } from "antd";
import { useContext, useEffect, useState } from "react";
import Context from "../../../../context/Context";
import style from "./style.module.css";
import { VideoCameraFilled } from "@ant-design/icons";
import CustomDivider from "../../../../shared/components/CustomDivider";
import CommentsList from "../components/Comments/CommentsList";
import NewComment from "../components/Comments/NewComment";
import Loading from "../../../../shared/components/Loading";
import { Link, useHistory, useParams } from "react-router-dom";
import Footer from "../../../../shared/components/Footer/index";

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
	let history = useHistory();
	const {
		getContentDetails,
		contentDetails,
		website,
		user,
		sendCommentofContent,
		watchLaterContent,
		watchedContent,
	} = useContext(Context);

	useEffect(() => {
		getContentDetails(curId);
	}, [user]);

	const onChange = async (e) => {
		console.log(`radio checked = ${e.target.value}`);
		e.target.value == "will"
			? await watchLaterContent(curId)
			: await watchedContent(curId);
	};

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

									<div className={style.coverBottom}>
										<Button className={style.watchTrailerButton} size={"large"}>
											<VideoCameraFilled /> Watch Trailer
										</Button>

										<Radio.Group
											buttonStyle="solid"
											className={style.radioButtons}
											onChange={onChange}
											defaultValue="will"
											// size="large"
										>
											{/* <Radio.Button value="now">Currently Watching</Radio.Button> */}
											<Radio.Button value="will">Will Watch</Radio.Button>
											<Radio.Button value="was">Watched</Radio.Button>
										</Radio.Group>
									</div>
								</Col>
								{/* Desc Section */}
								<Col
									flex={3}
									className={style.descSection}
									style={{ paddingTop: 40 }}
								>
									<div className={style.title}>
										<Title>{contentDetails.name}</Title>
										<Text className={style.creator}>
											{contentDetails.director}
										</Text>
									</div>
									<Row justify={"space-between"}>
										<Text className={style.desc}>{contentDetails.desc}</Text>
									</Row>
									<div className={style.seasonRow}>
										{contentDetails.seasons.map((a, i) => (
											<Link to={`/content/${curId}/${a.episodes[0].id}`}>
												<Button>Season {a.seasonNumber} </Button>
											</Link>
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
				<Footer />
			</>
		);
	else {
		return <Loading />;
	}
};

export default ContentPage;

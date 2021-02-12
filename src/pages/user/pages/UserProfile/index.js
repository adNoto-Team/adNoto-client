import { Layout, Row, Col, Card, Typography, Button } from "antd";

import { InstagramOutlined, TwitterOutlined } from "@ant-design/icons";

import CustomDivider from "../../../../shared/components/CustomDivider/index";
import CommentsList from "../../../content/pages/components/Comments/CommentsList";
import ProfileContentRow from "./components/ProfileContentRow/index";

import style from "./style.module.css";
import "./style.css";
import { useContext, useEffect } from "react";
import Context from "../../../../context/Context";

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

const currentUser = {
	username: "hasantezcan",
	fullname: "Hasan Tezcan",
	twitter: "https://twitter.com/hasantezcann",
	totalComments: 55,
	avatar:
		"https://avatars.githubusercontent.com/u/32804505?s=460&u=e04a6baec805cecc5ed8df4d387b77a93c164dd7&v=4",
	currentlyWatching: [
		{
			title: "The Office",
			imdb: "8.5",
			coverImg:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Floftcinema.org%2Ffiles%2F2017%2F08%2F740full-the-office-us-poster.jpg&f=1&nofb=1",
		},
		{
			title: "Seinfeld",
			imdb: "10",
			coverImg:
				"https://m.media-amazon.com/images/M/MV5BZjZjMzQ2ZmUtZWEyZC00NWJiLWFjM2UtMzhmYzZmZDcxMzllXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR3,0,182,268_AL_.jpg",
		},
		{
			title: "Friends",
			imdb: "9.5",
			coverImg:
				"https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg",
		},
	],
};

const {
	fullname,
	username,
	avatar,
	totalComments,
	currentlyWatching,
	twitter,
	instagram,
} = currentUser;

const totalCommentDesc = `Total Comments: ${totalComments}`;

const UserProfile = () => {
	const { profile, getUser } = useContext(Context);
	//Profile has all the data you need

	useEffect(() => {
		if (!profile.user) {
			getUser();
		}
	}, [profile]);
	console.log(profile);
	return (
		<>
			<Col lg={{ span: 16, offset: 4 }}>
				<div span={12} offset={6}>
					<img
						className={style.coverImg}
						src={
							profile.user
								? "https://api.adnoto.co/" + profile.user.avatar
								: avatar
						}
						alt="aaa"
					/>
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
									cover={
										<img
											alt="content-cover"
											src={
												profile.user
													? "https://api.adnoto.co/" + profile.user.avatar
													: avatar
											}
										/>
									}
								>
									<Meta
										title={
											profile.user
												? profile.user.name + " " + profile.user.surname
												: fullname
										}
										description={`Total Comments: ${profile.commentNum}`}
									/>
								</Card>
								<div className={style.socialMedia}>
									{twitter && (
										<Button className={style.watchTrailerButton} size={"large"}>
											<a href={twitter}>
												<TwitterOutlined /> Twitter
											</a>
										</Button>
									)}
									{instagram && (
										<Button className={style.watchTrailerButton} size={"large"}>
											<InstagramOutlined /> Instagram
										</Button>
									)}
								</div>
							</Col>
							{/* Desc Section */}
							<Col
								flex={3}
								className={style.descSection}
								style={{ paddingTop: 40 }}
							>
								<div className={style.title}>
									<Title>
										{profile.user.name + " "}
										{profile.user.surname}
									</Title>
									<Text className={style.creator}>
										@{profile.user.username}
									</Text>
								</div>
								<Row justify={"space-between"}>
									<Text className={style.desc}>{profile.user.desc}</Text>
								</Row>
								<CustomDivider title={"Popular Comments"} />
								<CommentsList />

								<ProfileContentRow
									data={profile.willwatch}
									title={"Currently Watching"}
									contents={currentlyWatching}
								/>
								<ProfileContentRow
									title={"Will Watch"}
									contents={currentlyWatching}
								/>
								<ProfileContentRow
									title={"Watched"}
									contents={currentlyWatching}
								/>
							</Col>
						</Row>
					</Content>
				</Layout>
			</Col>
		</>
	);
};

export default UserProfile;

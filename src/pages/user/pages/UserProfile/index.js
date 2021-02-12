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

const dummyUser = {
	username: "username",
	fullname: "Name Surname",
	twitter: "https://twitter.com/hasantezcann",
	totalComments: 0,
	desc:
		"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, quas quisquam sapiente maxime at in magnam accusantium officiis fugit ad cumque nemo vero fugiat soluta est nobis? Eaque, rem pariatur!",
	avatarImg: "https://supercharge.info/images/avatar-placeholder.png",
	backgroundImage:
		"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjessicajjohnston.com%2Fblog%2Fwp-content%2Fuploads%2F2014%2F04%2Fthe-office-netflix-tv-series.jpg&f=1&nofb=1",
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

const UserProfile = () => {
	const { profile, getUser } = useContext(Context);

	useEffect(() => {
		if (!profile.user) {
			getUser();
		}
	}, [profile]);

	const { avatar: avatarImg, name, surname, username, desc } = profile.user;

	const { commentNum } = profile;

	return (
		<>
			{/* Background Cover */}
			<Col lg={{ span: 16, offset: 4 }}>
				<div span={12} offset={6}>
					<img
						className={style.coverImg}
						src={
							avatarImg
								? "https://api.adnoto.co/" + avatarImg
								: dummyUser.backgroundImage
						}
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
										avatarImg ? (
											<img
												alt="content-cover"
												src={"https://api.adnoto.co/" + avatarImg}
											/>
										) : (
											<img alt="content-cover" src={dummyUser.avatarImg} />
										)
									}
								>
									<Meta
										title={
											name && surname
												? name + " " + surname
												: dummyUser.fullname
										}
										description={`Total Comments: ${
											commentNum ? commentNum : 0
										}`}
									/>
								</Card>
								{/* TODO add twiiter and instagram col to DB */}
								<div className={style.socialMedia}>
									{dummyUser.twitter && (
										<Button className={style.watchTrailerButton} size={"large"}>
											<a href={dummyUser.twitter}>
												<TwitterOutlined /> Twitter
											</a>
										</Button>
									)}
									{dummyUser.instagram && (
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
										{name && surname
											? name + " " + surname
											: dummyUser.fullname}
									</Title>
									<Text className={style.creator}>
										@{username ? username : dummyUser.username}
									</Text>
								</div>
								<Row justify={"space-between"}>
									<Text className={style.desc}>
										{desc ? desc : dummyUser.desc}
									</Text>
								</Row>
								{/* Comments */}
								<CustomDivider title={"Popular Comments"} />
								<CommentsList />

								<ProfileContentRow
									title={"Currently Watching"}
									contents={dummyUser.currentlyWatching}
								/>
								<ProfileContentRow
									title={"Will Watch"}
									contents={dummyUser.currentlyWatching}
								/>
								<ProfileContentRow
									title={"Watched"}
									contents={dummyUser.currentlyWatching}
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

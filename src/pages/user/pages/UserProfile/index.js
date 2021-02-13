import { Layout, Row, Col, Card, Typography, Button } from "antd";

import { InstagramOutlined, TwitterOutlined } from "@ant-design/icons";

import CustomDivider from "../../../../shared/components/CustomDivider/index";
import ProfileContentRow from "./components/ProfileContentRow/index";

import style from "./style.module.css";
import "./style.css";
import { useContext, useEffect } from "react";
import Context from "../../../../context/Context";
import PopulerComments from "./components/PopularComments";
import Loading from "../../../../shared/components/Loading/index";
import dummyUser from "../../../../DummyData/DummyUser";
import SettingsModal from "./components/SettingsModal";
import Footer from "../../../../shared/components/Footer/index";

const { Content } = Layout;
const { Meta } = Card;
const { Title, Text } = Typography;

const capitalize = (s) => {
	if (typeof s !== "string") return "";
	return s.charAt(0).toUpperCase() + s.slice(1);
};

const UserProfile = () => {
	const { profile, getUser } = useContext(Context);

	useEffect(() => {
		if (!profile.user) {
			getUser();
		}
	}, [profile]);

	if (profile && profile.user) {
		const { avatar: avatarImg, name, surname, username, desc } = profile.user;
		const {
			commentNum,
			commentArr,
			willWatchArr,
			watchingArr,
			watchedContentArr,
		} = profile;
		const fullname = `${capitalize(name)} ${capitalize(surname)}`;

		return (
			<>
				{/* Background Cover */}
				<Col lg={{ span: 16, offset: 4 }}>
					<div span={12} offset={6}>
						<img
							className={style.coverImg}
							src={
								avatarImg
									? "https://adnoto.karpuz.surf/" + avatarImg
									: dummyUser.backgroundImage
							}
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
											avatarImg ? (
												<img
													alt="content-cover"
													src={"https://adnoto.karpuz.surf/" + avatarImg}
												/>
											) : (
												<img alt="content-cover" src={dummyUser.avatarImg} />
											)
										}
									>
										<Meta
											title={name && surname ? fullname : dummyUser.fullname}
											description={`Total Comments: ${
												commentNum ? commentNum : 0
											}`}
										/>
									</Card>
									{/* TODO add twiiter and instagram col to DB */}
									<div className={style.socialMedia}>
										<SettingsModal />

										{dummyUser.twitter && (
											<Button
												className={style.watchTrailerButton}
												size={"large"}
											>
												<a href={dummyUser.twitter}>
													<TwitterOutlined /> Twitter
												</a>
											</Button>
										)}

										{dummyUser.instagram && (
											<Button
												className={style.watchTrailerButton}
												size={"large"}
											>
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
											{name && surname ? fullname : dummyUser.fullname}
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

									<PopulerComments
										commentsArray={commentArr}
										author={fullname}
										avatarImg={avatarImg}
									/>
									<ProfileContentRow
										title={"Currently Watching"}
										contents={watchingArr}
									/>
									<ProfileContentRow
										title={"Will Watch"}
										contents={willWatchArr}
									/>
									<ProfileContentRow
										title={"Watched"}
										contents={watchedContentArr}
									/>
								</Col>
							</Row>
						</Content>
					</Layout>
				</Col>
				<Footer />
			</>
		);
	}
	return (
		<>
			<Loading />
		</>
	);
};

export default UserProfile;

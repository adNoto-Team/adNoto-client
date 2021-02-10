import { Layout, Row, Col, Card, Typography, Button } from "antd";

import style from "./style.module.css";
import Comments from "./components/Comments";
import CardRow from "./components/CardRow";
import RandomContent from "./components/RandomContet";

const { Title, Text } = Typography;
const { Content } = Layout;
const { Meta } = Card;

const currentlyWatchingContents = [
	{
		title: "Breaking Bad",
		imdb: "9",
		coverImg:
			"https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR5,0,182,268_AL_.jpg",
	},
	{
		title: "The Office",
		imdb: "8.5",
		coverImg:
			"https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX182_CR0,0,182,268_AL_.jpg",
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
];
const movieContents = [
	{
		title: "Breaking Bad",
		imdb: "9",
		coverImg:
			"https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR5,0,182,268_AL_.jpg",
	},
	{
		title: "The Office",
		imdb: "8.5",
		coverImg:
			"https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX182_CR0,0,182,268_AL_.jpg",
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
];

const UserWelcome = () => {
	return (
		<>
			<Col lg={{ span: 12, offset: 6 }}>
				<Layout span={12} offset={6} className={style.container}>
					<Content>
						{/* Last comented content section */}
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
									style={{ float: "right" }}
								>
									Continue to Comment!
								</Button>
							</Col>
						</Row>
						{/* Card Covers Section */}
						<CardRow
							title={"Currently Watching"}
							contents={currentlyWatchingContents}
						/>
						<CardRow title={"Movie"} contents={movieContents} />
						{/* Random Content */}
						<RandomContent />
						<CardRow title={"Series"} contents={movieContents} />
					</Content>
				</Layout>
			</Col>
		</>
	);
};

export default UserWelcome;

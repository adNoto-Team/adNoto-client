import { Layout, Col } from "antd";

import ContentRow from './components/ContentRow/index';
import RandomContent from "./components/RandomContet";
import ContentBilbord from "./components/ContentBilbord";

const { Content } = Layout;

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
];
const lastComentedContent = {
	title: "The Office",
	episodeName: "Season 3 Episode 5",
	imdb: "8.5",
	coverImg:
		"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Floftcinema.org%2Ffiles%2F2017%2F08%2F740full-the-office-us-poster.jpg&f=1&nofb=1",
};
const trendContent = {
	title: "Disenchantment",
	episodeName: "Season 4 Episode 1",
	imdb: "7.2",
	coverImg:
		"https://m.media-amazon.com/images/M/MV5BMzlkYzk0YzItM2I0ZC00NmE5LTljMGYtNTY2ZTVhMzA5OWJjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
};

const UserWelcome = () => {
	return (
		<>
			<Col lg={{ span: 12, offset: 6 }}>
				<Layout span={12} offset={6} style={{ backgroundColor: "#EBF2F9" }}>
					<Content>
						{/* Last comented content section */}
						<ContentBilbord
							title={lastComentedContent.title}
							subTitle={lastComentedContent.episodeName}
							bilbordDesc={"Last comented content"}
							coverImg={lastComentedContent.coverImg}
						/>
						{/* Card Covers Section */}
						<ContentRow
							title={"Currently Watching"}
							contents={currentlyWatchingContents}
						/>

						<ContentRow title={"Movie"} contents={movieContents} />
						{/* Random Content */}
						<RandomContent />
						<ContentBilbord
							title={trendContent.title}
							subTitle={trendContent.episodeName}
							bilbordDesc={"Trend - 'New Season'"}
							coverImg={trendContent.coverImg}
							rotation={"right"}
						/>
						<ContentRow title={"Series"} contents={movieContents} />
					</Content>
				</Layout>
			</Col>
		</>
	);
};

export default UserWelcome;

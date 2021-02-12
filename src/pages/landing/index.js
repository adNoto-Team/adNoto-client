import { Layout, Button, Col, Typography } from "antd";

import Movies from "../../DummyData/movies";
import WithAdNoto from "./components/WithAdNoto";
import BottomBar from "../../shared/components/BottomBar";
import ContentRow from "./components/ContentRow";

import styles from "./style.module.css";

const { Content } = Layout;
const { Title, Text } = Typography;

function Landing() {
	return (
		<>
			<Col lg={{ span: 12, offset: 6 }}>
				<Layout span={12} offset={6} style={{ backgroundColor: "#f0f2f5" }}>
					<Content>
						<div className={styles.landingImage}>
							<div className={styles.landingInfo}>
								<Title level={2}>Make a comment about Movies and Series</Title>
								<Title level={2}>Create watchlist!</Title>
								<Title level={2}>Share with friends!</Title>

								<Button style={{ backgroundColor: "#f9c22e" }}>
									Create an account and start to comment!
								</Button>
								<br />
								<Button
									style={{
										backgroundColor: "transparent",
										color: "#678",
										border: "none",
									}}
								>
									<Text>Already registered? Login!</Text>
								</Button>
							</div>
						</div>

						<ContentRow contents={Movies.slice(0, 4)} />
						<WithAdNoto />

						<ContentRow
							contents={Movies.slice(0, 4)}
							title={"PICKED FOR YOU"}
						/>
						<ContentRow contents={Movies.slice(0, 4)} title={"JUST REVIEWED"} />
					</Content>
					<BottomBar />
				</Layout>
			</Col>
		</>
	);
}

export default Landing;

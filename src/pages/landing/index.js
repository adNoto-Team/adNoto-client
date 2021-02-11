import React from "react";
import styles from "./style.module.css";
import "antd/dist/antd.css";
import {
	Layout,
	Input,
	Menu,
	Button,
	Image,
	Row,
	Col,
	Divider,
	Typography,
} from "antd";
import Movies from "../../DummyData/movies";
import WithAdNoto from "./components/WithAdNoto";
import FooterContent from "./components/FooterContent";
import ImageRow from "./components/ImageRow"; //"
import Navbar from "../../shared/components/Navbar";
import BottomBar from "../../shared/components/BottomBar";
import ContentRow from "./components/ContentRow";
const { Content, Footer } = Layout;
const { Title } = Typography;
function Landing() {
	const onSearch = (value) => console.log(value);

	return (
		<>
			<Col lg={{ span: 12, offset: 6 }}>
				<Layout span={12} offset={6} style={{ backgroundColor: "#f0f2f5" }}>
					<Content>
						<Image
							src="https://wallpaperaccess.com/full/1343405.jpg"
							preview={false}
							className={styles.landingImage}
						/>

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

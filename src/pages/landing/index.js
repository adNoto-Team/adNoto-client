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
import Data from "../../DummyData/movies";
import WithAdNoto from "./components/WithAdNoto";
import FooterContent from "./components/FooterContent";
import CardItem from "./components/CardItem/CardItem";
import ImageRow from "./components/ImageRow";
import Navbar from "../../shared/components/Navbar";
 const {   Content, Footer } = Layout;
const { Title } = Typography;
function Landing() {
	const onSearch = (value) => console.log(value);

	return (
		<Col lg={{ span: 18, offset: 3 }}>
			<Layout className={styles.Layout}>
				<Navbar/>
				<Content>
					<Col lg={{ span: 22, offset: 1 }}>
						<Row style={{ paddingBottom: 30 }}>
							<Col>
								<Image src="https://i.imgur.com/8gG5CjZ.jpg" preview={false} />
								<Col>
									<div
										style={{
											color: "#f9c22e",
											position: "absolute",
											top: "50%",
											left: "50%",
											transform: "translate(-50%, -50%)",
											fontSize: "24px",
											fontWeight: "500",
											lineHeight: "1.3",
											textAlign: "center",
										}}
									>
										<p>Filmler ve Diziler Hakkında Yorum Yap.</p>

										<p>İzleme listeleri oluştur.</p>

										<p>Arkadaşlarınla paylaş.</p>
										<Button style={{ backgroundColor: "#f9c22e" }}>
											Hesap oluştur ve hemen yorum yapmaya başla!
										</Button>
										<br />
										<Button
											style={{
												backgroundColor: "transparent",
												color: "#678",
												border: "none",
											}}
										>
											Zaten üye misin? Giriş yap.
										</Button>
									</div>
								</Col>
								
							</Col>
						</Row>
					</Col>
					<Col span={22} offset={1}>
						<Row>
							{Data.slice(0, 6).map((movie, key) => (
								<CardItem
									key={key}
									title={movie.title}
									commentCount={movie.commentCount}
									cover={movie.cover}
								/>
							))}
						</Row>
					</Col>

					<WithAdNoto/>
					<ImageRow title = "PICK FOR YOU" data = {Data.slice(10, 22)} />

					<ImageRow title = "JUST REVIEWED" data = {Data.slice(12, 24)} />
				</Content>
				<Footer className={styles.Footer}>
					  <Col lg={{ span: 22, offset: 1 }} >
						<FooterContent />
					</Col>
				</Footer>
			</Layout>
		</Col>
	);
}

export default Landing;


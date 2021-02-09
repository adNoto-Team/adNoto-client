import React from "react";
import styles from "./style.module.css";
import "antd/dist/antd.css";
import { Layout, Input, Menu, Button, Image , Row, Col} from "antd";
import ItemCard from "./ItemCard";
 
 import WithAdNoto from "./WithAdNoto";
import FooterContent from "./Footer"
const { Search, TextArea } = Input;
const { Header, Content, Footer } = Layout;

function Landing() {
	const onSearch = (value) => console.log(value);
	const layoutStyle = {
		backgroundColor: "#ebf2f9",
	};
	return (
		<Layout style={layoutStyle}>
			<Header
				style={{
					position: "fixed",
					zIndex: 1,
					width: "75%",
					display: "flex",
					justifyContent: "space-between",
					height: "70px",
					backgroundColor: "transparent",
					border: "1px solid red",
				}}
			>
				<div>
					<Image
						src=""
						style={{ height: "70px", width: "150px" }}
						preview={false}
					/>
				</div>
				<div style={{ display: "flex" }}>
					<Menu mode="horizontal" className={styles.Menu}>
						<Menu.Item key="1">GİRİŞ YAP</Menu.Item>
						<Menu.Item key="2">HESAP OLUŞTUR</Menu.Item>
						<Menu.Item key="3">DİZİLER</Menu.Item>
						<Menu.Item key="4">FİLMLER</Menu.Item>
					</Menu>
					<Search
						className="search-header"
						placeholder="Sevdiğin dizi ve filmleri ara"
						allowClear
						enterButton
						onSearch={onSearch}
						style={{ width: "300px", margin: "auto", backgroundColor: "red" }}
					/>
				</div>
			</Header>
			<Content style={{ width: "100%" }}>
			<Image
							src="https://i.imgur.com/8gG5CjZ.jpg"

							preview={false}
							 
						/>
				{/* <div
					style={{
						margin: "0 auto",
						 
						position: "relative",
						// textAlign: "center", //center image
					}}
				>
					<img
						style={{ position: "relative" }}
						src="https://i.imgur.com/8gG5CjZ.jpg"
					/>
					<div
						style={{
							color: "#f9c22e",
							position: "absolute",
							top: "70%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							fontSize: "2.76923077rem",
							fontWeight: "500",
							lineHeight: "1.33333333"
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
								color: "#f9f9f9",
								border: "none",
							}}
						>
							Zaten üye misin? Giriş yap.
						</Button>
					</div>
				</div> */}

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						paddingTop: "60px",
					}}
				>
					<ItemCard
						width_h={150}
						title="The Movie (2020)"
						imdbScore={4.5}
						commentCount={4}
					/>
					<ItemCard
						width_h={150}
						title="The Movie (2020)"
						imdbScore={4.5}
						commentCount={2}
					/>
					<ItemCard
						width_h={150}
						title="The Movie (2020)"
						imdbScore={4.5}
						commentCount={4}
					/>
					<ItemCard
						width_h={150}
						title="The Movie (2020)"
						imdbScore={7.0}
						commentCount={3}
					/>
					<ItemCard
						width_h={150}
						title="The Movie (2020)"
						imdbScore={8.9}
						commentCount={5}
					/>
					<ItemCard
						width_h={150}
						title="The Movie (2020)"
						imdbScore={4.5}
						commentCount={4}
					/>
					<ItemCard
						width_h={150}
						title="The Movie (2020)"
						imdbScore={4.8}
						commentCount={8}
					/>
					<ItemCard
						width_h={150}
						title="The Movie (2020)"
						imdbScore={4.5}
						commentCount={4}
					/>
				</div>
				<WithAdNoto/>
				
				<div
				className={styles.lastCommentedChart}
				>
					<div>
						<p 
						>
							SON YORUMLANAN İÇERİKLER
						</p>
						<hr />
					</div>

					<div style={{ display: "flex" }}>
						<Image
							src={
								"https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675"
							}
							preview={false}
							style={{ width: 200, padding: "8px" }}
						/>
						<Image
							src={
								"https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675"
							}
							preview={false}
							style={{ width: 200, padding: "8px" }}
						/>
						<Image
							src={
								"https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675"
							}
							preview={false}
							style={{ width: 200, padding: "8px" }}
						/>
						<Image
							src={
								"https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675"
							}
							preview={false}
							style={{ width: 200, padding: "8px" }}
						/>
						<Image
							src={
								"https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675"
							}
							preview={false}
							style={{ width: 200, padding: "8px" }}
						/>
						<Image
							src={
								"https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675"
							}
							preview={false}
							style={{ width: 200, padding: "8px" }}
						/>
					</div>
				</div>

				<div className= { styles.forYouChart}
				>
					<div>
						<p>
							SİZİN İÇİN SEÇTİKLERİMİZ
						</p>
						<hr />
					</div>
					<div style={{ display:"flex"}} >
						<Image
							src={
								"https://i.pinimg.com/originals/8b/9e/8c/8b9e8c80fc4929ee384ffd234bc7acb7.jpg"
							}
							preview={false}
							style={{ width: 80, padding: "8px" }}
						/>
						<Image
							src={
								"https://i.pinimg.com/originals/2c/03/41/2c034115430890d1b388a324499459ac.jpg"
							}
							preview={false}
							style={{ width: 80, padding: "8px" }}
						/>
						<Image
							src={
								"https://ohmy.disney.com/wp-content/uploads/2014/01/12-cinderella.jpg"
							}
							preview={false}
							style={{ width: 80, padding: "8px" }}
						/>
						<Image
							src={
								"https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351179.jpg?c=2?imbypass=on"
							}
							preview={false}
							style={{ width: 80, padding: "8px" }}
						/>
						<Image
							src={
								"https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg"
							}
							preview={false}
							style={{ width: 80, padding: "8px" }}
						/>
						<Image
							src={
								"https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675"
							}
							preview={false}
							style={{ width: 80, padding: "8px" }}
						/>
						<Image
							src={
								"https://i.pinimg.com/originals/8b/9e/8c/8b9e8c80fc4929ee384ffd234bc7acb7.jpg"
							}
							preview={false}
							style={{ width: 80, padding: "8px" }}
						/>
						<Image
							src={
								"https://i.pinimg.com/originals/2c/03/41/2c034115430890d1b388a324499459ac.jpg"
							}
							preview={false}
							style={{ width: 80, padding: "8px" }}
						/>
						<Image
							src={
								"https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675"
							}
							preview={false}
							style={{ width: 80, padding: "8px" }}
						/>
						<Image
							src={
								"https://i.pinimg.com/originals/8b/9e/8c/8b9e8c80fc4929ee384ffd234bc7acb7.jpg"
							}
							preview={false}
							style={{ width: 80, padding: "8px" }}
						/>
						<Image
							src={
								"https://i.pinimg.com/originals/2c/03/41/2c034115430890d1b388a324499459ac.jpg"
							}
							preview={false}
							style={{ width: 80, padding: "8px" }}
						/>
						<Image
							src={
								"https://ohmy.disney.com/wp-content/uploads/2014/01/12-cinderella.jpg"
							}
							preview={false}
							style={{ width: 80, padding: "8px" }}
						/>
						<Image
							src={
								"https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351179.jpg?c=2?imbypass=on"
							}
							preview={false}
							style={{ width: 80, padding: "8px" }}
						/>
						<Image
							src={
								"https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg"
							}
							preview={false}
							style={{ width: 80, padding: "8px" }}
						/>
						<Image
							src={
								"https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675"
							}
							preview={false}
							style={{ width: 80, padding: "8px" }}
						/>
						<Image
							src={
								"https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675"
							}
							preview={false}
							style={{ width: 80, padding: "8px" }}
						/>
					</div>
				</div>
			</Content>
			<Footer className={styles.Footer}>
				<FooterContent/>
			</Footer>
		</Layout>
	);
}

export default Landing;

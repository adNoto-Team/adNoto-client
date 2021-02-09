import React, {memo} from 'react'
import { 
	CommentOutlined,
	SaveOutlined,
	SearchOutlined,
	UnorderedListOutlined,
	StarOutlined,
	CaretRightOutlined,
} from "@ant-design/icons";

function WithAdNoto() {
    return (
        <div
					style={{
						width: "fit-content",
						margin: "auto",
						color: "#f9f9f9",
						fontSize: "18px",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<br />
					<br />
					<div>
						<p
							style={{
								fontSize: "30px",
								marginBottom: "0px",
								padding: "10px",
								color: "#f9c22e",
								fontWeight: "500"
							}}
						>
							adNoto ile...
						</p>
						<hr style={{ height: "2px", backgroundColor: "#8e8e8e" }} />
					</div>
					<div
						style={{
							display: "flex",
							padding: "20px",
							fontSize: "20px",
							justifyContent: "space-between",
						}}
					>
						<div
							style={{
								display: "flex",
								padding: "20px 50px 20px 0",
								width: "28%",
								backgroundColor: "#8e8e8e",
							}}
						>
							<CommentOutlined
								style={{ fontSize: "32px", padding: " 0 10px" }}
							/>
							<p style={{ paddingLeft: "20px" }}>
								İzlediklerin hakkında görüş belirt.
							</p>
						</div>
						<div
							style={{
								display: "flex",
								padding: "20px 50px 20px 0",
								width: "28%",
								backgroundColor: "#8e8e8e",
							}}
						>
							<SaveOutlined style={{ fontSize: "32px", padding: "0 10px" }} />
							<p style={{ paddingLeft: "20px" }}>
								Sevdiğin filmleri ver dizileri kaydet.
							</p>
						</div>
						<div
							style={{
								display: "flex",
								padding: "20px 50px 20px 0",

								width: "28%",
								backgroundColor: "#8e8e8e",
							}}
						>
							<SearchOutlined style={{ fontSize: "32px", padding: "0 10px" }} />
							<p style={{ paddingLeft: "20px" }}>
								Sana önerdiğimiz içeriklere göz at.
							</p>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							padding: "20px",
							fontSize: "20px",
							justifyContent: "space-between",
						}}
					>
						<div
							style={{
								display: "flex",
								padding: "20px 50px 20px 0",
								width: "28%",
								backgroundColor: "#8e8e8e",
							}}
						>
							<UnorderedListOutlined
								style={{ fontSize: "32px", padding: "0 10px" }}
							/>
							<p style={{ paddingLeft: "20px" }}>İzleme listeleri oluştur.</p>
						</div>
						<div
							style={{
								display: "flex",
								padding: "20px 50px 20px 0",
								width: "28%",
								backgroundColor: "#8e8e8e",
							}}
						>
							<StarOutlined style={{ fontSize: "32px", padding: "0 10px" }} />
							<p style={{ paddingLeft: "20px" }}>İçeriklere puan ver. </p>
						</div>
						<div
							style={{
								display: "flex",
								padding: "20px 50px 20px 0",
								width: "28%",
								backgroundColor: "#8e8e8e",
							}}
						>
							<CaretRightOutlined
								style={{ fontSize: "32px", padding: "0 10px" }}
							/>
							<p style={{ paddingLeft: "20px" }}>Haydi başlayalım.</p>
						</div>
					</div>
				</div>
    )
}

export default memo(WithAdNoto)

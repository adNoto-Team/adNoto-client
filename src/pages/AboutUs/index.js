import { useContext } from "react";
import style from "./style.module.css";
import Context from "../../context/Context";

const AboutUs = () => {
	// const { getContentDetails, contentDetails, user } = useContext(Context);
	return (
		<div className={style.developers}>
			<h1>Developer Team</h1>
			<li>Gökberk Demir</li>
			<li>Hasan Tezcan</li>
			<li>Hatice Demir</li>
			<li>Semih Yönet</li>
			<br />
			{/* <button
				onClick={() => {
					getContentDetails(8);
				}}
			>
				contentDetails
			</button> */}
			{/* <img src={"https://api.adnoto.co/" + contentDetails.avatar} alt={"pic"} />
			details{JSON.stringify(contentDetails)}
			<br />
			User:{JSON.stringify(user.username)} */}
		</div>
	);
};

export default AboutUs;

import { Spin } from "antd";

import "./style.css";

const Loading = () => {
	return (
		<>
			<Spin className="loading" tip="Loading..." />
		</>
	);
};

export default Loading;

import { Divider, Typography } from "antd";

import "./style.css";

const { Title } = Typography;

const CustomDivider = ({ level = 3, title }) => {
	return (
		<>
			<Divider orientation="left" className="customDivider">
				<Title level={level}>{title}</Title>
			</Divider>
		</>
	);
};

export default CustomDivider;

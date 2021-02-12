import { Layout, Menu } from "antd";

import "./style.css";

const { Sider } = Layout;
const { SubMenu } = Menu;
const EpisodeSider = () => {
	return (
		<div className="episodeSiderWrapper">
			<Sider
				className="episodeSider"
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={(broken) => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
			>
				<div className="logo" />
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={["1"]}
					defaultOpenKeys={["sub1"]}
					style={{ height: "100%", borderRight: 0 }}
				>
					<SubMenu key="Season 1" title="Season 1">
						<Menu.Item key="1">1- Pilot</Menu.Item>
						<Menu.Item key="2">2- Diversity Day</Menu.Item>
						<Menu.Item key="3">3- Health Care</Menu.Item>
						<Menu.Item key="4">4- The Alliance</Menu.Item>
						<Menu.Item key="5">5- Basketball</Menu.Item>
						<Menu.Item key="6">6- Hot Girl</Menu.Item>
					</SubMenu>
					<SubMenu key="Season 2" title="Season 2">
						<Menu.Item key="5">option5</Menu.Item>
						<Menu.Item key="6">option6</Menu.Item>
						<Menu.Item key="7">option7</Menu.Item>
						<Menu.Item key="8">option8</Menu.Item>
					</SubMenu>
					<SubMenu key="Season 3" title="Season 3">
						<Menu.Item key="9">option9</Menu.Item>
						<Menu.Item key="10">option10</Menu.Item>
						<Menu.Item key="11">option11</Menu.Item>
						<Menu.Item key="12">option12</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
		</div>
	);
};

export default EpisodeSider;

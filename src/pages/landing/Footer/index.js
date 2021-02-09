import React, { memo } from "react";
import {
	GithubOutlined,
	LinkedinOutlined,
	TwitterOutlined,
} from "@ant-design/icons";
import {List } from "antd";
function FooterContent() {
	return (
		<>
		<List>
			<List.Item>
			<GithubOutlined />
			</List.Item>
			<List.Item>
			<TwitterOutlined />
			</List.Item>
			<List.Item>
			<LinkedinOutlined />
			</List.Item>
		</List>
		<List>
			<List.Item>
			Hakkımızda
			</List.Item>
			<List.Item>
			Kullanım Koşulları
			</List.Item>
			<List.Item>
			Gizlilik
			</List.Item>
			<List.Item>
			Bizimle İletişime Geçin
			</List.Item>
			
		</List>
			<div>
				<p>Ant Design ©2021 Created by AdNoto</p>
			</div>
		</>
	);
}

export default memo(FooterContent);

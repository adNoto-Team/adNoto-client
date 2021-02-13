import { useState } from "react";

import { Modal, Button } from "antd";
import { SettingFilled } from "@ant-design/icons";
import UploadAvatar from "./UploadAvatar";

import style from "./style.module.css";

const SettingsModal = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<>
			<Button
				className={style.settingsButton}
				size={"large"}
				onClick={showModal}
			>
				<SettingFilled /> Settings
			</Button>
			<Modal
				title="Basic Modal"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<UploadAvatar />
				<p>Some contents...</p>
			</Modal>
		</>
	);
};

export default SettingsModal;

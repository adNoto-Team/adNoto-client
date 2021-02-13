// import { useState, useContext } from "react";
// import { Upload } from "antd";
// import ImgCrop from "antd-img-crop";
// import Context from "../../../../../../context/Context";

// const UploadAvatar = () => {
// const { setAvatar } = useContext(Context);

// 	const [fileList, setFileList] = useState([
// 		{
// 			uid: "-1",
// 			name: "image.png",
// 			status: "done",
// 			url:
// 				"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
// 		},
// 	]);

// 	const onChange = ({ fileList: newFileList }) => {
// 		setFileList(newFileList);
// 		// const file = Array.prototype.slice.call(a.target.files);
//     // setAvatar(fileList[0]);
//     console.log(fileList);
// 	};

// 	const onPreview = async (file) => {
// 		let src = file.url;
// 		if (!src) {
// 			src = await new Promise((resolve) => {
// 				const reader = new FileReader();
// 				reader.readAsDataURL(file.originFileObj);
// 				reader.onload = () => resolve(reader.result);
// 			});
// 		}
// 		const image = new Image();
// 		image.src = src;
// 		const imgWindow = window.open(src);
// 		imgWindow.document.write(image.outerHTML);
// 	};

// 	return (
// 		<ImgCrop rotate>
// 			<Upload
// 				action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
// 				listType="picture-card"
// 				fileList={fileList}
// 				onChange={onChange}
// 				onPreview={onPreview}
// 				rotate={0}
// 			>
// 				{fileList.length < 2 && "+ Upload"}
// 			</Upload>
// 		</ImgCrop>
// 	);
// };

// export default UploadAvatar;

// TODO NOT WORKING!

import { useContext } from "react";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Context from "../../../../../../context/Context";

const UploadAvatar = () => {
	const { setAvatar } = useContext(Context);

	const props = {
		name: "file",
		action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
		headers: {
			authorization: "authorization-text",
		},
		onChange(info) {
			if (info.file.status !== "uploading") {
				console.log(info.file, info.fileList);
			}
			if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
        console.log("LLALALALALLALA", info);
				setAvatar(info.fileList);
			} else if (info.file.status === "error") {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
	};
	return (
		<div>
			<Upload {...props}>
				<Button icon={<UploadOutlined />}>Click to Upload</Button>
			</Upload>
		</div>
	);
};

export default UploadAvatar;

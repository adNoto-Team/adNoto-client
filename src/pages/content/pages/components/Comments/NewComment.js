import { useState } from "react";

import { Comment, Avatar, Form, Button, List, Input, Checkbox } from "antd";
import moment from "moment";

import "./newComment.css";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
	<List
		dataSource={comments}
		header={`${comments.length} ${
			comments.length > 1 ? "comments" : "comment"
		}`}
		itemLayout="horizontal"
		renderItem={(props) => <Comment {...props} />}
	/>
);

const Editor = ({ onChange, onSubmit, submitting, value, onCheck }) => (
	<>
		<Form.Item>
			<TextArea rows={4} onChange={onChange} value={value} />
		</Form.Item>
		<Form.Item>
			<Button
				htmlType="submit"
				loading={submitting}
				onClick={onSubmit}
				type="primary"
			>
				Add Comment
			</Button>
			<Checkbox className="isSpoilerCheckBox" onChange={onCheck}>
				Contains spoiler
			</Checkbox>
		</Form.Item>
	</>
);

const NewComment = ({ author, avatar, cb }) => {
	const [comments, setComments] = useState([]);
	const [submitting, setSubmitting] = useState(false);
	const [value, setValue] = useState("");

	const onCheck = (e) => {
		console.log(`checked = ${e.target.checked}`);
	};

	const handleSubmit = () => {
		if (!value) {
			return;
		}

		setSubmitting(true);

		setTimeout(() => {
			setSubmitting(false);
			setValue("");
			cb(value, false);
		}, 1000);
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<div className="newCommentWrapper">
			{comments.length > 0 && <CommentList comments={comments} />}
			<Comment
				avatar={avatar}
				content={
					<Editor
						onChange={handleChange}
						onSubmit={handleSubmit}
						submitting={submitting}
						onCheck={onCheck}
						value={value}
					/>
				}
			/>
		</div>
	);
};

export default NewComment;

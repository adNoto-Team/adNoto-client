import React, { createElement, useState } from "react";
import { Comment, Tooltip, Avatar, Alert } from "antd";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import moment from "moment";

import "./commentItem.css";

const CommentItem = ({
	author,
	avatar,
	datetime,
	content,
	likeCount,
	isSpoiler,
}) => {
	const [likes, setLikes] = useState(likeCount);
	const [action, setAction] = useState(null);

	const like = () => {
		setLikes(1);
		setAction("liked");
	};

	const actions = [
		<Tooltip key="comment-basic-like" title="Like">
			<span onClick={like}>
				{createElement(action === "liked" ? LikeFilled : LikeOutlined)}
				<span className="comment-action">{likeCount}</span>
			</span>
		</Tooltip>,
		// <span key="comment-basic-reply-to">Reply to</span>,
	];

	return (
		<div style={{ position: "relative" }}>
			<Comment
				actions={actions}
				author={author}
				avatar={avatar}
				content={<p>{content}</p>}
				datetime={
					<Tooltip
						title={moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}
					>
						<span>{moment().subtract(1, "days").fromNow()}</span>
					</Tooltip>
				}
			/>

			{isSpoiler && (
				<Alert
					className="spoilerAlert"
					message="Error"
					description="This is an error message about copywriting."
					type="error"
					showIcon
					closable
				/>
			)}
		</div>
	);
};

export default CommentItem;

import React, { createElement, useState } from "react";
import { Comment, Tooltip, Avatar, Alert } from "antd";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import moment from "moment";

import "./commentItem.css";

const CommentItem = ({ author, avatar, from, content, likeCount }) => {
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
				avatar={"https://adnoto.karpuz.surf/" + avatar}
				content={<p>{content}</p>}
				datetime={
					<Tooltip
						title={moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}
					>
						<span>{from.name}</span>
					</Tooltip>
				}
			/>
		</div>
	);
};

export default CommentItem;

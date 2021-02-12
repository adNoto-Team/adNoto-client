import React, { createElement, useState, useContext } from "react";
import { Comment, Tooltip, Avatar, Alert } from "antd";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import moment from "moment";
import Context from "../../../../../context/Context";
import "./commentItem.css";

const CommentItem = ({
	author,
	avatar,
	datetime,
	content,
	likeCount,
	isSpoiler,
	id,
}) => {
	const [likes, setLikes] = useState(likeCount);
	const [action, setAction] = useState(null);
	const { likeComment } = useContext(Context);
	const like = async () => {
		const res = await likeComment(id);
		setLikes((val) => {
			if (res === "You liked it!") return val + 1;
			else {
				return val - 1;
			}
		});
		setAction("liked");
	};

	const actions = [
		<Tooltip key="comment-basic-like" title="Like">
			<span onClick={like}>
				{createElement(action === "liked" ? LikeFilled : LikeOutlined)}
				<span className="comment-action">{likes}</span>
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
					message="Spoiler Alert!"
					description="If you read this review, you might miss the whole secret!"
					type="error"
					showIcon
					closable
				/>
			)}
		</div>
	);
};

export default CommentItem;

import { Comment, Tooltip, List } from "antd";
import moment from "moment";
import "./style.css";

const data = [
	{
		author: "Hasan Tezcan",
		avatar:
			"https://avatars.githubusercontent.com/u/32804505?s=460&u=e04a6baec805cecc5ed8df4d387b77a93c164dd7&v=4",
		content: (
			<p>
				We supply a series of design principles, practical patterns and high
				quality design resources (Sketch and Axure), to help people create their
				product prototypes beautifully and efficiently.
			</p>
		),
		datetime: (
			<Tooltip
				title={moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}
			>
				<span>{moment().subtract(1, "days").fromNow()}</span>
			</Tooltip>
		),
	},
	{
		author: "Gökberk Deprem",
		avatar:
			"https://avatars.githubusercontent.com/u/75221412?s=460&u=5c4f2312d14c16368e4a6c6c901551ed5e0256a8&v=4",
		content: (
			<p>
				We supply a series of design principles, practical patterns and high
				quality design resources (Sketch and Axure), to help people create their
				product prototypes beautifully and efficiently.
			</p>
		),
		datetime: (
			<Tooltip
				title={moment().subtract(2, "days").format("YYYY-MM-DD HH:mm:ss")}
			>
				<span>{moment().subtract(2, "days").fromNow()}</span>
			</Tooltip>
		),
	},
];

const Comments = () => {
	return (
		<div className="ant-spin-container">
			<List
				// header={`${data.length} replies`}
				itemLayout="horizontal"
				dataSource={data}
				renderItem={(item) => (
					<li>
						<Comment
							// actions={item.actions}
							author={item.author}
							avatar={item.avatar}
							content={item.content}
							datetime={item.datetime}
						/>
					</li>
				)}
			/>
		</div>
	);
};

export default Comments;

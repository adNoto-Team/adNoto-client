import CommentItem from "./CommentItem";
import NewComment from "./NewComment";

import { List } from "antd";

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
		datetime: "2021-02-12 01:44",
		likeCount: 5,
		isSpoiler: true,
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
		datetime: "2021-02-12 01:44",
		likeCount: 1,
		isSpoiler: false,
	},
	{
		author: "Semih Yönet",
		avatar:
			"https://avatars.githubusercontent.com/u/56456840?s=460&u=5b86ec8abd45c86ba0166f12be020ab249a96520&v=4",
		content: (
			<p>
				We supply a series of design principles, practical patterns and high
				quality design resources (Sketch and Axure), to help people create their
				product prototypes beautifully and efficiently.
			</p>
		),
		datetime: "2021-02-12 01:44",
		likeCount: 1,
		isSpoiler: false,
	},
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
		datetime: "2021-02-12 01:44",
		likeCount: 5,
		isSpoiler: true,
	},
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
		datetime: "2021-02-12 01:44",
		likeCount: 5,
		isSpoiler: true,
	},
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
		datetime: "2021-02-12 01:44",
		likeCount: 5,
		isSpoiler: true,
	},
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
		datetime: "2021-02-12 01:44",
		likeCount: 5,
		isSpoiler: true,
	},
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
		datetime: "2021-02-12 01:44",
		likeCount: 5,
		isSpoiler: true,
	},
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
		datetime: "2021-02-12 01:44",
		likeCount: 5,
		isSpoiler: true,
	},
];

const commentItem = () => {
	return (
		<>
			<List
				// header={`${data.length} replies`}
				itemLayout="horizontal"
				dataSource={data}
				renderItem={(item) => (
					<li>
						<CommentItem
							author={item.author}
							avatar={item.avatar}
							datetime={item.datetime}
							content={item.content}
							likeCount={item.likeCount}
							isSpoiler={item.isSpoiler}
						/>
					</li>
				)}
			/>

			<NewComment />
		</>
	);
};

export default commentItem;

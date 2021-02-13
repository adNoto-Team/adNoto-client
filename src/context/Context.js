import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import db from "../api/server";

const MovieContext = createContext(null);

export const Provider = ({ children }) => {
	const [movieData, setMovieData] = useState([]);
	const [dbMessage, setDbMessage] = useState("");
	const [token, setToken] = useState("");
	const [isToken, setIsToken] = useState(false);
	const [user, setUser] = useState({});
	const [profile, setProfile] = useState({});
	const [feed, setFeed] = useState([]);
	const [contentDetails, setContentDetails] = useState({});
	const [randomContent, setRandomContent] = useState({});
	const [comments, setComments] = useState([]);

	const website = "https://api.adnoto.co/";

	useEffect(() => {
		setMovieData([]);
	}, []);
	useEffect(() => {
		if (token !== "" && user.length === 0) {
			getUser();
		}
	}, [user]);

	const signup = async (userData) => {
		const { data } = await db.post("/signup", userData);

		if (!data.token) {
			setDbMessage(data.message);
		}
		if (data.token) {
			setDbMessage("");
			localStorage.setItem("token", data.token);
			setToken(data.token);
		}
	};

	const login = async (userData) => {
		const { data } = await db.post("/login", userData);

		if (!data.token) {
			setDbMessage(data.message);
			console.log(data.message);
		}
		if (data.token) {
			setDbMessage("");
			localStorage.setItem("token", data.token);
			setToken(data.token);
		}
	};

	const getUser = async () => {
		if (!token) {
			const myToken = localStorage.getItem("token");
			setToken(myToken);
		}

		const { data } = await db.get("/profile", {
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
			},
		});
		setProfile(data);
		setUser(data.user);
		console.log("CONTEX DATA", data);
	};

	const getRandomContent = async () => {
		const { data } = await db.get("/content/random", {
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
			},
		});
		setRandomContent(data);
	};

	const getFeed = async () => {
		const { data } = await db.get("/feed", {
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
			},
		});
		setFeed(data);
	};

	const getContentDetails = async (id) => {
		const { data } = await db.get(`/content/${id}`, {
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
			},
		});
		setContentDetails(data);
	};

	const getCommentsofEpisode = async (id) => {
		const { data } = await db.get(`/comment/episode/${id}`, {
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
			},
		});
		setComments(data);
	};

	const getCommentsofContent = async (id) => {
		const { data } = await db.get(`/comment/content/${id}`, {
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
			},
		});
		setComments(data);
	};

	const watchLaterContent = async (id) => {
		console.log("WILL WATCHED", id);
		const { data } = await db.get(`/content/watchlater/${id}`, {
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
			},
		});
		return data;
	};
	const watchedContent = async (id) => {
		console.log("WATCHED", id);
		const { data } = await db.get(`/content/watch/${id}`, {
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
			},
		});
		return data;
	};

	const watchedEpisode = async (id) => {
		const { data } = await db.get(`/episode/watch/${id}`, {
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
			},
		});
		return data;
	};

	const likeComment = async (id) => {
		const { data } = await db.get(`/comment/like/${id}`, {
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
			},
		});
		return data;
	};

	const sendCommentofContent = async (id, text, isSpoiler) => {
		const { data } = await db.post(
			`/comment/content/${id}`,
			{ text, isSpoiler },
			{
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
			}
		);
		setContentDetails((a) => {
			a.commentsArr.push({
				comment: {
					...data,

					liked: 0,
				},
				user: {
					username: user.username,
					avatar: user.avatar,
				},
			});
			return a;
		});
		setComments({
			...comments,
			result: [
				{
					comment: data,
					liked: 0,
					user: {
						username: user.username,
						avatar: user.avatar,
					},
				},
			],
		});
	};

	// TODO NOT WORKING!!!
	const setAvatar = async (file) => {
		const formData = new FormData();
		formData.append("avatarPic", file, file.name);
		const contents = await db.post(`/user/avatar`, formData, {
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
			},
		});
		console.log(contents);
	};

	useEffect(() => {
		if (localStorage.getItem("token")) {
			setIsToken(true);
			getUser();
		}
	}, [token]);

	const values = {
		website,
		signup,
		login,
		dbMessage,
		setDbMessage,
		token,
		movieData,
		isToken,
		setIsToken,
		getUser,
		user,
		getRandomContent,
		randomContent,
		getFeed,
		feed,
		contentDetails,
		getContentDetails,
		profile,
		getCommentsofContent,
		getCommentsofEpisode,
		comments,
		sendCommentofContent,
		likeComment,
		setAvatar,
		watchLaterContent,
		watchedContent,
		watchedEpisode,
	};

	return (
		<MovieContext.Provider value={values}>{children}</MovieContext.Provider>
	);
};

export default MovieContext;

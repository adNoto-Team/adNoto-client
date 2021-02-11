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
	const [feed, setFeed] = useState([]);
	const [contentDetails, setContentDetails] = useState({});

	const [randomContent, setRandomContent] = useState({});

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
		setUser(data.user);
		console.log(data);
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

	useEffect(() => {
		if (localStorage.getItem("token")) {
			setIsToken(true);
			getUser();
		}
	}, [token]);

	const values = {
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
	};

	return (
		<MovieContext.Provider value={values}>{children}</MovieContext.Provider>
	);
};

export default MovieContext;

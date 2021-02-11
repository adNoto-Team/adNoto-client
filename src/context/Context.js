import React, { createContext, useState, useEffect } from "react";
import db from "../api/server";

const MovieContext = createContext(null);

export const Provider = ({ children }) => {
	const [movieData, setMovieData] = useState([]);
	const [dbMessage, setDbMessage] = useState("");
	const [token, setToken] = useState("");
	const [isToken, setIsToken] = useState(false);

	useEffect(() => {
		setMovieData([]);
	}, []);

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

	useEffect(() => {
		if (localStorage.getItem("token")) setIsToken(true);
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
	};

	return (
		<MovieContext.Provider value={values}>{children}</MovieContext.Provider>
	);
};

export default MovieContext;

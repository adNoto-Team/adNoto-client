import React, { createContext, useState, useEffect } from "react";
import db from "../api/server";

const MovieContext = createContext(null);

export const Provider = ({ children }) => {
	const [movieData, setMovieData] = useState([]);
	const [dbMessage, setDbMessage] = useState("");
	const [token, setToken] = useState("");

	useEffect(() => {
		setMovieData([]);
	}, []);

	const signup = async (userData) => {
		const { data } = await db.post("/signup", userData);

		if (!data.token) {
			setDbMessage(data.meessage);
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
		}
		if (data.token) {
			setDbMessage("");
			localStorage.setItem("token", data.token);
			setToken(data.token);
		}
	};

	const values = {
		signup,
		login,
		dbMessage,
		token,
		movieData,
	};

	return (
		<MovieContext.Provider value={values}>{children}</MovieContext.Provider>
	);
};

export default MovieContext;

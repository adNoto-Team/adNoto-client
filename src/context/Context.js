import React, { createContext, useState, useEffect } from "react";
import db from "../api/server";

const MovieContext = createContext(null);

export const Provider = ({ children }) => {
	const [movieData, setMovieData] = useState([]);
	const [message, setMessage] = useState("");
	const [token, setToken] = useState("");

	useEffect(() => {
		setMovieData([]);
	}, []);

	const signup = async (userData) => {
		const { data } = await db.post("/signup", userData);

		if (!data.token) {
			setMessage(data.message);
		}
		if (data.token) {
			setMessage("");
			localStorage.setItem("token", data.token);
			setToken(data.token);
		}
	};
	const login = async (userData) => {
		const { data } = await db.post("/login", userData);

		if (!data.token) {
			setMessage(data.message);
		}
		if (data.token) {
			setMessage("");
			localStorage.setItem("token", data.token);
			setToken(data.token);
		}
	};

	const values = {
		signup,
		login,
		message,
		token,
		movieData,
	};

	return (
		<MovieContext.Provider value={values}>{children}</MovieContext.Provider>
	);
};

export default MovieContext;

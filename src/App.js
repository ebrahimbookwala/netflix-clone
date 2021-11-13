import React from "react";
import "./App.css";

import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import MovieMainBody from "./components/movie/MovieMainBody";
import TvMainBody from "./components/tv/TvMainBody";
import MyListMainBody from "./components/list/MyListMainBody";

export const API_KEY = "1908ad6d31ade6e491f7bfadf4e64934";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<MovieMainBody />}></Route>
				<Route path="/tv" element={<TvMainBody />}></Route>
				<Route path="/my-list" element={<MyListMainBody />}></Route>
			</Routes>
		</>
	);
}

export default App;

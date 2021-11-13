import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../movie/MovieList";
import Spinner from "../Spinner";
import Modal from "../movie/Modal";
import { fetchGenres } from "../../features/tvData/TvGenreSlice";

function TvMainBody() {
	const [tvClicked, setTvClicked] = useState(false);
	const [tv, setTv] = useState({});

	const dispatch = useDispatch();
	const genreTvData = useSelector((state) => state.tvGenres);

	useEffect(() => {
		dispatch(fetchGenres());
	}, [dispatch]);

	function turnModalOn(tvClicked) {
		console.log("Hello");
		setTvClicked(true);
		setTv(tvClicked);
	}

	function turnModalOff() {
		setTvClicked(false);
	}

	console.log(genreTvData.genres);

	return genreTvData.status === "loading" ? (
		<Spinner />
	) : (
		<div>
			{genreTvData.genres.map((genre) => (
				<MovieList
					genre={genre}
					key={genre.id}
					turnModalOn={turnModalOn}
					isMovie={false}
				/>
			))}
			{tvClicked && (
				<Modal movie={tv} turnModalOff={turnModalOff} isMovie={false} />
			)}
		</div>
	);
}

export default TvMainBody;

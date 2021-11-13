import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import Spinner from "../Spinner";
import Modal from "./Modal";
import { fetchGenres } from "../../features/moviesData/MovieGenreSlice";

function MovieMainBody() {
	const [movieClicked, setMovieClicked] = useState(false);
	const [movie, setMovie] = useState({});

	const dispatch = useDispatch();
	const genreData = useSelector((state) => state.genres);

	useEffect(() => {
		dispatch(fetchGenres());
	}, [dispatch]);

	function turnModalOn(movieClicked) {
		setMovieClicked(true);
		setMovie(movieClicked);
	}

	function turnModalOff() {
		setMovieClicked(false);
	}

	return genreData.status === "loading" ? (
		<Spinner />
	) : (
		<div>
			{genreData.genres.map((genre) => (
				<MovieList
					genre={genre}
					key={genre.id}
					turnModalOn={turnModalOn}
					isMovie={true}
				/>
			))}
			{movieClicked && (
				<Modal movie={movie} turnModalOff={turnModalOff} isMovie={true} />
			)}
		</div>
	);
}

export default MovieMainBody;

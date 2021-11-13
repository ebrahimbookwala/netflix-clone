import React, { useEffect, useState, useCallback } from "react";
import MovieDisplayImage from "./MovieDisplayImage";
import MovieContainer from "../containers/MovieContainer";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { API_KEY } from "../../App";
import Spinner from "../Spinner";

function MovieList({ genre, turnModalOn, isMovie }) {
	const [moveSlideShow, setMoveSlideShow] = useState({
		showRight: true,
		showLeft: false,
		moveToEnd: 0,
	});

	const [loading, setLoading] = useState(true);
	const [movieList, setMovieList] = useState([]);

	const fetchMovies = useCallback(async () => {
		try {
			setLoading(true);
			const data = await fetch(
				`https://api.themoviedb.org/3/discover/${
					isMovie ? "movie" : "tv"
				}?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=${
					genre.id
				}&with_watch_monetization_types=flatrate`
			);

			const response = await data.json();

			setMovieList(response.results);
			setLoading(false);
		} catch (e) {
			console.log("Error" + e.message);
		}
	}, [genre.id, isMovie]);

	useEffect(() => {
		fetchMovies();
	}, [fetchMovies]);

	const moveImagesToEnd = () => {
		setMoveSlideShow((prev) => ({
			...prev,
			showLeft: true,
			moveToEnd: prev.moveToEnd - 500,
		}));

		setMoveSlideShow((prev) => ({
			...prev,
			showRight:
				prev.moveToEnd <= -(200 * (movieList.length - 8)) ? false : true,
		}));
	};

	const moveImagesToStart = () => {
		setMoveSlideShow((prev) => ({
			...prev,
			showRight: true,
			moveToEnd: prev.moveToEnd + 500,
		}));

		setMoveSlideShow((prev) => ({
			...prev,
			showLeft: prev.moveToEnd === 0 ? false : true,
		}));
	};

	const styles = {
		transform: `translateX(${moveSlideShow.moveToEnd}px)`,
	};

	return loading ? (
		<Spinner classname="small" />
	) : (
		<div className="movie-genre-container">
			<h3 className="movie-genre-header">{genre.name}</h3>
			<MovieContainer style={styles}>
				{movieList.map((movie) => (
					<MovieDisplayImage
						movie={movie}
						key={movie.id}
						turnModalOn={turnModalOn}
					/>
				))}
			</MovieContainer>
			{moveSlideShow.showLeft && (
				<ArrowBackIosNewOutlinedIcon
					className="arrow-left"
					onClick={moveImagesToStart}
				/>
			)}
			{moveSlideShow.showRight && (
				<ArrowForwardIosOutlinedIcon
					className="arrow-right"
					onClick={moveImagesToEnd}
				/>
			)}
		</div>
	);
}

export default MovieList;

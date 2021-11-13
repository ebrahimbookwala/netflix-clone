import React from "react";
import cn from "classnames";

function MovieDisplayImage({ movie, turnModalOn }) {
	const showMovieDetails = (e) => {
		turnModalOn(movie);
	};

	return (
		<div className={cn("movie-display-container")} onClick={showMovieDetails}>
			<img
				src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`}
				alt={movie.title || movie.name}
			/>
			<h3 className="movie-title">{movie.title || movie.name}</h3>
		</div>
	);
}

export default MovieDisplayImage;

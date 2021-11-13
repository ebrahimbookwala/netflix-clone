import { useRef } from "react";
import MovieGenre from "../movie/MovieGenre";
import ButtonContainer from "../movie/ButtonContainer";
import MovieHeaders from "../movie/MovieHeaders";

function ListMovieDisplay({ genreNames, movie, hideDescription }) {
	const ref = useRef(null);

	const closeDescription = (e) => {
		if (e.target === ref.current) {
			hideDescription();
		}
	};

	return (
		<div
			className="movie-description-modal"
			ref={ref}
			onClick={closeDescription}
		>
			<div className="modal-container">
				<img
					src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
					alt={movie.title || movie.name}
				/>
				<ButtonContainer movie={movie} />
				<h3 className="modal-movie-title">{movie.title || movie.name}</h3>
				<p className="movie-description">{movie.overview}</p>

				<MovieHeaders
					release_date={movie.release_date || movie.first_air_date}
					popularity={(movie.popularity / 1000).toFixed(2)}
					original_language={movie.original_language}
					adult={movie.adult}
				/>
				<MovieGenre genreNames={genreNames} />
			</div>
		</div>
	);
}

export default ListMovieDisplay;

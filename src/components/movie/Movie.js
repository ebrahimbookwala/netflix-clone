import ButtonContainer from "./ButtonContainer";
import MovieGenre from "./MovieGenre";
import MovieHeaders from "./MovieHeaders";
import MovieImage from "./MovieImage";
import { useSelector } from "react-redux";
import { useState } from "react";
import MovieDescriptionModal from "./MovieDescriptionModal";

function Movie({ movie, isMovie }) {
	console.log(movie);

	const [movieModalVisible, setMovieModalVisible] = useState(false);

	const genreList = useSelector((state) =>
		isMovie ? state.genres.genres : state.tvGenres.genres
	);

	const genre_ids = movie.genre_ids;

	const genreNames = genreList.filter(
		(genre) => genre_ids.indexOf(genre.id) !== -1
	);
	genreNames.splice(3);

	const showDescription = () => {
		setMovieModalVisible(true);
	};

	const hideDescription = () => {
		setMovieModalVisible(false);
	};

	return movieModalVisible ? (
		<MovieDescriptionModal
			genreNames={genreNames}
			movie={movie}
			hideDescription={hideDescription}
		/>
	) : (
		<div className="card">
			<MovieImage image={movie.backdrop_path} alt={movie.title || movie.name} />
			<h2 className="movie-title-modal">{movie.title || movie.name}</h2>
			<ButtonContainer showDescription={showDescription} movie={movie} />
			<MovieHeaders
				release_date={movie.release_date || movie.first_air_date}
				popularity={(movie.popularity / 1000).toFixed(2)}
				original_language={movie.original_language}
				adult={movie.adult || false}
			/>
			<MovieGenre genreNames={genreNames} />
		</div>
	);
}

export default Movie;

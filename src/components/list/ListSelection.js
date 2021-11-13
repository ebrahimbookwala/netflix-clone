import { useState } from "react";
import cn from "classnames";
import { useSelector } from "react-redux";
import ListMovieDisplay from "./ListMovieDisplay";

function ListSelection({ movie, isMovie }) {
	const [modalOn, setModalOn] = useState(false);

	const showModal = () => {
		setModalOn((prev) => !prev);
	};

	const genres = useSelector((state) =>
		isMovie ? state.genres.genres : state.tvGenres.genres
	);

	const genre_ids = movie.genre_ids;

	const genreNames = genres.filter(
		(genre) => genre_ids.indexOf(genre.id) !== -1
	);
	genreNames.splice(3);

	return (
		<div>
			<div className={cn("movie-display-container")} onClick={showModal}>
				<img
					src={`https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`}
					alt={movie.title || movie.name}
				/>
				<h3 className="movie-title">{movie.title || movie.name}</h3>
			</div>

			{modalOn && (
				<ListMovieDisplay
					genreNames={genreNames}
					movie={movie}
					hideDescription={showModal}
				/>
			)}
		</div>
	);
}

export default ListSelection;

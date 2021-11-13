import React from "react";

function MovieGenre({ genreNames }) {
	// console.log(genre_ids);

	return (
		<ul className="movie-genre">
			{genreNames.map((genre) => (
				<li key={genre.id}>{genre.name}</li>
			))}
		</ul>
	);
}

export default MovieGenre;

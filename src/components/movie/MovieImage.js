import React from "react";

function MovieImage({ image, alt }) {
	return (
		<div className="movie-image-container">
			<img src={`https://image.tmdb.org/t/p/w300/${image}`} alt={alt} />
		</div>
	);
}

export default MovieImage;

import React from "react";

function MovieContainer({ children, style }) {
	return (
		<section className="movie-container" style={style}>
			{children}
		</section>
	);
}

export default MovieContainer;

import React from "react";
import { formatDistanceToNow } from "date-fns";

function MovieHeaders({ release_date, popularity, original_language, adult }) {
	const timeAgo = formatDistanceToNow(new Date(release_date), {
		addSuffix: true,
	});

	return (
		<div className="movie-header">
			<p className="popularity">{popularity}</p>
			<p className="age">{adult ? "18+" : "14+"}</p>
			<p className="duration">{timeAgo}</p>
			<p className="hd">
				<sub>{original_language}</sub>
			</p>
		</div>
	);
}

export default MovieHeaders;

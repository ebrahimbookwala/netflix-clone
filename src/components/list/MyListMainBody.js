import { useSelector } from "react-redux";
import ListSelection from "./ListSelection";

function MyListMainBody() {
	const listMovies = useSelector((state) => state.list);

	return listMovies.length > 0 ? (
		<div className="list-item">
			{listMovies.map((movie) => (
				<ListSelection
					key={movie.id}
					movie={movie}
					isMovie={movie.first_air_date ? false : true}
				/>
			))}
		</div>
	) : (
		<div className="no-item">No show favorited</div>
	);
}

export default MyListMainBody;

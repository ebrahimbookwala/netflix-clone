import React, { useRef } from "react";
import Movie from "./Movie";

function Modal({ movie, turnModalOff, isMovie }) {
	const ref = useRef(null);

	function closeModal(e) {
		if (e.target === ref.current) {
			turnModalOff();
		}
	}
	return (
		<div className="modal" onClick={closeModal} ref={ref}>
			<Movie movie={movie} isMovie={isMovie} />
		</div>
	);
}

export default Modal;

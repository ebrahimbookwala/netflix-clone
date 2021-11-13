import React from "react";

function Spinner({ classname }) {
	return (
		<div>
			<div className={`spinner ${classname}`}></div>
		</div>
	);
}

export default Spinner;

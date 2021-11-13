import { useState } from "react";

function MovieButton({ icon, onClick = () => {} }) {
	const [color, setColor] = useState("");

	const Icon = icon;

	const onClickAction = () => {
		onClick();
		if (color === "") {
			setColor("success");
		} else {
			setColor("");
		}
	};

	return (
		<button className="rounded-button">
			<Icon onClick={onClickAction} color={color} />
		</button>
	);
}

export default MovieButton;

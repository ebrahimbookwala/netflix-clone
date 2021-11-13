import React from "react";
import MovieButton from "./MovieButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { addToList } from "../../features/listData/ListSlice";
import { useDispatch } from "react-redux";

function ButtonContainer({ showDescription, movie }) {
	const dispatch = useDispatch();

	const addToMyList = () => {
		dispatch(addToList(movie));
	};
	return (
		<div className="button-container">
			<MovieButton icon={PlayArrowIcon} />
			<MovieButton icon={AddIcon} onClick={addToMyList} />
			<MovieButton icon={ThumbUpOffAltOutlinedIcon} />
			<MovieButton icon={ThumbDownOffAltOutlinedIcon} />
			<MovieButton icon={ArrowDropDownIcon} onClick={showDescription} />
		</div>
	);
}

export default ButtonContainer;

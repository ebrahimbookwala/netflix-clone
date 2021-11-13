import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import movieGenreReducer from "../features/moviesData/MovieGenreSlice";
import tvGenreReducer from "../features/tvData/TvGenreSlice";
import listReducer from "../features/listData/ListSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		genres: movieGenreReducer,
		tvGenres: tvGenreReducer,
		list: listReducer,
	},
});

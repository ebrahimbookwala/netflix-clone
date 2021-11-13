import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "../../App";

const initialGenres = {
	status: "",
	genres: [],
};

export const fetchGenres = createAsyncThunk(
	"movieGenre/fetchGenres",
	async () => {
		try {
			const data = await fetch(
				`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
			);
			const response = await data.json();
			return response;
		} catch (e) {
			return e;
		}
	}
);

export const movieGenre = createSlice({
	name: "movieGenre",
	initialState: initialGenres,
	reducers: {},
	extraReducers: {
		[fetchGenres.pending]: (state) => {
			state.status = "loading";
		},
		[fetchGenres.fulfilled]: (state, action) => {
			state.genres = action.payload.genres;
			state.status = "success";
		},
		[fetchGenres.rejected]: (state, action) => {
			state.genres = action.payload;
			state.status = "failed";
		},
	},
});

export default movieGenre.reducer;

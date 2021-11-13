import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const listSlice = createSlice({
	name: "list",
	initialState,
	reducers: {
		addToList(state, action) {
			if (state.findIndex((movie) => movie.id === action.payload.id) === -1) {
				state.push(action.payload);
			}
		},
		removeFromLis(state, action) {
			state.filter((listing) => listing.id !== action.payload);
		},
	},
});

export default listSlice.reducer;
export const { addToList, removeFromList } = listSlice.actions;

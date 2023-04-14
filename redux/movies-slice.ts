import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  movie: "",
};

const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    searchMovie(state, action: PayloadAction<string>) {
      state.movie = action.payload;
    },
    resetSearch(state) {
      state.movie = "";
    },
  },
});

export const { searchMovie, resetSearch } = MovieSlice.actions;
export default MovieSlice.reducer;

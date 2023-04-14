import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  movie: "",
  searching: false,
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
    setSearchingStatus(state, action: PayloadAction<boolean>) {
      state.searching = action.payload;
    },
  },
});

export const { searchMovie, resetSearch, setSearchingStatus } =
  MovieSlice.actions;
export default MovieSlice.reducer;

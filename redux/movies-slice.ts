import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  movie: "",
  searching: false,
  search: "",
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
      state.search = "";
    },
    setSearchingStatus(state, action: PayloadAction<boolean>) {
      state.searching = action.payload;
    },
    updateSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { searchMovie, resetSearch, setSearchingStatus, updateSearch } =
  MovieSlice.actions;
export default MovieSlice.reducer;

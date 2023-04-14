import { combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "@/redux/movies-slice";

const reducers = combineReducers({
  movies: moviesReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;

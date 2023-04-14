import { combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "@/redux/movies-slice";

const reducers = combineReducers({
  movie: moviesReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;

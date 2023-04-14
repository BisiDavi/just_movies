import axios from "axios";

export const options = [
  "home",
  "love",
  "avengers",
  "john",
  "africa",
  "magic",
  "gold",
  "action",
  "wit",
];

export default function fetchMovies(movieOptions: string) {
  return axios.get(
    `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIE_API}&s=${movieOptions}`
  );
}

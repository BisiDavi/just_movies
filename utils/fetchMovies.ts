import axios from "axios";

const options = [
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
export const movie = options[Math.floor(Math.random() * options.length)];

export default function fetchMovies() {
  return axios.get(
    `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIE_API}&s=${movie}`
  );
}

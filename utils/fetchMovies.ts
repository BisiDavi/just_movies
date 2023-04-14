import axios from "axios";
import type { movieDetailType } from "@/types";

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

export function fetchMovie(id: any): Promise<{ data: movieDetailType }> {
  return axios.get(
    `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIE_API}&i=${id}`
  );
}

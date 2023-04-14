import axios from "axios";
import type { movieDetailType } from "@/types";

export const options = [
  "home",
  "family",
  "avengers",
  "john",
  "africa",
  "magic",
  "panther",
  "action",
  "man",
];

export default function fetchMovies(movieOptions: string) {
  return axios.get(
    `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIE_API}&s=${movieOptions}`
  );
}

export function fetchMovie(id: any): Promise<{ data: movieDetailType }> {
  return axios.get(
    `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIE_API}&i=${id}`
  );
}

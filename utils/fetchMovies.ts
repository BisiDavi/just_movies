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
  return axios.post("/api/get-movies", { search: movieOptions });
}

export function fetchMovie(id: any): Promise<{ data: movieDetailType }> {
  return axios.post("/api/get-movie", { id });
}

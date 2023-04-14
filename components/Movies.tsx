import Box from "@mui/material/Box";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function fetchMovies() {
  axios.get(
    `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIE_API}s=home&plot=short`
  );
}

export default function Movies({ movies }: any) {
    const {} = useQuery({})
  return <Box></Box>;
}
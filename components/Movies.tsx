import Box from "@mui/material/Box";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function fetchMovies() {
  axios.get(
    `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIE_API}s=home&plot=short`
  );
}

export default function Movies({ movies }: any) {
  const { data, status } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });
  console.log("data", data);
  return <Box></Box>;
}

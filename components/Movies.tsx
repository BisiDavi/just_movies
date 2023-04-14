import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import MovieCard from "@/components/MovieCard";
import MovieLoader from "@/components/MovieLoader";
import type { MovieType } from "@/types";

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
const item = options[Math.floor(Math.random() * options.length)];

function fetchMovies() {
  return axios.get(
    `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIE_API}&s=${item}`
  );
}

export default function Movies() {
  const { data, status } = useQuery({
    queryKey: [item],
    queryFn: fetchMovies,
  });

  return (
    <Container sx={{ my: 8 }}>
      {status === "error" ? (
        <Typography>Unable to fetch movies</Typography>
      ) : status === "loading" ? (
        <MovieLoader />
      ) : (
        <Grid
          container
          spacing={2}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            rowGap: "10px",
            m: 0,
            width: "100%",
          }}
        >
          {data.data.Search.map((movie: MovieType) => (
            <MovieCard key={`${movie.imdbId}-${movie.Title}`} movie={movie} />
          ))}
        </Grid>
      )}
    </Container>
  );
}

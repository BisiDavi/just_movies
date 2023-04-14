import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import MovieCard from "@/components/MovieCard";

function fetchMovies() {
  return axios.get(
    `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIE_API}&s=home`
  );
}

export default function Movies() {
  const { data, status } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  return (
    <Container sx={{ my: 4 }}>
      {status === "error" ? (
        <Typography>Unable to fetch movies</Typography>
      ) : status === "loading" ? (
        <Typography>Fetching...</Typography>
      ) : (
        <Grid
          container
          spacing={2}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            columnGap: "10px",
          }}
        >
          {data.data.Search.map((movie) => (
            <MovieCard key={movie.imdbId} movie={movie} />
          ))}
        </Grid>
      )}
    </Container>
  );
}

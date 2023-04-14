import { Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

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
  console.log("data", data);
  return (
    <Container sx={{ my: 4 }}>
      {status === "error" ? (
        <Typography>Unable to fetch movies</Typography>
      ) : status === "loading" ? (
        <Typography>Fetching...</Typography>
      ) : (
        <Grid container sx={{ margin: "auto", display: "flex" }}>
          {data.data.Search.map((movie) => (
            <Grid
              key={movie.imdbId}
              xs={12}
              md={3}
              sx={{ my: 2, mx: 0, display: "flex", flexDirection: "column" }}
            >
              <Image
                src={movie.Poster}
                alt={movie.Title}
                height={200}
                width={250}
                blurDataURL={movie.Poster}
                placeholder="blur"
              />
              <Typography sx={{ fontWeight: 600, textAlign: "center", my: 1 }}>
                {movie.Title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

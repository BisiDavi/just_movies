import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import MovieLoader from "@/components/MovieLoader";
import MovieGrid from "@/components/MovieGrid";
import fetchMovies, { options } from "@/utils/fetchMovies";
import { useAppSelector } from "@/redux/store";

export default function Movies() {
  const [movieOptions, setMovieOptions] = useState("");
  const { movie } = useAppSelector((state) => state.movie);

  useEffect(() => {
    const randomMovie = options[Math.floor(Math.random() * options.length)];
    setMovieOptions(randomMovie);
  }, []);

  const movieName = movie ? movie : movieOptions;

  const { data, status } = useQuery({
    queryKey: [movieName],
    queryFn: () => fetchMovies(movieName),
    enabled: !!movieName,
  });

  return (
    <Container sx={{ my: { md: 8, xs: 4 }, px: 3 }}>
      {status === "error" ? (
        <Typography>Unable to fetch movies</Typography>
      ) : status === "loading" ? (
        <MovieLoader />
      ) : (
        <MovieGrid data={data} />
      )}
    </Container>
  );
}

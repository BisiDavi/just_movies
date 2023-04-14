import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useQuery } from "@tanstack/react-query";

import MovieLoader from "@/components/MovieLoader";
import MovieGrid from "@/components/MovieGrid";
import fetchMovies, { movie } from "@/utils/fetchMovies";

export default function Movies() {
  const { data, status } = useQuery({
    queryKey: [movie],
    queryFn: fetchMovies,
  });

  return (
    <Container sx={{ my: 8 }}>
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

import Grid from "@mui/material/Grid";

import MovieCard from "@/components/MovieCard";
import type { MovieType } from "@/types";

interface Props {
  data: {
    data: {
      Search: MovieType[];
    };
  };
}

export default function MovieGrid({ data }: Props) {
  return (
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
        <MovieCard key={`${movie.imdbID}-${movie.Title}`} movie={movie} />
      ))}
    </Grid>
  );
}
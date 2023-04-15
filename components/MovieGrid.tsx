import Grid from "@mui/material/Grid";

import MovieCard from "@/components/MovieCard";
import type { MovieType } from "@/types";
import { Typography } from "@mui/material";

interface Props {
  data: {
    data: {
      Search: MovieType[];
      Response: "True" | "False";
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
        gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
        gap: "30px",
        m: 0,
        width: "100%",
        minHeight: "500px",
      }}
    >
      {data.data.Response === "True" ? (
        data.data.Search.map((movie: MovieType) => (
          <MovieCard key={`${movie.imdbID}-${movie.Title}`} movie={movie} />
        ))
      ) : (
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold", m: "auto" }}
        >
          No Result for this search.
        </Typography>
      )}
    </Grid>
  );
}

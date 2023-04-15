import Grid from "@mui/material/Grid";

import MovieDetailImageView from "@/components/MovieDetailImageView";
import MovieDetailTextView from "@/components/MovieDetailTextView";
import type { movieDetailType } from "@/types";

interface Props {
  movie: movieDetailType;
}

export default function MovieDetailView({ movie }: Props) {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        m: 0,
        p: "8px",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "start",
      }}
    >
      <MovieDetailImageView movie={movie} />
      <MovieDetailTextView movie={movie} />
    </Grid>
  );
}

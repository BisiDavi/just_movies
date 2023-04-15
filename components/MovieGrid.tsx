import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import MovieCard from "@/components/MovieCard";
import type { MovieType } from "@/types";

interface Props {
  data: {
    Search: MovieType[];
    Response: "True" | "False";
  };
}

export default function MovieGrid({ data }: Props) {
  return (
    <>
      {data.Response === "True" ? (
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
          {data.Search.map((movie: MovieType) => (
            <MovieCard key={`${movie.imdbID}-${movie.Title}`} movie={movie} />
          ))}
        </Grid>
      ) : (
        <Box sx={{ minHeight: "66vh", display: "flex" }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "bold", m: "auto" }}
          >
            No Result for this search.
          </Typography>
        </Box>
      )}
    </>
  );
}

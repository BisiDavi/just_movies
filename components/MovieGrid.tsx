import Grid from "@mui/material/Grid";

import MovieCard from "@/components/MovieCard";
import { MovieType } from "@/types";
import Link from "next/link";

export default function MovieGrid({ data }: any) {
  return (
    <Link href="/movies">
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
    </Link>
  );
}

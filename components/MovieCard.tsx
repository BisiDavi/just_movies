import Link from "next/link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import toSlug from "@/utils/toSlug";
import type { MovieType } from "@/types";
import { Box } from "@mui/material";

interface Props {
  movie: MovieType;
}

export default function MovieCard({ movie }: Props) {
  const movieSlug = toSlug(movie.Title);

  return (
    <Link
      style={{ textDecoration: "none" }}
      href={`/${movieSlug}?type=${movie.Type}&imdbId=${movie.imdbID}`}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          height: "360px",
          width: "100%",
        }}
        item
      >
        <Paper sx={{ height: "100%", width: "100%", position: "relative" }}>
          <Box sx={{ height: "300px", width: "100%", position: "relative" }}>
            <Image
              src={movie.Poster}
              alt={movie.Title}
              blurDataURL={movie.Poster}
              placeholder="blur"
              style={{
                borderTopRightRadius: "4px",
                borderTopLeftRadius: "4px",
              }}
              fill
            />
          </Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "14px",
              maxWidth: "200px",
              margin: "5px auto 20px auto",
              justifyContent: "center",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "block",
              textAlign: "center",
            }}
          >
            {movie.Title} ({movie.Year})
          </Typography>
          <Typography
            sx={{
              backgroundColor: "red",
              color: "white",
              px: 1,
              width: "fit-content",
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4,
              marginBottom: 0.5,
              position: "absolute",
              fontSize: "12px",
              left: 0,
              bottom: 0,
            }}
          >
            {movie.Type}
          </Typography>
        </Paper>
      </Grid>
    </Link>
  );
}

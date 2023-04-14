import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import type { MovieType } from "@/types";

interface Props {
  movie: MovieType;
}

export default function MovieCard({ movie }: Props) {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        height: "390px",
        width: "100%",
        position: "relative",
      }}
      item
    >
      <Paper sx={{ height: "100%" }}>
        <Image
          src={movie.Poster}
          alt={movie.Title}
          height={300}
          width={270}
          blurDataURL={movie.Poster}
          placeholder="blur"
          style={{ borderTopRightRadius: "4px", borderTopLeftRadius: "4px" }}
        />
        <Typography
          sx={{
            fontWeight: 600,
            textAlign: "center",
            fontSize: "14px",
            maxWidth: "200px",
            display: "flex",
            margin: "5px auto 20px auto",
            justifyContent: "center",
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
            left: "15px",
            bottom: 0,
          }}
        >
          {movie.Type}
        </Typography>
      </Paper>
    </Grid>
  );
}

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";

interface Props {
  movie: {
    Poster: string;
    Title: string;
  };
}

export default function MovieCard({ movie }: Props) {
  return (
    <Grid
      xs={12}
      md={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}
      item
    >
      <Paper>
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
      </Paper>
    </Grid>
  );
}

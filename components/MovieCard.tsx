import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";

interface Props {
  movie: {
    Poster: string;
    Title: string;
    Year: string;
    Type: string;
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
          }}
        >
          {movie.Type}
        </Typography>
      </Paper>
    </Grid>
  );
}

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import type { movieDetailType } from "@/types";

interface Props {
  movie: movieDetailType;
}

export default function MovieDetailView({ movie }: Props) {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Image
          src={movie.Poster}
          alt={movie.Title}
          height={500}
          width={500}
          placeholder="blur"
          blurDataURL={movie.Poster}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
          {movie.Title} - <span style={{ fontSize: "20px" }}>{movie.Year}</span>
        </Typography>
        <Typography>Plot: {movie.Plot}</Typography>
        <Typography sx={{ mt: 3 }}>Actors: {movie.Actors}</Typography>
        <Typography>Director: {movie.Director}</Typography>
        <Typography>Writer: {movie.Writer}</Typography>
        <Typography>Genre: {movie.Genre}</Typography>
        <Typography>Language: {movie.Language}</Typography>
        <Typography>Country: {movie.Country}</Typography>
        <Typography>Awards {movie.Awards}</Typography>
        <Typography>Released: {movie.Released}</Typography>
        <Typography>Rated: {movie.Rated}</Typography>
        <Typography>Runtime: {movie.Runtime}</Typography>
        <Typography>IMDb Rating: {movie.imdbRating}</Typography>
        <Typography>IMDb Votes: {movie.imdbVotes}</Typography>
        {movie.BoxOffice && (
          <Typography>Box Office: {movie.BoxOffice}</Typography>
        )}
        <Box sx={{ mt: 2 }}>
          <Typography>Ratings</Typography>
          {movie.Ratings.map((rating, index) => (
            <Typography key={`${rating.Source}-${index}`}>
              {rating.Source}: {rating.Value}
            </Typography>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

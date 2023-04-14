import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import SubscribeForm from "@/components/SubscribeForm";
import type { movieDetailType } from "@/types";
interface Props {
  movie: movieDetailType;
}

export default function MovieDetailTextView({ movie }: Props) {
  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        m: 0,
        p: { md: "0px 20px !important", xs: "6px 0px !important" },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 2,
          fontSize: { lg: "36px", xs: "24px" },
        }}
      >
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
      <SubscribeForm movie={movie} />
    </Grid>
  );
}

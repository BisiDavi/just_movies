import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import MailIcon from "@mui/icons-material/Mail";
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
      <Box sx={{ mt: 10 }}>
        <Typography sx={{ fontWeight: "bold", mb: 2 }}>
          Drop your email address to receive full gist about {movie.Title}
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            backgroundColor: "red",
            p: "5px 10px",
            borderRadius: "4px",
            width: "80%",
          }}
        >
          <Input
            placeholder="Email Address"
            sx={{
              p: "1px 40px",
              backgroundColor: "white",
              width: "100%",
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px",
            }}
            type="email"
            required
          />
          <InputAdornment
            position="start"
            sx={{ position: "absolute", left: 18 }}
          >
            <MailIcon />
          </InputAdornment>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: 0,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              fontSize: "12px",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
                opacity: 0.5,
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

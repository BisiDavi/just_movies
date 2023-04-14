import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import SpinnerRipple from "@/components/SpinnerRipple";
import Layout from "@/layout";
import { fetchMovie } from "@/utils/fetchMovies";
import Image from "next/image";

export default function MoviesPage() {
  const router = useRouter();

  const { data, status } = useQuery({
    queryKey: [router.query.imdbId],
    queryFn: () => fetchMovie(router.query.imdbId),
    enabled: !!router.query.imdbId,
  });

  return (
    <Layout>
      <Container component="section" sx={{ minHeight: "82vh", py: 8 }}>
        {status === "error" ? (
          <Typography>Error fetching data</Typography>
        ) : status === "loading" ? (
          <Box sx={{ height: "50vh", display: "flex" }}>
            <SpinnerRipple />
          </Box>
        ) : (
          <Grid container>
            <Grid item xs={12} md={6}>
              <Image
                src={data?.data.Poster}
                alt={data?.data.Title}
                height={500}
                width={500}
                placeholder="blur"
                blurDataURL={data?.data.Poster}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
                {data?.data.Title} -{" "}
                <span style={{ fontSize: "20px" }}>{data?.data.Year}</span>
              </Typography>
              <Typography>Plot: {data?.data.Plot}</Typography>
              <Typography sx={{ mt: 3 }}>
                Actors: {data?.data.Actors}
              </Typography>
              <Typography>Director: {data?.data.Director}</Typography>
              <Typography>Writer: {data?.data.Writer}</Typography>
              <Typography>Genre: {data?.data.Genre}</Typography>
              <Typography>Language: {data?.data.Language}</Typography>
              <Typography>Country: {data?.data.Country}</Typography>
              <Typography>Awards: {data?.data.Awards}</Typography>
              <Typography>Awards {data?.data.Awards}</Typography>
              <Typography>Released: {data?.data.Released}</Typography>
              <Typography>Rated: {data?.data.Rated}</Typography>
              <Typography>Runtime: {data?.data.Runtime}</Typography>
              <Typography>IMDb Rating: {data?.data.imdbRating}</Typography>
              <Typography>IMDb Votes: {data?.data.imdbVotes}</Typography>
              {data?.data.BoxOffice && (
                <Typography>BoxOffice: {data?.data.BoxOffice}</Typography>
              )}
              <Box sx={{ mt: 2 }}>
                <Typography>Ratings</Typography>
                {data?.data.Ratings.map((rating) => (
                  <Typography key={rating.Source}>
                    {rating.Source}: {rating.Value}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </Layout>
  );
}

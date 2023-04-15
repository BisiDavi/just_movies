import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import SpinnerRipple from "@/components/SpinnerRipple";
import MovieDetailView from "@/components/MovieDetailView";
import MovieMetatag from "@/components/MovieMetatag";
import { fetchMovie } from "@/utils/fetchMovies";
import Layout from "@/layout";

export default function MoviesPage() {
  const router = useRouter();

  const { data, status } = useQuery({
    queryKey: [router.query.imdbId],
    queryFn: () => fetchMovie(router.query.imdbId),
    enabled: !!router.query.imdbId,
  });

  return (
    <>
      {status === "success" && <MovieMetatag movie={data.data} />}
      <Layout>
        <Container
          component="section"
          sx={{ minHeight: "82vh", py: { xs: 4, md: 6 } }}
        >
          {status === "error" ? (
            <Typography>Error fetching data</Typography>
          ) : status === "loading" ? (
            <Box sx={{ height: "50vh", display: "flex" }}>
              <SpinnerRipple />
            </Box>
          ) : (
            <MovieDetailView movie={data.data} />
          )}
        </Container>
      </Layout>
    </>
  );
}

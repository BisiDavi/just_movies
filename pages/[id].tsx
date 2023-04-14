import { Box, Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import SpinnerRipple from "@/components/SpinnerRipple";
import Layout from "@/layout";
import { fetchMovie } from "@/utils/fetchMovies";

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
        ) : 5 ? (
          <Box sx={{ height: "50vh", display: "flex" }}>
            <SpinnerRipple />
          </Box>
        ) : (
          <Box>
            <Typography>{}</Typography>
          </Box>
        )}
      </Container>
    </Layout>
  );
}

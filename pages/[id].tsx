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
                height={600}
                width={600}
                placeholder="blur"
                blurDataURL={data?.data.Poster}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ textAlign: "center" }}>
                {data?.data.Title}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Container>
    </Layout>
  );
}

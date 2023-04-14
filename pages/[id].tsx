import Layout from "@/layout";
import { fetchMovie } from "@/utils/fetchMovies";
import { Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function MoviesPage() {
  const router = useRouter();

  const { data, status } = useQuery({
    queryKey: [router.query.imdbId],
    queryFn: () => fetchMovie(router.query.imdbId),
    enabled: !!router.query.imdbId,
  });


  return (
    <Layout>
      <Container component="section"></Container>
    </Layout>
  );
}

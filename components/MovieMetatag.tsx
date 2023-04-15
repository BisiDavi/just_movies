import Head from "next/head";
import generateMovieLD from "@/utils/generateMovieLD";
import type { movieDetailType } from "@/types";

interface Props {
  movie: movieDetailType;
}

export default function MovieMetatag({ movie }: Props) {
  return (
    <Head>
      <title>{movie.Title}| Mail Movies</title>
      <meta name="description" content={movie.Plot} key="desc" />
      <meta property="og:title" content={`${movie.Title} | Mail Movies`} />
      <meta name="og:description" content={movie.Plot} key="desc" />
      <meta property="og:image" content={movie.Poster} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateMovieLD(movie)}
        key="movie-jsonld"
      />
    </Head>
  );
}

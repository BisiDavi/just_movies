import type { movieDetailType } from "@/types";

type castType = Array<{ "@type": string; name: string }>;

export default function retgenerateMovieLD(movie: movieDetailType) {
  const _actors = movie.Actors.split(",");
  const _writer = movie.Writer.split(",");

  let actors: castType = [];
  _actors.map((actor) =>
    actors.push({
      "@type": "Person",
      name: actor,
    })
  );

  let writer: castType = [];
  _writer.map((actor) =>
    writer.push({
      "@type": "Person",
      name: actor,
    })
  );

  return {
    __html: `{
          "@context": "https://schema.org",
          "@type": "${movie.Genre}",
          "actor": "${actors}",
          "aggregateRating": {
            "@type": "AggregateRating",
            "bestRating": "${movie.imdbRating}",
            "ratingCount": "${movie.imdbVotes}",
          },
          "author": "${writer}",
          "description": "${movie.Plot}",
          "director": {
            "@type": "Person",
            "name": "${movie.Director}"
          },
          "name":"${movie.Title}"
        }`,
  };
}

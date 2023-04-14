export type MovieType = {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
  imdbID: string;
};

export type movieDetailType = {
  Poster: string;
  Title: string;
  Year: string;
  Plot: string;
  Director: string;
  Writer: string;
  Actors: string;
  Language: string;
  Awards: string;
  Country: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Rated: string;
  imdbRating: string;
  imdbVotes: string;
  BoxOffice: string;
  Ratings: Array<{ Source: String; Value: string }>;
};

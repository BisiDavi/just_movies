import Grid from "@mui/material/Grid";
import Image from "next/image";
import type { movieDetailType } from "@/types";

interface Props {
  movie: movieDetailType;
}

export default function MovieDetailImageView({ movie }: Props) {
  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        position: "relative",
        minHeight: { lg: "500px", xs: "400px" },
        my: { xs: 2, md: 0 },
        p: 0,
      }}
    >
      <Image
        src={movie.Poster}
        alt={movie.Title}
        placeholder="blur"
        blurDataURL={movie.Poster}
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,50vw"
        fill
      />
    </Grid>
  );
}

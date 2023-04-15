import { Grid } from "@mui/material";
import ContentLoader from "react-content-loader";

function MovieLoaderItem() {
  return (
    <ContentLoader
      animate
      speed={2}
      viewBox="0 0 100 100"
      backgroundColor="#e3d9d9"
      foregroundColor="#ada4a4"
      className="my-2"
      title="loading movie..."
      uniqueKey="movies"
    >
      <rect x="0" y="0%" rx="4px" ry="4px" width="100%" height="100px" />
    </ContentLoader>
  );
}

export default function MovieLoader() {
  const arrayGroup = new Array(8).fill(0);
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
        gap: "30px",
        width: "100%",
        mx: 0,
      }}
    >
      {arrayGroup.map((_, index) => (
        <Grid xs={12} key={index}>
          <MovieLoaderItem />
        </Grid>
      ))}
    </Grid>
  );
}

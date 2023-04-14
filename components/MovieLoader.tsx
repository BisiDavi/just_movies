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
    >
      <rect x="0" y="0%" rx="4px" ry="4px" width="100%" height="100px" />
    </ContentLoader>
  );
}

export default function MovieLoader() {
  const arrayGroup = new Array(8).fill(0);
  return (
    <Grid
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
        gap: "30px",
      }}
    >
      {arrayGroup.map((_, index) => (
        <MovieLoaderItem key={index} />
      ))}
    </Grid>
  );
}

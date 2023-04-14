import Input from "@mui/material/Input";
import Box from "@mui/material/Box";

export default function Search() {
  return (
    <Box sx={{ color: "white", width: { lg: "400px", xs: "100%" } }}>
      <Input
        placeholder="Search for movies"
        sx={{ color: "white", "::placeholder": { color: "white" } }}
        fullWidth={true}
        color="info"
        className="search_movies"
      />
    </Box>
  );
}

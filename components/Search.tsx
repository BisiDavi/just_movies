import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

export default function Search() {
  return (
    <Box
      sx={{
        color: "white",
        width: { md: "400px", xs: "100%", position: "relative" },
      }}
    >
      <Input
        placeholder="Search for movies"
        sx={{ color: "white", "::placeholder": { color: "white" } }}
        fullWidth={true}
        color="info"
        className="search_movies"
      />
      <InputAdornment
        position="end"
        sx={{ position: "absolute", zIndex: 4, right: "0px", top: "16px" }}
      >
        <Button>
          <SearchIcon />
        </Button>
      </InputAdornment>
    </Box>
  );
}

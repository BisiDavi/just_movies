import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useState } from "react";

import { searchMovie } from "@/redux/movies-slice";
import { useAppDispatch } from "@/redux/store";

export default function Search() {
  const [searchState, setSearchState] = useState("");
  const dispatch = useAppDispatch();

  function searchHandler() {
    if (searchState) {
      dispatch(searchMovie(searchState));
    }
  }

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
        onChange={(e) => setSearchState(e.target.value)}
      />
      <InputAdornment
        position="end"
        sx={{ position: "absolute", zIndex: 4, right: "0px", top: "16px" }}
      >
        <Button onClick={searchHandler}>
          <SearchIcon />
        </Button>
      </InputAdornment>
    </Box>
  );
}

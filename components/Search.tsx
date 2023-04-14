import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";

import {
  resetSearch,
  searchMovie,
  setSearchingStatus,
} from "@/redux/movies-slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

export default function Search() {
  const [searchState, setSearchState] = useState("");
  const dispatch = useAppDispatch();
  const { movie, searching } = useAppSelector((state) => state.movie);

  function searchHandler() {
    if (!movie) {
      dispatch(searchMovie(searchState));
      dispatch(setSearchingStatus(true));
    } else {
      dispatch(resetSearch());
      setSearchState("");
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
        color="info"
        className="search_movies"
        sx={{ color: "white", "::placeholder": { color: "white" } }}
        fullWidth={true}
        value={searchState}
        onChange={(e) => setSearchState(e.target.value)}
      />
      <InputAdornment
        position="end"
        sx={{ position: "absolute", zIndex: 4, right: "0px", top: "16px" }}
      >
        <Button onClick={searchHandler}>
          {!searching ? (
            movie ? (
              <CloseIcon />
            ) : (
              <SearchIcon />
            )
          ) : (
            <CircularProgress className="circularProgress" />
          )}
        </Button>
      </InputAdornment>
    </Box>
  );
}

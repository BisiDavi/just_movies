import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";

import {
  resetSearch,
  searchMovie,
  setSearchingStatus,
  updateSearch,
} from "@/redux/movies-slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

export default function Search() {
  const dispatch = useAppDispatch();
  const { movie, searching, search } = useAppSelector((state) => state.movie);

  const disableBtn = search ? false : true;

  function searchHandler() {
    if (!movie) {
      dispatch(searchMovie(search));
      dispatch(setSearchingStatus(true));
    } else if (movie && search) {
      dispatch(resetSearch());
    }
  }

  function inputHandler(e: any) {
    dispatch(updateSearch(e.target.value));
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
        value={search}
        onChange={inputHandler}
      />
      <InputAdornment
        position="end"
        sx={{ position: "absolute", zIndex: 4, right: "0px", top: "16px" }}
      >
        <Button onClick={searchHandler} disabled={disableBtn}>
          {!searching ? (
            movie ? (
              <CloseIcon />
            ) : (
              <SearchIcon />
            )
          ) : (
            movie && <CircularProgress className="circularProgress" />
          )}
        </Button>
      </InputAdornment>
    </Box>
  );
}

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import type { movieDetailType } from "@/types";

interface Props {
  movie: movieDetailType;
}

export default function SubscribeForm({ movie }: Props) {
  const [userEmail, setUserEmail] = useState("");

  function inputHandler(e: any) {
    setUserEmail(e.target.value);
  }

  function onSubmitHandler() {
    if (userEmail) {
    }
  }

  return (
    <Box sx={{ mt: 10 }}>
      <Typography sx={{ fontWeight: "bold", mb: 2 }}>
        Drop your email address to receive full gist about {movie.Title}
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          backgroundColor: "red",
          p: "5px 10px",
          borderRadius: "4px",
          width: { lg: "80%", xs: "100%" },
        }}
        onSubmit={onSubmitHandler}
      >
        <Input
          placeholder="Email Address"
          sx={{
            p: "1px 40px",
            backgroundColor: "white",
            width: "100%",
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
          }}
          type="email"
          onChange={inputHandler}
          required
        />
        <InputAdornment
          position="start"
          sx={{ position: "absolute", left: 18 }}
        >
          <MailIcon />
        </InputAdornment>
        <Button
          sx={{
            backgroundColor: "black",
            color: "white",
            borderRadius: 0,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            fontSize: "12px",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
              opacity: 0.5,
            },
          }}
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

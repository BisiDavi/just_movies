import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import MailIcon from "@mui/icons-material/Mail";

import useFormMutation from "@/hooks/useFormMutation";
import type { movieDetailType } from "@/types";

interface Props {
  movie: movieDetailType;
}

export default function SubscribeForm({ movie }: Props) {
  const [email, setEmail] = useState("");
  const { mutate } = useFormMutation(setEmail);

  function inputHandler(e: any) {
    setEmail(e.target.value);
  }

  async function onSubmitHandler(e: any) {
    e.preventDefault();
    mutate({ movie, email });
  }

  return (
    <Box sx={{ mt: 10 }}>
      <Typography sx={{ fontWeight: "bold", mb: 2 }}>
        Drop your email address to receive full gist about {movie.Title}
      </Typography>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          backgroundColor: "red",
          padding: "5px 10px",
          borderRadius: "4px",
          width: "100%",
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
      </form>
    </Box>
  );
}

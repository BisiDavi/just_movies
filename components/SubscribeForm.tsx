import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import MailIcon from "@mui/icons-material/Mail";

interface Props {
  title: string;
}

export default function SubscribeForm({ title }: Props) {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography sx={{ fontWeight: "bold", mb: 2 }}>
        Drop your email address to receive full gist about {title}
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
          width: "80%",
        }}
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
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

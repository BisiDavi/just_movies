import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: "20px",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography>
        Made with ❤️ By{" "}
        <a href="https://olubisi-david.vercel.app/" target="_blank">
          Dave
        </a>
      </Typography>
    </Box>
  );
}

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
      <Typography sx={{ fontSize: { xs: "14px", lg: "16px" } }}>
        Made with ❤️ by{" "}
        <a
          href="https://olubisi-david.vercel.app/"
          target="_blank"
          style={{ color: "red", textDecoration: "none", marginRight: "5px" }}
        >
          Dave
        </a>
        and powered by{" "}
        <a
          href="https://www.omdbapi.com/"
          target="_blank"
          style={{ color: "red", textDecoration: "none" }}
        >
          OMDb API
        </a>
      </Typography>
    </Box>
  );
}

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Logo() {
  return (
    <Box sx={{ border: "1px solid white", py: 1, px: 2 }}>
      <Typography sx={{ fontWeight: "bold" }}>
        Just
        <Box sx={{}} component="span">
          Movies
        </Box>
      </Typography>
    </Box>
  );
}
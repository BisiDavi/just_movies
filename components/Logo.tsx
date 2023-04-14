import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <Box sx={{ border: "1px solid white", py: 1, px: 2 }}>
        <Typography sx={{ fontWeight: "bold", color: "white" }}>
          Book
          <Box sx={{ color: "black" }} component="span">
            Movies
          </Box>
        </Typography>
      </Box>
    </Link>
  );
}

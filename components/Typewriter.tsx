import Box from "@mui/material/Box";
import Typewriter from "typewriter-effect";

export default function TypewriterEffect() {
  return (
    <Box component="section" sx={{ m: 5 }}>
      <Box
        component="span"
        sx={{
          fontWeight: "bold",
          display: "flex",
          textAlign: "center",
          m: "auto",
          justifyContent: "center",
          fontSize: 32,
        }}
      >
        Search for your favourite
        <Box sx={{ color: "red", m: "0px 4px" }}>
          <Typewriter
            options={{
              strings: ["movies", "series"],
              autoStart: true,
              loop: true,
            }}
          />
        </Box>
        and get the details mailed to your email.
      </Box>
    </Box>
  );
}

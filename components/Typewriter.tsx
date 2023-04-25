import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typewriter from "typewriter-effect";

export default function TypewriterEffect() {
  return (
    <Container
      component="section"
      sx={{
        m: "30px auto",
        bgcolor: "#f5f5f5",
        p: 2,
        borderRadius: 2,
        boxShadow: "0px 0px 1px 2px #df3737c9",
      }}
    >
      <Box
        component="span"
        sx={{
          fontWeight: "bold",
          display: "flex",
          flexDirection: "column",
          textAlign: "",
          m: "auto",
          justifyContent: "center",
          fontSize: 24,
        }}
      >
        Search for your favourite
        <Box sx={{ color: "red", m: "0px 4px", ml: 5, fontSize: 30 }}>
          <Typewriter
            options={{
              strings: ["Movies", "Series", "Anime"],
              autoStart: true,
              loop: true,
            }}
          />
        </Box>
        <Box sx={{ ml: 10 }}>and get the details straight to your email.</Box>
      </Box>
    </Container>
  );
}

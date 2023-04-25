import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typewriter from "typewriter-effect";

export default function TypewriterEffect() {
  return (
    <Container
      component="section"
      sx={{
        m: { lg: "30px auto", xs: "20px auto" },
        bgcolor: "#f5f5f5",
        p: 2,
        borderRadius: 2,
        boxShadow: "0px 0px 1px 2px #df3737c9",
        width: { lg: "100%", xs: "90%" },
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
          fontSize: { lg: 24, xs: 14 },
        }}
      >
        Search for your favourite
        <Box
          sx={{
            color: "red",
            m: "0px 4px",
            ml: { lg: 5, xs: 2 },
            fontSize: { lg: 30, xs: 16 },
          }}
        >
          <Typewriter
            options={{
              strings: ["Movies", "Series", "Anime"],
              autoStart: true,
              loop: true,
            }}
          />
        </Box>
        <Box sx={{ ml: { lg: 10, xs: 4 } }}>
          and get the details straight to your email.
        </Box>
      </Box>
    </Container>
  );
}

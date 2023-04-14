import Box from "@mui/material/Box";
import Head from "next/head";

import Logo from "@/components/Logo";
import Search from "@/components/Search";
import { Container } from "@mui/material";

export default function Header() {
  return (
    <>
      <Head>
        <title>Mail Movies</title>
        <meta
          name="description"
          content="Get full details about your favourite movie via Mail Movies straight to your e-mail"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        component="header"
        sx={{
          bgcolor: "red",
          color: "white",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            p: { lg: 2, xs: 3 },
            flexDirection: { lg: "row", xs: "column" },
            gap: { xs: 4, lg: 0 },
            alignItems: "center",
          }}
        >
          <Logo />
          <Search />
        </Container>
      </Box>
    </>
  );
}

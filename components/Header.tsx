import Box from "@mui/material/Box";
import Head from "next/head";

import Logo from "@/components/Logo";
import Search from "@/components/Search";
import { Container } from "@mui/material";

export default function Header() {
  return (
    <>
      <Head>
        <title>Book Movies</title>
        <meta name="description" content="Book Movies in minutes" />
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
            p: 2,
          }}
        >
          <Logo />
          <Search />
        </Container>
      </Box>
    </>
  );
}

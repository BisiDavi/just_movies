import Box from "@mui/material/Box";
import Head from "next/head";

export default function Header() {
  return (
    <Box component="header">
      <Head>
        <title>Book Movies</title>
        <meta name="description" content="Book Movies in minutes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Box>
  );
}

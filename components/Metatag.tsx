import Head from "next/head";

export default function Metatag() {
  return (
    <Head>
      <title>Mail Movies</title>
      <meta
        name="description"
        content="Get full details about your favourite movie via Mail Movies straight to your e-mail"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

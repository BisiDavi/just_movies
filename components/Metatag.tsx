import Head from "next/head";

export default function Metatag() {
  return (
    <Head>
      <title>Read movies gist from your inbox | Mail Movies</title>
      <meta
        name="description"
        content="Get full details about your favourite movie via Mail Movies straight to your e-mail"
        key="desc"
      />
      <meta
        property="og:title"
        content="Read movies gist from your inbox | Mail Movies"
      />
      <meta
        name="og:description"
        content="Get full details about your favourite movie via Mail Movies straight to your e-mail"
        key="desc"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/verrb-inc/image/upload/v1681525228/Screenshot_2023-04-15_at_3.16.51_AM_yrf6oz.png"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

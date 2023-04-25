import Movies from "@/components/Movies";
import Metatag from "@/components/Metatag";
import Layout from "@/layout";
import TypewriterEffect from "@/components/Typewriter";

export default function Home() {
  return (
    <>
      <Metatag />
      <Layout>
        <TypewriterEffect />
        <Movies />
      </Layout>
    </>
  );
}

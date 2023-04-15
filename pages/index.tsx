import Movies from "@/components/Movies";
import Metatag from "@/components/Metatag";
import Layout from "@/layout";

export default function Home() {
  return (
    <>
      <Metatag />
      <Layout>
        <Movies />
      </Layout>
    </>
  );
}

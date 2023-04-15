import Movies from "@/components/Movies";
import Layout from "@/layout";
import Metatag from "@/components/Metatag";

export default function Home() {
  return (
    <Layout metatag={<Metatag />}>
      <Movies />
    </Layout>
  );
}

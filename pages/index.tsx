import Movies from "@/components/Movies";
import Layout from "@/layout";
import ProviderLayout from "@/layout/ProviderLayout";

export default function Home() {
  return (
    <Layout>
      <ProviderLayout>
        <Movies />
      </ProviderLayout>
    </Layout>
  );
}

import ProviderLayout from "@/layout/ProviderLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderLayout>
      <Component {...pageProps} />
    </ProviderLayout>
  );
}

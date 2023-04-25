import { PropsWithChildren } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { nunito } from "@/utils/font";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className={nunito.className}>{children}</main>
      <Footer />
    </>
  );
}

import { PropsWithChildren } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface Props {
  metatag: JSX.Element;
}

export default function Layout({
  children,
  metatag,
}: PropsWithChildren<Props>) {
  return (
    <>
      {metatag}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

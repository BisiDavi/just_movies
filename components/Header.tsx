import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { useRouter } from "next/router";

import Logo from "@/components/Logo";
import Search from "@/components/Search";

import useScroll from "@/hooks/useScroll";

export default function Header() {
  const router = useRouter();
  const { scroll } = useScroll();

  const headerPosition =
    Number(scroll) > 100
      ? { position: "fixed", top: 0, width: "100%", zIndex: 10, left: 0 }
      : "";

  const headerClassName =
    Number(scroll) > 100 ? "animate__animated animate__fadeInDown" : "";

  return (
    <Box
      className={headerClassName}
      component="header"
      sx={{
        bgcolor: "red",
        color: "white",
        ...headerPosition,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          p: { lg: 2, xs: "20px 30px" },
          flexDirection: { md: "row", xs: "column" },
          gap: { xs: 4, lg: 0 },
          alignItems: "center",
        }}
      >
        <Logo />
        {router.route === "/" && <Search />}
      </Container>
    </Box>
  );
}

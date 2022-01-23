import Footer from "./Footer";
import Navigation from "./Navigation";
import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Box bgColor="brand.black">{children}</Box>
      <Footer />
    </>
  );
}

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    brand: {
      red: "#B9090B",
      black: "#141414",
      gray: "#808080",
      lightGray: "#E5E5E5",
      white: "#FFFFFF",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

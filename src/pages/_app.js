import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#319795",
    800: "#153e75",
    700: "#2a69ac",
    50: "FC8181",
  },
};

const theme = extendTheme({ colors });

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

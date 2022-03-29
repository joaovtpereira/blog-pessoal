import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "../components/Header";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      {/* <ChakraProvider> */}
      <Component {...pageProps} />
      {/* </ChakraProvider> */}
    </>
  );
}

export default MyApp;

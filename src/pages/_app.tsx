import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { CartProvider } from "../context/CartContext";

import { Header } from "../components/header";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;

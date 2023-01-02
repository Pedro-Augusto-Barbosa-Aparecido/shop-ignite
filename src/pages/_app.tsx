import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from "../assets/logo.svg";
import { CartMenuTrigger, Header } from "../styles/pages/app";
import Image from "next/image";
import { CartContext, CartProvider } from "../context/CartContext";
import { Handbag } from "phosphor-react";

import { useContextSelector } from "use-context-selector";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  const quantityOfProductOnCart = useContextSelector(
    CartContext,
    (cart) => cart.quantityOfProductOnCard
  );

  return (
    <CartProvider>
      <Header>
        <Image src={logoImg} alt="" />
        <CartMenuTrigger>
          <Handbag size={24} weight="bold" />
          {quantityOfProductOnCart > 0 && <span>0</span>}
        </CartMenuTrigger>
      </Header>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;

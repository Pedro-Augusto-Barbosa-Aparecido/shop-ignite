import Image from "next/image";
import {
  CartMenuTrigger,
  Header as HeaderContainer,
} from "../../styles/pages/app";
import { Handbag } from "phosphor-react";
import { useContext } from "react";

import logoImg from "../../assets/logo.svg";
import { CartContext } from "../../context/CartContext";
import Link from "next/link";

export function Header() {
  const { quantityOfProductOnCard } = useContext(CartContext);

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      <CartMenuTrigger color={quantityOfProductOnCard > 0}>
        <Handbag size={24} weight="bold" />
        {quantityOfProductOnCard > 0 && <span>{quantityOfProductOnCard}</span>}
      </CartMenuTrigger>
    </HeaderContainer>
  );
}

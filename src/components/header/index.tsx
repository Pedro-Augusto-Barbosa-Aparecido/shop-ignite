import Image from "next/image";
import {
  CartMenuTrigger,
  Header as HeaderContainer,
} from "../../styles/pages/app";
import { Handbag } from "phosphor-react";
import { useContextSelector } from "use-context-selector";

import logoImg from "../../assets/logo.svg";
import { CartContext } from "../../context/CartContext";
import Link from "next/link";

export function Header() {
  const quantityOfProductOnCard = useContextSelector(
    CartContext,
    (cart) => cart.quantityOfProductOnCard
  );
  const toggleMenubar = useContextSelector(
    CartContext,
    (cart) => cart.toggleMenubar
  );

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      <CartMenuTrigger
        color={quantityOfProductOnCard > 0}
        onClick={toggleMenubar}
      >
        <Handbag size={24} weight="bold" />
        {quantityOfProductOnCard > 0 && <span>{quantityOfProductOnCard}</span>}
      </CartMenuTrigger>
    </HeaderContainer>
  );
}

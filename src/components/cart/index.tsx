import { useContextSelector } from "use-context-selector";
import {
  BuyButton,
  CartContainer,
  CloseButton,
  CloseMenuArea,
  ImageContainer,
  Menu,
  Price,
  PriceContainer,
  ProductName,
  ProductsContainer,
  PurchaseContainer,
  QuantityContainer,
} from "./styles";
import { CartContext } from "../../context/CartContext";
import Image from "next/image";

import { useState } from "react";
import axios from "axios";

export function Menubar() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState<boolean>(false);

  const toggleMenubar = useContextSelector(
    CartContext,
    (cart) => cart.toggleMenubar
  );

  const removeProductOfCart = useContextSelector(
    CartContext,
    (cart) => cart.removeProductOfCart
  );

  const productsOnCart = useContextSelector(
    CartContext,
    (cart) => cart.productsOnCart
  );

  const quantityOfProducts = useContextSelector(
    CartContext,
    (cart) => cart.quantityOfProductOnCard
  );

  const totalPrice = productsOnCart.reduce((price, product) => {
    return price + product.priceWithoutFormatting;
  }, 0);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        prices: productsOnCart.map((product) => {
          return { price: product.defaultPriceId, quantity: 1 };
        }),
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout");
    }
  }

  return (
    <CartContainer>
      <CloseMenuArea onClick={toggleMenubar} />
      <Menu>
        <CloseButton size={28} weight="bold" onClick={toggleMenubar} />
        <section>
          <h1>Sacola de compras</h1>
          <ProductsContainer>
            {productsOnCart.map((product) => (
              <div key={product.id}>
                <ImageContainer>
                  <Image src={product.imageUrl} alt="" width={90} height={90} />
                </ImageContainer>
                <div>
                  <div>
                    <ProductName>{product.name}</ProductName>
                    <Price>{product.price}</Price>
                  </div>

                  <button
                    onClick={() => removeProductOfCart({ id: product.id })}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </ProductsContainer>
        </section>
        <PurchaseContainer>
          <QuantityContainer>
            <span>Quantidade</span>
            <span>{quantityOfProducts} itens</span>
          </QuantityContainer>
          <PriceContainer>
            <span>Valor Total</span>
            <span>
              {new Intl.NumberFormat("pt-BR", {
                currency: "BRL",
                style: "currency",
              }).format(totalPrice / 100)}
            </span>
          </PriceContainer>
          <BuyButton
            disabled={isCreatingCheckoutSession || quantityOfProducts === 0}
            onClick={handleBuyProduct}
          >
            Finalizar Compra
          </BuyButton>
        </PurchaseContainer>
      </Menu>
    </CartContainer>
  );
}

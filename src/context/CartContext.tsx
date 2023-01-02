import React, { useCallback, useState } from "react";
import { Container } from "../styles/pages/app";
import { Menubar } from "../components/cart";

import { createContext } from "use-context-selector";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
  priceWithoutFormatting: number;
}

type CartContextType = {
  productsOnCart: Product[];
  quantityOfProductOnCard: number;
  toggleMenubar: () => void;
  addProductOnCart: (product: Product) => void;
  removeProductOfCart: (productId: Pick<Product, "id">) => void;
};

export const CartContext = createContext({} as CartContextType);

type CartProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export function CartProvider({ children }: CartProviderProps) {
  const [productsOnCart, setProductsOnCart] = useState<Product[]>([]);
  const [isMenubarOpen, setIsMenubarOpen] = useState<boolean>(false);
  const quantityOfProductOnCard = productsOnCart.length;

  const addProductOnCart = useCallback(
    ({
      price,
      id,
      defaultPriceId,
      description,
      imageUrl,
      name,
      priceWithoutFormatting,
    }: Product) => {
      const isProductAlreadyExistOnCart = productsOnCart.some(
        (product) => product.id === id
      );

      if (isProductAlreadyExistOnCart) {
        alert("Product already on cart!!");
        return;
      }

      setProductsOnCart((products) => [
        ...products,
        {
          price,
          id,
          defaultPriceId,
          description,
          imageUrl,
          name,
          priceWithoutFormatting,
        },
      ]);
    },
    [productsOnCart]
  );

  const removeProductOfCart = useCallback(
    ({ id }: Pick<Product, "id">) => {
      const doesProductOnCart = productsOnCart.find(
        (product) => product.id === id
      );

      if (!doesProductOnCart) {
        alert("This product isn't on cart!");
        return;
      }

      setProductsOnCart(productsOnCart.filter((product) => product.id !== id));
    },
    [productsOnCart]
  );

  const toggleMenubar = useCallback(() => {
    setIsMenubarOpen((state) => !state);
  }, []);

  return (
    <CartContext.Provider
      value={{
        productsOnCart,
        addProductOnCart,
        removeProductOfCart,
        quantityOfProductOnCard,
        toggleMenubar,
      }}
    >
      <Container>{children}</Container>
      {isMenubarOpen && <Menubar />}
    </CartContext.Provider>
  );
}

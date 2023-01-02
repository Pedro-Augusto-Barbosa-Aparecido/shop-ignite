import { createContext } from "use-context-selector";
import { Container } from "../styles/pages/app";
import React, { useCallback, useState } from "react";

interface Product {
  id: string;
  priceId: string;
}

type CartContextType = {
  productsOnCart: Product[];
  quantityOfProductOnCard: number;
  addProductOnCart: (product: Product) => void;
  removeProductOfCart: (productId: Pick<Product, "id">) => void;
};

export const CartContext = createContext({} as CartContextType);

type CartProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export function CartProvider({ children }: CartProviderProps) {
  const [productsOnCart, setProductsOnCart] = useState<Product[]>([]);

  const quantityOfProductOnCard = productsOnCart.length;

  const addProductOnCart = useCallback(({ priceId, id }: Product) => {
    setProductsOnCart((products) => [...products, { priceId, id }]);
  }, []);

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

  return (
    <CartContext.Provider
      value={{
        productsOnCart,
        addProductOnCart,
        removeProductOfCart,
        quantityOfProductOnCard,
      }}
    >
      <Container>{children}</Container>
    </CartContext.Provider>
  );
}

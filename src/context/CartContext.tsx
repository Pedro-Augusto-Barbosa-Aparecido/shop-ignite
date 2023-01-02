import React, { createContext, useState } from "react";
import { Container } from "../styles/pages/app";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
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

  const addProductOnCart = ({
    price,
    id,
    defaultPriceId,
    description,
    imageUrl,
    name,
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
      { price, id, defaultPriceId, description, imageUrl, name },
    ]);
  };

  const removeProductOfCart = ({ id }: Pick<Product, "id">) => {
    const doesProductOnCart = productsOnCart.find(
      (product) => product.id === id
    );

    if (!doesProductOnCart) {
      alert("This product isn't on cart!");
      return;
    }

    setProductsOnCart(productsOnCart.filter((product) => product.id !== id));
  };

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

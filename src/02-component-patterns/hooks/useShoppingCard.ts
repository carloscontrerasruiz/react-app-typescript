import { useState } from "react";
import { Product } from "../components/ProductCard/interfaces/ProductInterfaces";

interface ProductInCart extends Product {
  count: number;
}

const product = {
  id: "1",
  title: "Producto",
  img: "./coffee-mug.png",
};
const product1 = {
  id: "2",
  title: "Producto 2",
  img: "./coffee-mug2.png",
};

export const products: Product[] = [product, product1];

export const useShoppingCard = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldState) => {
      const productInCard: ProductInCart = oldState[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCard.count + count, 0) > 0) {
        productInCard.count += count;
        return {
          ...oldState,
          [product.id]: productInCard,
        };
      }
      //Borrar item
      const { [product.id]: toDelete, ...rest } = oldState;
      return rest;

      /*if (count === 0) {
            const { [product.id]: toDelete, ...rest } = oldState;
            console.log({ toDelete });
            return rest;
          }
    
          return {
            ...shoppingCart,
            [product.id]: {
              ...product,
              count,
            },
          };*/
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};

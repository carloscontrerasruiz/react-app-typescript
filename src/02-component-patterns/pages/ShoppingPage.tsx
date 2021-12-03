import { ProductCard } from "../components/ProductCard";
import { ProductButtons } from "../components/ProductCard/childComponents/ProductButtons";
import { ProductImage } from "../components/ProductCard/childComponents/ProductImage";
import { ProductTitle } from "../components/ProductCard/childComponents/ProductTitle";
import "../styles/custom-styles.css";
import { Product } from "../components/ProductCard/interfaces/ProductInterfaces";
import { useState } from "react";

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

const products: Product[] = [product, product1];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
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
    console.log("productchange", count, product);
    setShoppingCart((oldState) => {
      if (count === 0) {
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
      };
    });

    console.log(shoppingCart);
  };

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={(e) => onProductCountChange(e)}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart" style={{ width: "100px" }}>
        {Object.entries(shoppingCart).map((productInCart) => (
          <ProductCard
            key={productInCart[0]}
            product={productInCart[1]}
            className="bg-dark text-white"
            style={{ width: "100%" }}
            value={productInCart[1].count}
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

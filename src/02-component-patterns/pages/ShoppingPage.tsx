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
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark text-white"
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ reset, incresedBy }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" />
              <ProductButtons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
              <button onClick={() => incresedBy(2)}>+2</button>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};

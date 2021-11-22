import { useProduct } from "./hooks/useProduct";
import styles from "../../styles/styles.module.css";
import { createContext } from "react";
import {
  ProductContextProps,
  ProductCardProps,
} from "./interfaces/ProductInterfaces";
import { ProductImage } from "./childComponents/ProductImage";
import { ProductTitle } from "./childComponents/ProductTitle";
import { ProductButtons } from "./childComponents/ProductButtons";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, incresedBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        incresedBy,
        product,
      }}
    >
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} incresedBy={incresedBy} /> */}
      </div>
    </Provider>
  );
};

import { useProduct } from "./hooks/useProduct";
import styles from "../../styles/styles.module.css";
import { createContext } from "react";
import {
  ProductContextProps,
  ProductCardProps,
} from "./interfaces/ProductInterfaces";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  value,
  onChange,
}: ProductCardProps) => {
  const { counter, incresedBy } = useProduct({ onChange, product, value });
  return (
    <Provider
      value={{
        counter,
        incresedBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} incresedBy={incresedBy} /> */}
      </div>
    </Provider>
  );
};

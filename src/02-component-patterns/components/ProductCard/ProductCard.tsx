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
  initialValues,
  onChange,
}: ProductCardProps) => {
  const { counter, incresedBy, maxCount, isMAxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });
  return (
    <Provider
      value={{
        counter,
        incresedBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children &&
          children!({
            count: counter,
            isMaxCountReached: isMAxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            incresedBy,
            reset,
          })}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} incresedBy={incresedBy} /> */}
      </div>
    </Provider>
  );
};

import { useContext } from "react";
import { ProductContext } from "../ProductCard";
import styles from "../../../styles/styles.module.css";
import { ProductTitleComponent } from "../interfaces/ProductInterfaces";

export const ProductTitle = ({
  title,
  className,
  style,
}: ProductTitleComponent) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};

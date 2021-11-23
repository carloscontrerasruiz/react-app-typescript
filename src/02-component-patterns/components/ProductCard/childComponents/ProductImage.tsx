import { useContext } from "react";
import noImage from "../../../assets/no-image.jpg";
import { ProductContext } from "../ProductCard";
import styles from "../../../styles/styles.module.css";
import { ProductImageComponent } from "../interfaces/ProductInterfaces";

export const ProductImage = ({
  img = "",
  className,
  style,
}: ProductImageComponent) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;
  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }
  return (
    <img
      src={imgToShow}
      className={`${styles.productImg} ${className}`}
      alt="Product"
      style={style}
    />
  );
};

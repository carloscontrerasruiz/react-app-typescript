import { useContext } from "react";
import { ProductContext } from "../ProductCard";
import styles from "../../../styles/styles.module.css";
import { ProductButtonsComponent } from "../interfaces/ProductInterfaces";

export const ProductButtons = ({
  className,
  style,
}: ProductButtonsComponent) => {
  const { incresedBy, counter } = useContext(ProductContext);
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => incresedBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => incresedBy(1)}>
        +
      </button>
    </div>
  );
};

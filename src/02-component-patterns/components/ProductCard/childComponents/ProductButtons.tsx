import { useCallback, useContext } from "react";
import { ProductContext } from "../ProductCard";
import styles from "../../../styles/styles.module.css";
import { ProductButtonsComponent } from "../interfaces/ProductInterfaces";

export const ProductButtons = ({
  className,
  style,
}: ProductButtonsComponent) => {
  const { incresedBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReach = useCallback(() => {
    if (maxCount && counter === maxCount) {
      return true;
    }
  }, [counter, maxCount]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => incresedBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${isMaxReach() && styles.disabled}`}
        onClick={() => incresedBy(1)}
      >
        +
      </button>
    </div>
  );
};

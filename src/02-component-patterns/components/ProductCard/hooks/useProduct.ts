import { useEffect, useRef, useState } from "react";
import { Args, Product } from "../interfaces/ProductInterfaces";

interface Props {
  onChange?: (args: Args) => void;
  product: Product;
  value?: number;
}
export const useProduct = ({ onChange, product, value = 0 }: Props) => {
  const [counter, setcounter] = useState(value);

  const isControled = useRef(!!onChange);

  const incresedBy = (value: number) => {
    if (isControled.current) {
      return onChange!({ count: value, product });
    }
    const newValue = Math.max(counter + value, 0);
    setcounter(newValue);
    //onChange && onChange({ count: newValue, product: product });
  };

  useEffect(() => {
    setcounter(value);
  }, [value]);

  return {
    counter,
    incresedBy,
  };
};

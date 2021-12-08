import { useEffect, useRef, useState } from "react";
import { Args, InitialValues, Product } from "../interfaces/ProductInterfaces";

interface Props {
  onChange?: (args: Args) => void;
  product: Product;
  value?: number;
  initialValues?: InitialValues;
}
export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: Props) => {
  const [counter, setcounter] = useState(initialValues?.count || value);

  const isMounted = useRef(false);
  const incresedBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }
    setcounter(newValue);
    onChange && onChange({ count: newValue, product: product });
  };

  const reset = () => {
    setcounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setcounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    incresedBy,
    isMAxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset,
  };
};

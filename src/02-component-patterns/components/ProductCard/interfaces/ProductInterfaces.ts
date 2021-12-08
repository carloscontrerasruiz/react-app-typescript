import { ReactElement, CSSProperties } from "react";

interface GenralPropsComponent {
  className?: string;
  //children?: ReactElement | ReactElement[];
  children?: (args: ProductCardHandlers) => JSX.Element;
  style?: CSSProperties;
}
export interface ProductCardProps extends GenralPropsComponent {
  product: Product;
  //onChange?: (product: Product, count: number) => void;
  onChange?: (args: Args) => void;
  value?: number;
  initialValues?: InitialValues;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}
export interface ProductContextProps {
  counter: number;
  product: Product;
  maxCount?: number;
  incresedBy: (value: number) => void;
}

export interface ProductTitleComponent extends GenralPropsComponent {
  title?: string;
}

export interface ProductImageComponent extends GenralPropsComponent {
  img?: string;
}
export interface ProductButtonsComponent extends GenralPropsComponent {
  img?: string;
}

export interface Args {
  product: Product;
  count: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  incresedBy: (value: number) => void;
  reset: () => void;
}
